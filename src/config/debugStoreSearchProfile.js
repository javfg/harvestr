export const debugStoreSearchProfile =
[
  {
    "name": "UniProt",
    "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
    "fetcher": "standardFetcher",
    "parser": "xmlParser",
    "saveData": [
      "GENENAME",
      "SEQUENCE"
    ],
    "fields": [
      {
        "name": "accession",
        "entries": [
          {
            "name": "Accession",
            "path": "uniprot/entry/accession"
          }
        ]
      },
      {
        "name": "Gene name",
        "entries": [
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene/name",
            "saveData": "GENENAME"
          }
        ]
      },
      {
        "name": "Full name",
        "entries": [
          {
            "name": "Full name",
            "path": "uniprot/entry/protein/submittedName/fullName",
            "or": "uniprot/entry/protein/recommendedName/fullName"
          }
        ]
      },
      {
        "name": "Sequence",
        "entries": [
          {
            "name": "Sequence",
            "path": "uniprot/entry/sequence",
            "removeNewLines": true,
            "saveData": "SEQUENCE"
          }
        ]
      },
      {
        "name": "Molecular function",
        "entries": [
          {
            "name": "GO ID",
            "path": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/../@id",
            "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
          },
          {
            "name": "Description",
            "path": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/@value"
          }
        ]
      },
      {
        "name": "Subcellular location",
        "entries": [
          {
          "name": "GO ID",
          "path": "uniprot/entry/dbReference/property[starts-with(@value, 'C:')]/../@id",
          "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
          },
          {
            "name": "Description",
            "path": "uniprot/entry/dbReference/property[starts-with(@value, 'C:')]/@value"
          }
        ]
      },
      {
        "name": "Disgenet ID",
        "entries": [
          {
            "path": "uniprot/entry/dbReference[@type='DisGeNET']/@id",
            "linkTo": "http://disgenetorg/search?q={{value}}",
            "saveData": "DISGENET"
          }
        ]
      },
      {
        "name": "BioGrid ID",
        "entries": [
          {
            "path": "uniprot/entry/dbReference[@type='BioGrid']/@id",
            "linkTo": "https://thebiogrid.org/{{value}}"
          }
        ]
      },
      {
        "name": "Glycosylation sites",
        "entries": [
          {
            "name": "description",
            "path": "uniprot/entry/feature[@type='glycosylation site']/@description"
          },
          {
            "name": "position",
            "path": "uniprot/entry/feature[@type='glycosylation site']/location/position/@position"
          }
        ]
      },
      {
        "name": "Disulfide bonds",
        "entries": [
          {
            "name": "Begin",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location/begin/@position",
          },
          {
            "name": "End",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location/end/@position",
          },
          {
            "name": "Position",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location/position/@position",
          }
        ]
      },
      {
        "name": "Tissue specificity",
        "entries": [
          {
            "name": "Tissue specificity",
            "path": "uniprot/entry/comment[@type='tissue specificity']/text",
          }
        ]
      },
      {
        "name": "Reactome pathways",
        "entries": [
          {
            "name": "ID",
            "path": "uniprot/entry/dbReference[@type='Reactome']/@id",
          },
          {
            "name": "Value",
            "path": "uniprot/entry/dbReference[@type='Reactome']/property[@type='pathway name']/@value",
          }
        ]
      }
    ]
  }
]

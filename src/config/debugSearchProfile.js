export const debugSearchProfile =
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
        "path": "uniprot/entry/accession",
        "entries": [
          {
            "linkTo": "https://uniprot.org/uniprot/{{value}}",
            "name": "Accession",
            "path": "."
          }
        ]
      },
      {
        "name": "Gene name",
        "path": "uniprot/entry/gene",
        "entries": [
          {
            "name": "Gene name",
            "path": "name[@type='primary']",
            "saveData": "GENENAME"
          }
        ]
      },
      {
        "name": "Full name",
        "path": "uniprot/entry/protein/submittedName/fullName",
        "or": "uniprot/entry/protein/recommendedName/fullName",
        "entries": [
          {
            "name": "Full name",
            "path": "."
          }
        ]
      },
      {
        "name": "Sequence",
        "path": "uniprot/entry/sequence",
        "entries": [
          {
            "name": "Sequence",
            "path": ".",
            "removeNewLines": true,
            "saveData": "SEQUENCE"
          }
        ]
      },
      {
        "name": "Molecular function",
        "path": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/..",
        "entries": [
          {
            "name": "GO ID",
            "path": "@id",
            "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
          },
          {
            "name": "Description",
            "path": "property[@type='term']/@value"
          }
        ]
      },
      {
        "name": "Subcellular location",
        "path": "uniprot/entry/dbReference/property[starts-with(@value, 'C:')]/..",
        "entries": [
          {
          "name": "GO ID",
          "path": "@id",
          "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
          },
          {
            "name": "Description",
            "path": "property[starts-with(@value, 'C:')]/@value"
          }
        ]
      },
      {
        "name": "Disgenet ID",
        "path": "uniprot/entry/dbReference[@type='DisGeNET']/@id",
        "entries": [
          {
            "name": "Disgenet ID",
            "path": ".",
            "linkTo": "http://disgenet.org/search?q={{value}}",
            "saveData": "DISGENET"
          }
        ]
      },
      {
        "name": "BioGrid ID",
        "path": "uniprot/entry/dbReference[@type='BioGrid']/@id",
        "entries": [
          {
            "name": "BioGrid ID",
            "path": ".",
            "linkTo": "https://thebiogrid.org/{{value}}"
          }
        ]
      },
      {
        "name": "Glycosylation sites",
        "path": "uniprot/entry/feature[@type='glycosylation site']",
        "entries": [
          {
            "name": "description",
            "path": "@description"
          },
          {
            "name": "position",
            "path": "location/position/@position"
          }
        ]
      },
      {
        "name": "Disulfide bonds",
        "path": "uniprot/entry/feature[@type='disulfide bond']/location",
        "entries": [
          {
            "name": "Begin",
            "path": "begin/@position"
          },
          {
            "name": "End",
            "path": "end/@position"
          },
          {
            "name": "Position",
            "path": "position/@position"
          }
        ]
      },
      {
        "name": "Tissue specificity",
        "path": "uniprot/entry/comment[@type='tissue specificity']/text",
        "entries": [
          {
            "name": "Tissue specificity",
            "path": "."
          }
        ]
      },
      {
        "name": "Reactome pathways",
        "path": "uniprot/entry/dbReference[@type='Reactome']",
        "entries": [
          {
            "name": "ID",
            "path": "@id",
          },
          {
            "name": "Value",
            "path": "property[@type='pathway name']/@value"
          }
        ]
      }
    ]
  },
  // {
  //   "name": "Biogrid",
  //   "urlTemplate": "https://webservice.thebiogrid.org/interactions/?geneList={{GENENAME}}&accessKey=8b95f31461c48d27eb8cce6e8f1caa15",
  //   "fetcher": "standardFetcher",
  //   "parser": "tsvParser",
  //   "requires": "GENENAME",
  //   "fields": [
  //     {
  //       "name": "BioGRID Interaction ID",
  //       "field": 0
  //     },
  //     {
  //       "name": "Interactor A",
  //       "field": 5
  //     },
  //     {
  //       "name": "Interactor B",
  //       "field": 6
  //     },
  //     {
  //       "name": "Pubmed ID",
  //       "field": 14
  //     },
  //     {
  //       "name": "Score",
  //       "field": 18
  //     }
  //   ]
  // }
]
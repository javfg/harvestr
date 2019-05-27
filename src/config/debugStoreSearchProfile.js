export const debugStoreSearchProfile =
[
  {
    "name": "UniProt",
    "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
    "fetcher": "standardFetcher",
    "parser": "xmlParser",
    "saveData": ["GENENAME", "SEQUENCE"],
    "fields": [
      {
        "name": "Accession",
        "field": "uniprot/entry/accession"
      },
      {
        "name": "Gene name",
        "field": "uniprot/entry/gene/name",
        "saveData": "GENENAME"
      },
      {
        "name": "Full name",
        "field": "uniprot/entry/protein/submittedName/fullName",
        "or": "uniprot/entry/protein/recommendedName/fullName",
      },
      {
        "name": "Sequence",
        "field": "uniprot/entry/sequence",
        "removeNewLines": true,
        "saveData": "SEQUENCE",
      },

      ////////////////////////////////// GO TOGETHER //////////////////////////////////
      {
        "name": "Molecular function GO ID",
        "field": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/../@id",
        "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
      },
      {
        "name": "Molecular function Description",
        "field": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/@value"
      },
      /////////////////////////////////////////////////////////////////////////////////

      ////////////////////////////////// GO TOGETHER //////////////////////////////////
      {
        "name": "Subcellular location GO ID",
        "field": "uniprot/entry/dbReference/property[starts-with(@value, 'C:')]/../@id",
        "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}"
      },
      {
        "name": "Subcellular location Description",
        "field": "uniprot/entry/dbReference/property[starts-with(@value, 'C:')]/@value"
      },
      /////////////////////////////////////////////////////////////////////////////////

      {
        "name": "Disgenet ID",
        "field": "uniprot/entry/dbReference[@type='DisGeNET']/@id",
        "linkTo": "http://disgenetorg/search?q={{value}}",
        "saveData": "DISGENET"
      },

      {
        "name": "BioGrid ID",
        "field": "uniprot/entry/dbReference[@type='BioGrid']/@id",
        "linkTo": "https://thebiogrid.org/{{value}}"
      },

      ////////////////////////////////// GO TOGETHER //////////////////////////////////
      {
        "name": "Glycosylation sites description",
        "field": "uniprot/entry/feature[@type='glycosylation site']/@description"
      },
      {
        "name": "Glycosylation sites position",
        "field": "uniprot/entry/feature[@type='glycosylation site']/location/position/@position"
      },
      /////////////////////////////////////////////////////////////////////////////////

      ////////////////////////////////// GO TOGETHER //////////////////////////////////
      {
        "name": "Disulfide bonds begin",
        "type": "object",
        "field": "uniprot/entry/feature[@type='disulfide bond']/location/begin/@position",
      },
      {
        "name": "Disulfide bonds end",
        "type": "object",
        "field": "uniprot/entry/feature[@type='disulfide bond']/location/end/@position",
      },
      {
        "name": "Disulfide bonds position",
        "type": "object",
        "field": "uniprot/entry/feature[@type='disulfide bond']/location/position/@position",
      },
      /////////////////////////////////////////////////////////////////////////////////

      {
        "name": "Tissue specificity",
        "field": "uniprot/entry/comment[@type='tissue specificity']/text",
      },

      ////////////////////////////////// GO TOGETHER //////////////////////////////////
      {
        "name": "Reactome pathways ID",
        "field": "uniprot/entry/dbReference[@type='Reactome']/@id",
      },
      {
        "name": "Reactome pathways value",
        "field": "uniprot/entry/dbReference[@type='Reactome']/property[@type='pathway name']/@value",
      }
    ]
  }
]
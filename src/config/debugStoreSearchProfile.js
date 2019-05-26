export const debugStoreSearchProfile =
[
  {
    "name": "UniProt",
    "url": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
    "fetcher": "standardFetcher",
    "parser": "xmlParser",
    "saveData": [
      "SEQUENCE",
      "DISGENET",
      "GENENAME"
    ],
    "fields": [
      {
        "name": "Accession",
        "field": "uniprot.entry.accession",
        "type": "text",
        "multiple": true
      },
      {
        "name": "Gene name",
        "type": "text",
        "field": "uniprot.entry.gene.name",
        "saveData": [
          "GENENAME",
          -1
        ]
      },
      {
        "name": "Full name",
        "type": "text",
        "field": "uniprot.entry.protein.submittedName.fullName",
        "or": "uniprot.entry.protein.recommendedName.fullName"
      },
      {
        "name": "Sequence",
        "type": "text",
        "field": "uniprot.entry.sequence",
        "removeNewLines": true,
        "saveData": [
          "SEQUENCE",
          -1
        ]
      },
      {
        "name": "Molecular function",
        "type": "object",
        "field": "uniprot.entry.dbReference",
        "mustInclude": "\"value\":\"F:",
        "getFields": [
          {
            "field": "_attributes.id",
            "linkTo": "https://www.ebi.ac.uk/QuickGO/term/"
          },
          {
            "field": "property[0]._attributes.value",
            "deleteLeadingChars": 2
          }
        ]
      },
      {
        "name": "Subcellular location",
        "type": "object",
        "field": "uniprot.entry.dbReference",
        "mustInclude": "\"value\":\"C:",
        "getFields": [
          {
            "field": "_attributes.id",
            "linkTo": "https://www.ebi.ac.uk/QuickGO/term/"
          },
          {
            "field": "property[0]._attributes.value",
            "deleteLeadingChars": 2
          }
        ]
      },
      {
        "name": "Disgenet ID",
        "type": "object",
        "field": "uniprot.entry.dbReference",
        "mustInclude": "\"type\":\"DisGeNET\"",
        "saveData": [
          "DISGENET",
          1
        ],
        "getFields": [
          {
            "field": "_attributes.id"
          }
        ],
        "linkTo": "http://disgenet.org/search?q="
      },
      {
        "name": "Glycosylation sites",
        "type": "object",
        "field": "uniprot.entry.feature",
        "mustInclude": "\"type\":\"glycosylation site\"",
        "getFields": [
          {
            "field": "_attributes.description"
          },
          {
            "field": "location.position._attributes.position"
          }
        ]
      },
      {
        "name": "Disulfide bonds",
        "type": "object",
        "field": "uniprot.entry.feature",
        "mustInclude": "\"type\":\"disulfide bond\"",
        "getFields": [
          {
            "field": "location.begin._attributes.position",
            "and": "location.end._attributes.position",
            "or": "location.position._attributes.position"
          }
        ]
      },
      {
        "name": "Tissue specificity",
        "type": "object",
        "field": "uniprot.entry.comment",
        "mustInclude": "\"type\":\"tissue specificity\"",
        "getFields": [
          {
            "field": "text._text"
          }
        ]
      },
      {
        "name": "BioGrid ID",
        "type": "object",
        "field": "uniprot.entry.dbReference",
        "mustInclude": "\"type\":\"BioGrid\"",
        "getFields": [
          {
            "field": "_attributes.id"
          }
        ],
        "linkTo": "https://thebiogrid.org/"
      },
      {
        "name": "Reactome pathways",
        "type": "object",
        "field": "uniprot.entry.dbReference",
        "mustInclude": "\"type\":\"Reactome\"",
        "getFields": [
          {
            "field": "_attributes.id"
          },
          {
            "field": "property._attributes.value"
          }
        ]
      }
    ]
  },
  {
    "name": "TM Predictor",
    "url": "http://tm.life.nthu.edu.tw/result.php?seq={{SEQUENCE}}&submit=Submit",
    "fetcher": "serverFetcher",
    "parser": "htmlParser",
    "requires": "SEQUENCE",
    "fields": [
      {
        "name": "TM Index",
        "type": "text",
        "searchString": "Tm Index (TI)",
        "betweenTags": "font"
      }
    ]
  },
  {
    "name": "PMC",
    "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term={{GENENAME}}%20AND%antithrombin",
    "fetcher": "serverFetcher",
    "parser": "xmlParser",
    "requires": "GENENAME",
    "fields": [
      {
        "name": "IDs",
        "field": "eSearchResult.IdList.Id",
        "type": "text",
        "multiple": true,
        "linkTo": "https://www.ncbi.nlm.nih.gov/pmc/articles/"
      }
    ]
  },
  {
    "name": "Biogrid",
    "url": "https://webservice.thebiogrid.org/interactions/?geneList={{GENENAME}}&accessKey=8b95f31461c48d27eb8cce6e8f1caa15",
    "fetcher": "standardFetcher",
    "parser": "tsvParser",
    "requires": "GENENAME",
    "fields": [
      {
        "name": "BioGRID Interaction ID",
        "field": 0
      },
      {
        "name": "Interactor A",
        "field": 5
      },
      {
        "name": "Interactor B",
        "field": 6
      },
      {
        "name": "Pubmed ID",
        "field": 14
      },
      {
        "name": "Score",
        "field": 18
      }
    ]
  }
]
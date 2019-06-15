export const demoSearchProfile = [
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
        "saveData": "GENENAME",
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
        "saveData": "SEQUENCE",
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
            "name": "Description",
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
  {
    "name": "BioGRID",
    "urlTemplate": "https://webservice.thebiogrid.org/interactions/?geneList={{GENENAME}}&taxId=9606&interSpeciesExcluded=true&accessKey=8b95f31461c48d27eb8cce6e8f1caa15",
    "fetcher": "standardFetcher",
    "parser": "tsvParser",
    "requires": "GENENAME",
    "fields": [
      {
        "name": "BioGRID Interaction data",
        "entries": [
          {
            "name": "Interaction ID",
            "linkTo": "https://thebiogrid.org/interaction/{{value}}",
            "path": 0
          },
          {
            "name": "Interactor A",
            "linkTo": "https://thebiogrid.org/search.php?search={{value}}&organism=9606",
            "path": 7
          },
          {
            "name": "Interactor B",
            "linkTo": "https://thebiogrid.org/search.php?search={{value}}&organism=9606",
            "path": 8
          },
          {
            "name": "PubMed ID",
            "linkTo": "https://www.ncbi.nlm.nih.gov/pubmed/{{value}}",
            "path": 14
          },
          {
            "name": "Score",
            "path": 18
          }
        ]
      }
    ]
  },
  {
    "name": "PubMed",
    "urlTemplate": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term={{GENENAME}}%20AND20%antithrombin&api_key=b64927930264c4b75419b258a995db456707",
    "fetcher": "standardFetcher",
    "parser": "xmlParser",
    "requires": "GENENAME",
    "fields": [
      {
        "name": "gene AND antithombin",
        "path": "eSearchResult/IdList/Id",
        "entries": [
          {
            "name": "First 20 entries",
            "path": ".",
            "linkTo": "https://www.ncbi.nlm.nih.gov/pmc/articles/{{value}}"
          }
        ]
      },
      {
        "name": "count",
        "path": "eSearchResult/Count",
        "entries" : [
          {
            "name": "Count",
            "path": "."
          }
        ]
      }
    ]
  },
  {
    "name": "TM Predictor",
    "urlTemplate": "http://tm.life.nthu.edu.tw/result.php?seq={{SEQUENCE}}&submit=Submit",
    "fetcher": "serverFetcher",
    "parser": "htmlParser",
    "requires": "SEQUENCE",
    "fields": [
      {
        "name": "TM Index",
        "entries": [
          {
            "name": "TM Index",
            "path": {
              "searchString": "Tm Index (TI)",
              "betweenTags": "font"
            }
          }
        ]

      }
    ]
  },
];

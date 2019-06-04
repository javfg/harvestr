export const debugSearchResults = [
  {
    "name": "P07339",
    "savedData": {
      "GENENAME": "CTSD"
    },
    "queries": [
      {
        "name": "UniProt",
        "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
        "url": "https://www.uniprot.org/uniprot/P07339.xml",
        "fetcher": {},
        "parser": {},
        "saveData": [
          "GENENAME"
        ],
        "savedData": {
          "GENENAME": "CTSD"
        },
        "fields": [
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene",
            "saveData": "GENENAME",
            "entries": [
              {
                "name": "Gene name",
                "path": "name[@type='primary']",
                "saveData": "GENENAME",
                "value": [
                  "CTSD"
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Biogrid",
        "urlTemplate": "https://webservice.thebiogrid.org/interactions/?geneList={{GENENAME}}&taxId=9606&accessKey=8b95f31461c48d27eb8cce6e8f1caa15",
        "url": "https://webservice.thebiogrid.org/interactions/?geneList=CTSD&taxId=9606&accessKey=8b95f31461c48d27eb8cce6e8f1caa15",
        "fetcher": {},
        "parser": {},
        "requires": "GENENAME",
        "savedData": {
          "GENENAME": "CTSD"
        },
        "fields": [
          {
            "name": "BioGRID Interaction ID",
            "entries": [
              {
                "name": "BioGRID Interaction ID",
                "path": 0,
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "297286",
                  "558189",
                  "566087",
                  "566107",
                  "593175",
                  "666570",
                  "668010",
                  "687675",
                  "688049",
                  "715221",
                  "737361",
                  "746516",
                  "809427",
                  "838475",
                  "912767",
                  "1029829",
                  "1105528",
                  "1107236",
                  "1193506",
                  "1240887",
                  "1240903",
                  "1240935",
                  "1241424",
                  "1258043",
                  "1260573",
                  "1260574",
                  "1260575",
                  "1260576",
                  "1260577",
                  "1260578",
                  "1260579",
                  "1260580",
                  "1260581",
                  "1261887",
                  "1262763",
                  "1263301",
                  "1266206",
                  "1268545",
                  "1271706",
                  "1271717",
                  "1274128",
                  "1279768",
                  "1442837",
                  "1459379",
                  "1508231",
                  "1526086",
                  "2213123",
                  "2268451",
                  "2334615",
                  "2377690",
                  "2447856",
                  "2470591",
                  "2488122",
                  "2519561",
                  "2525984",
                  "2528308",
                  ""
                ],
                "links": [
                  "https://thebiogrid.org/297286",
                  "https://thebiogrid.org/558189",
                  "https://thebiogrid.org/566087",
                  "https://thebiogrid.org/566107",
                  "https://thebiogrid.org/593175",
                  "https://thebiogrid.org/666570",
                  "https://thebiogrid.org/668010",
                  "https://thebiogrid.org/687675",
                  "https://thebiogrid.org/688049",
                  "https://thebiogrid.org/715221",
                  "https://thebiogrid.org/737361",
                  "https://thebiogrid.org/746516",
                  "https://thebiogrid.org/809427",
                  "https://thebiogrid.org/838475",
                  "https://thebiogrid.org/912767",
                  "https://thebiogrid.org/1029829",
                  "https://thebiogrid.org/1105528",
                  "https://thebiogrid.org/1107236",
                  "https://thebiogrid.org/1193506",
                  "https://thebiogrid.org/1240887",
                  "https://thebiogrid.org/1240903",
                  "https://thebiogrid.org/1240935",
                  "https://thebiogrid.org/1241424",
                  "https://thebiogrid.org/1258043",
                  "https://thebiogrid.org/1260573",
                  "https://thebiogrid.org/1260574",
                  "https://thebiogrid.org/1260575",
                  "https://thebiogrid.org/1260576",
                  "https://thebiogrid.org/1260577",
                  "https://thebiogrid.org/1260578",
                  "https://thebiogrid.org/1260579",
                  "https://thebiogrid.org/1260580",
                  "https://thebiogrid.org/1260581",
                  "https://thebiogrid.org/1261887",
                  "https://thebiogrid.org/1262763",
                  "https://thebiogrid.org/1263301",
                  "https://thebiogrid.org/1266206",
                  "https://thebiogrid.org/1268545",
                  "https://thebiogrid.org/1271706",
                  "https://thebiogrid.org/1271717",
                  "https://thebiogrid.org/1274128",
                  "https://thebiogrid.org/1279768",
                  "https://thebiogrid.org/1442837",
                  "https://thebiogrid.org/1459379",
                  "https://thebiogrid.org/1508231",
                  "https://thebiogrid.org/1526086",
                  "https://thebiogrid.org/2213123",
                  "https://thebiogrid.org/2268451",
                  "https://thebiogrid.org/2334615",
                  "https://thebiogrid.org/2377690",
                  "https://thebiogrid.org/2447856",
                  "https://thebiogrid.org/2470591",
                  "https://thebiogrid.org/2488122",
                  "https://thebiogrid.org/2519561",
                  "https://thebiogrid.org/2525984",
                  "https://thebiogrid.org/2528308",
                  "https://thebiogrid.org/"
                ]
              }
            ]
          },
          {
            "name": "Interactor A",
            "entries": [
              {
                "name": "Interactor A",
                "path": 5,
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "-",
                  "-",
                  "RP11-101E13.2",
                  "RP11-101E13.2",
                  "-",
                  "-",
                  "-",
                  "-",
                  "RP11-297A16.3",
                  "-",
                  "-",
                  "-",
                  "-",
                  "HIV1gp8",
                  "RP3-330O12.3",
                  "RP3-339A18.4",
                  "-",
                  "RP11-115D7.2",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "RP11-57C19.3",
                  "PIG19",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "PP2593",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "tcag7.78",
                  "-",
                  "-",
                  "-",
                  "RP11-115D7.2",
                  "UNQ515/PRO1030",
                  null
                ],
                "links": [
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-101E13.2",
                  "https://thebiogrid.org/RP11-101E13.2",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-297A16.3",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/HIV1gp8",
                  "https://thebiogrid.org/RP3-330O12.3",
                  "https://thebiogrid.org/RP3-339A18.4",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-115D7.2",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-57C19.3",
                  "https://thebiogrid.org/PIG19",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/PP2593",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/tcag7.78",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-115D7.2",
                  "https://thebiogrid.org/UNQ515/PRO1030",
                  "https://thebiogrid.org/undefined"
                ]
              }
            ]
          },
          {
            "name": "Interactor B",
            "entries": [
              {
                "name": "Interactor B",
                "path": 6,
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "RP3-337O18.1",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "RP4-682C21.1",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "RP11-397D12.2",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  null
                ],
                "links": [
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP3-337O18.1",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP4-682C21.1",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/RP11-397D12.2",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/-",
                  "https://thebiogrid.org/undefined"
                ]
              }
            ]
          },
          {
            "name": "PubMed ID",
            "entries": [
              {
                "name": "PubMed ID",
                "path": 14,
                "linkTo": "https://www.ncbi.nlm.nih.gov/pubmed/{{value}}",
                "value": [
                  "12083803",
                  "20000738",
                  "21800051",
                  "21800051",
                  "18624398",
                  "22623531",
                  "16396496",
                  "21145461",
                  "21145461",
                  "15862967",
                  "21674799",
                  "22939629",
                  "22990118",
                  "22190034",
                  "22268729",
                  "25147182",
                  "25852190",
                  "25865307",
                  "26186194",
                  "24366813",
                  "24366813",
                  "24366813",
                  "25324306",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26344197",
                  "26465331",
                  "26499835",
                  "26496610",
                  "25617759",
                  "25464930",
                  "28065597",
                  "28514442",
                  "27751915",
                  "29117863",
                  "26618866",
                  "28199306",
                  "28515276",
                  "29509190",
                  "26217791",
                  "30575818",
                  null
                ],
                "links": [
                  "https://www.ncbi.nlm.nih.gov/pubmed/12083803",
                  "https://www.ncbi.nlm.nih.gov/pubmed/20000738",
                  "https://www.ncbi.nlm.nih.gov/pubmed/21800051",
                  "https://www.ncbi.nlm.nih.gov/pubmed/21800051",
                  "https://www.ncbi.nlm.nih.gov/pubmed/18624398",
                  "https://www.ncbi.nlm.nih.gov/pubmed/22623531",
                  "https://www.ncbi.nlm.nih.gov/pubmed/16396496",
                  "https://www.ncbi.nlm.nih.gov/pubmed/21145461",
                  "https://www.ncbi.nlm.nih.gov/pubmed/21145461",
                  "https://www.ncbi.nlm.nih.gov/pubmed/15862967",
                  "https://www.ncbi.nlm.nih.gov/pubmed/21674799",
                  "https://www.ncbi.nlm.nih.gov/pubmed/22939629",
                  "https://www.ncbi.nlm.nih.gov/pubmed/22990118",
                  "https://www.ncbi.nlm.nih.gov/pubmed/22190034",
                  "https://www.ncbi.nlm.nih.gov/pubmed/22268729",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25147182",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25852190",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25865307",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26186194",
                  "https://www.ncbi.nlm.nih.gov/pubmed/24366813",
                  "https://www.ncbi.nlm.nih.gov/pubmed/24366813",
                  "https://www.ncbi.nlm.nih.gov/pubmed/24366813",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25324306",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26344197",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26465331",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26499835",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26496610",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25617759",
                  "https://www.ncbi.nlm.nih.gov/pubmed/25464930",
                  "https://www.ncbi.nlm.nih.gov/pubmed/28065597",
                  "https://www.ncbi.nlm.nih.gov/pubmed/28514442",
                  "https://www.ncbi.nlm.nih.gov/pubmed/27751915",
                  "https://www.ncbi.nlm.nih.gov/pubmed/29117863",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26618866",
                  "https://www.ncbi.nlm.nih.gov/pubmed/28199306",
                  "https://www.ncbi.nlm.nih.gov/pubmed/28515276",
                  "https://www.ncbi.nlm.nih.gov/pubmed/29509190",
                  "https://www.ncbi.nlm.nih.gov/pubmed/26217791",
                  "https://www.ncbi.nlm.nih.gov/pubmed/30575818",
                  "https://www.ncbi.nlm.nih.gov/pubmed/undefined"
                ]
              }
            ]
          },
          {
            "name": "Score",
            "entries": [
              {
                "name": "Score",
                "path": 18,
                "value": [
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "0.75",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "0.798437898",
                  "-",
                  "-",
                  "-",
                  "-",
                  "0.235187907",
                  "0.100586762",
                  "0.109157009",
                  "0.093099224",
                  "0.119386103",
                  "0.073566716",
                  "0.080413723",
                  "0.111213283",
                  "0.186508639",
                  "0.103677701",
                  "0.680898485",
                  "0.189771064",
                  "0.211720037",
                  "0.263820507",
                  "0.079637644",
                  "0.175341075",
                  "0.074404546",
                  "0.312630609",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "0.802837157",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  "-",
                  null
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]




/*
[
  {
    "name": "P07339",
    "queries": [
      {
        "name": "UniProt",
        "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
        "url": "https://www.uniprot.org/uniprot/P07339.xml",
        "fetcher": {},
        "parser": {},
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
                "name": "Accession",
                "path": ".",
                "linkTo": "https://uniprot.org/uniprot/{{value}}",
                "value": [
                  "P07339",
                  "Q6IB57"
                ],
                "links": [
                  "https://uniprot.org/uniprot/P07339",
                  "https://uniprot.org/uniprot/Q6IB57"
                ]
              }
            ]
          },
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene/name",
            "entries": [
              {
                "name": "Gene name",
                "path": ".",
                "saveData": "GENENAME",
                "value": [
                  "CTSD",
                  "CPSD"
                ]
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
                "path": ".",
                "value": [
                  "Cathepsin D"
                ]
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
                "saveData": "SEQUENCE",
                "removeNewLines": true,
                "value": [
                  "MQPSSLLPLALCLLAAPASALVRIPLHKFTSIRRTMSEVGGSVEDLIAKGPVSKYSQAVPAVTEGPIPEVLKNYMDAQYYGEIGIGTPPQCFTVVFDTGSSNLWVPSIHCKLLDIACWIHHKYNSDKSSTYVKNGTSFDIHYGSGSLSGYLSQDTVSVPCQSASSASALGGVKVERQVFGEATKQPGITFIAAKFDGILGMAYPRISVNNVLPVFDNLMQQKLVDQNIFSFYLSRDPDAQPGGELMLGGTDSKYYKGSLSYLNVTRKAYWQVHLDQVEVASGLTLCKEGCEAIVDTGTSLMVGPVDEVRELQKAIGAVPLIQGEYMIPCEKVSTLPAITLKLGGKGYKLSPEDYTLKVSQAGKTLCLSGFMGMDIPPPSGPLWILGDVFIGRYYTVFDRDNNRVGFAEAARL"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0004190",
                  "GO:0070001",
                  "GO:0008233"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0004190",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0070001",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0008233"
                ]
              },
              {
                "name": "Description",
                "path": "property[@type='term']/@value",
                "value": [
                  "F:aspartic-type endopeptidase activity",
                  "F:aspartic-type peptidase activity",
                  "F:peptidase activity"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0062023",
                  "GO:0010008",
                  "GO:0070062",
                  "GO:0005576",
                  "GO:0005615",
                  "GO:1904813",
                  "GO:0043202",
                  "GO:0005765",
                  "GO:0005764",
                  "GO:0042470",
                  "GO:0045121",
                  "GO:0035580",
                  "GO:1904724"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0062023",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0010008",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0070062",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005576",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005615",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:1904813",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0043202",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005765",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005764",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0042470",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0045121",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0035580",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:1904724"
                ]
              },
              {
                "name": "Description",
                "path": "property[starts-with(@value, 'C:')]/@value",
                "value": [
                  "C:collagen-containing extracellular matrix",
                  "C:endosome membrane",
                  "C:extracellular exosome",
                  "C:extracellular region",
                  "C:extracellular space",
                  "C:ficolin-1-rich granule lumen",
                  "C:lysosomal lumen",
                  "C:lysosomal membrane",
                  "C:lysosome",
                  "C:melanosome",
                  "C:membrane raft",
                  "C:specific granule lumen",
                  "C:tertiary granule lumen"
                ]
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
                "saveData": "DISGENET",
                "linkTo": "http://disgenet.org/search?q={{value}}",
                "value": [
                  "1509"
                ],
                "links": [
                  "http://disgenet.org/search?q=1509"
                ]
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
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "107889"
                ],
                "links": [
                  "https://thebiogrid.org/107889"
                ]
              }
            ]
          },
          {
            "name": "Glycosylation sites",
            "path": "uniprot/entry/feature[@type='glycosylation site']",
            "entries": [
              {
                "name": "description",
                "path": "@description",
                "value": [
                  "O-linked (GalNAc...) threonine",
                  "N-linked (GlcNAc...) asparagine",
                  "N-linked (GlcNAc...) asparagine"
                ]
              },
              {
                "name": "position",
                "path": "location/position/@position",
                "value": [
                  "63",
                  "134",
                  "263"
                ]
              }
            ]
          },
          {
            "name": "Disulfide bonds",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location",
            "entries": [
              {
                "name": "Begin",
                "path": "begin/@position",
                "value": [
                  "91",
                  "110",
                  "286",
                  "329"
                ]
              },
              {
                "name": "End",
                "path": "end/@position",
                "value": [
                  "160",
                  "117",
                  "290",
                  "366"
                ]
              },
              {
                "name": "Position",
                "path": "position/@position",
                "value": [
                  "",
                  "",
                  "",
                  ""
                ]
              }
            ]
          },
          {
            "name": "Tissue specificity",
            "path": "uniprot/entry/comment[@type='tissue specificity']/text",
            "entries": [
              {
                "name": "Tissue specificity",
                "path": ".",
                "value": [
                  "Expressed in the aorta extracellular space (at protein level) (PubMed:20551380). Expressed in liver (at protein level) (PubMed:1426530)."
                ]
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
                "value": [
                  "R-HSA-1442490",
                  "R-HSA-2022377",
                  "R-HSA-2132295",
                  "R-HSA-6798695",
                  "R-HSA-9018519"
                ]
              },
              {
                "name": "Value",
                "path": "property[@type='pathway name']/@value",
                "value": [
                  "Collagen degradation",
                  "Metabolism of Angiotensinogen to Angiotensins",
                  "MHC class II antigen presentation",
                  "Neutrophil degranulation",
                  "Estrogen-dependent gene expression"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "J3KMX3",
    "queries": [
      {
        "name": "UniProt",
        "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
        "url": "https://www.uniprot.org/uniprot/J3KMX3.xml",
        "fetcher": {},
        "parser": {},
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
                "name": "Accession",
                "path": ".",
                "linkTo": "https://uniprot.org/uniprot/{{value}}",
                "value": [
                  "J3KMX3"
                ],
                "links": [
                  "https://uniprot.org/uniprot/J3KMX3"
                ]
              }
            ]
          },
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene/name",
            "entries": [
              {
                "name": "Gene name",
                "path": ".",
                "saveData": "GENENAME",
                "value": [
                  "AFP"
                ]
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
                "path": ".",
                "value": [
                  "Alpha-fetoprotein"
                ]
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
                "saveData": "SEQUENCE",
                "removeNewLines": true,
                "value": [
                  "MKWVESIFLIFLLNFTESRTLHRNEYGIASILDSYQCTAEISLADLATIFFAQFVQEATYKEVSKMVKDALTAIEKPTGDEQSSGCLENQLPAFLEELCHEKEILEKYGHSDCCSQSEEGRHNCFLAHKKPTPASIPLFQVPEPVTSCEAYEEDRETFMNKFIYEIARRHPFLYAPTILLWAARYDKIIPSCCKAENAVECFQTKAATVTKELRESSLLNQHACAVMKNFGTRTFQAITVTKLSQKFTKVNFTEIQKLVLDVAHVHEHCCRGDVLDCLQDGEKIMSYICSQQDTLSNKITECCKLTTLERGQCIIHAENDEKPEGLSPNLNRFLGDRDFNQFSSGEKNIFLASFVHEYSRRHPQLAVSVILRVAKGYQELLEKCFQTENPLECQDKGEEELQKYIQESQALAKRSCGLFQKLGEYYLQNAFLVAYTKKAPQLTSSELMAITRKMAATAATCCQLSEDKLLACGEGAADIIIGHLCIRHEMTPVNPGVGQCCTSSYANRRPCFSSLVVDETYVPPAFSDDKFIFHKDLCQAQGVALQTMKQEFLINLVKQKPQITEEQLEAVIADFSGLLEKCCQGQEQEVCFAEEGKRRQNESFIRCELFSLILTDLTLFVN"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0046872"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0046872"
                ]
              },
              {
                "name": "Description",
                "path": "property[@type='term']/@value",
                "value": [
                  "F:metal ion binding"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0005615"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005615"
                ]
              },
              {
                "name": "Description",
                "path": "property[starts-with(@value, 'C:')]/@value",
                "value": [
                  "C:extracellular space"
                ]
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
                "saveData": "DISGENET",
                "linkTo": "http://disgenet.org/search?q={{value}}",
                "value": [],
                "links": []
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
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [],
                "links": []
              }
            ]
          },
          {
            "name": "Glycosylation sites",
            "path": "uniprot/entry/feature[@type='glycosylation site']",
            "entries": [
              {
                "name": "description",
                "path": "@description",
                "value": []
              },
              {
                "name": "position",
                "path": "location/position/@position",
                "value": []
              }
            ]
          },
          {
            "name": "Disulfide bonds",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location",
            "entries": [
              {
                "name": "Begin",
                "path": "begin/@position",
                "value": [
                  "99",
                  "113",
                  "148",
                  "192",
                  "224",
                  "269",
                  "289",
                  "302",
                  "384",
                  "416",
                  "461",
                  "485",
                  "500",
                  "538",
                  "582"
                ]
              },
              {
                "name": "End",
                "path": "end/@position",
                "value": [
                  "114",
                  "124",
                  "193",
                  "201",
                  "270",
                  "277",
                  "303",
                  "313",
                  "393",
                  "462",
                  "472",
                  "501",
                  "511",
                  "583",
                  "591"
                ]
              },
              {
                "name": "Position",
                "path": "position/@position",
                "value": [
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  ""
                ]
              }
            ]
          },
          {
            "name": "Tissue specificity",
            "path": "uniprot/entry/comment[@type='tissue specificity']/text",
            "entries": [
              {
                "name": "Tissue specificity",
                "path": ".",
                "value": []
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
                "value": []
              },
              {
                "name": "Value",
                "path": "property[@type='pathway name']/@value",
                "value": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "P13645",
    "queries": [
      {
        "name": "UniProt",
        "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
        "url": "https://www.uniprot.org/uniprot/P13645.xml",
        "fetcher": {},
        "parser": {},
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
                "name": "Accession",
                "path": ".",
                "linkTo": "https://uniprot.org/uniprot/{{value}}",
                "value": [
                  "P13645",
                  "Q14664",
                  "Q8N175"
                ],
                "links": [
                  "https://uniprot.org/uniprot/P13645",
                  "https://uniprot.org/uniprot/Q14664",
                  "https://uniprot.org/uniprot/Q8N175"
                ]
              }
            ]
          },
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene/name",
            "entries": [
              {
                "name": "Gene name",
                "path": ".",
                "saveData": "GENENAME",
                "value": [
                  "KRT10",
                  "KPP"
                ]
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
                "path": ".",
                "value": [
                  "Keratin, type I cytoskeletal 10"
                ]
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
                "saveData": "SEQUENCE",
                "removeNewLines": true,
                "value": [
                  "MSVRYSSSKHYSSSRSGGGGGGGGCGGGGGVSSLRISSSKGSLGGGFSSGGFSGGSFSRGSSGGGCFGGSSGGYGGLGGFGGGSFRGSYGSSSFGGSYGGIFGGGSFGGGSFGGGSFGGGGFGGGGFGGGFGGGFGGDGGLLSGNEKVTMQNLNDRLASYLDKVRALEESNYELEGKIKEWYEKHGNSHQGEPRDYSKYYKTIDDLKNQILNLTTDNANILLQIDNARLAADDFRLKYENEVALRQSVEADINGLRRVLDELTLTKADLEMQIESLTEELAYLKKNHEEEMKDLRNVSTGDVNVEMNAAPGVDLTQLLNNMRSQYEQLAEQNRKDAEAWFNEKSKELTTEIDNNIEQISSYKSEITELRRNVQALEIELQSQLALKQSLEASLAETEGRYCVQLSQIQAQISALEEQLQQIRAETECQNTEYQQLLDIKIRLENEIQTYRSLLEGEGSSGGGGRGGGSFGGGYGGGSSGGGSSGGGHGGGHGGSSGGGYGGGSSGGGSSGGGYGGGSSSGGHGGSSSGGYGGGSSGGGGGGYGGGSSGGGSSSGGGYGGGSSSGGHKSSSSGSVGESSSKGPRY"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0046982",
                  "GO:0030280"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0046982",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0030280"
                ]
              },
              {
                "name": "Description",
                "path": "property[@type='term']/@value",
                "value": [
                  "F:protein heterodimerization activity",
                  "F:structural constituent of epidermis"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0001533",
                  "GO:0005737",
                  "GO:0005829",
                  "GO:0070062",
                  "GO:0005615",
                  "GO:0005882",
                  "GO:0016020",
                  "GO:0005634"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0001533",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005737",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005829",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0070062",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005615",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005882",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0016020",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005634"
                ]
              },
              {
                "name": "Description",
                "path": "property[starts-with(@value, 'C:')]/@value",
                "value": [
                  "C:cornified envelope",
                  "C:cytoplasm",
                  "C:cytosol",
                  "C:extracellular exosome",
                  "C:extracellular space",
                  "C:intermediate filament",
                  "C:membrane",
                  "C:nucleus"
                ]
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
                "saveData": "DISGENET",
                "linkTo": "http://disgenet.org/search?q={{value}}",
                "value": [
                  "3858"
                ],
                "links": [
                  "http://disgenet.org/search?q=3858"
                ]
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
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "110056"
                ],
                "links": [
                  "https://thebiogrid.org/110056"
                ]
              }
            ]
          },
          {
            "name": "Glycosylation sites",
            "path": "uniprot/entry/feature[@type='glycosylation site']",
            "entries": [
              {
                "name": "description",
                "path": "@description",
                "value": []
              },
              {
                "name": "position",
                "path": "location/position/@position",
                "value": []
              }
            ]
          },
          {
            "name": "Disulfide bonds",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location",
            "entries": [
              {
                "name": "Begin",
                "path": "begin/@position",
                "value": [
                  ""
                ]
              },
              {
                "name": "End",
                "path": "end/@position",
                "value": [
                  ""
                ]
              },
              {
                "name": "Position",
                "path": "position/@position",
                "value": [
                  "401"
                ]
              }
            ]
          },
          {
            "name": "Tissue specificity",
            "path": "uniprot/entry/comment[@type='tissue specificity']/text",
            "entries": [
              {
                "name": "Tissue specificity",
                "path": ".",
                "value": [
                  "Seen in all suprabasal cell layers including stratum corneum. Expressed on the surface of lung cell lines (PubMed:19627498)."
                ]
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
                "value": [
                  "R-HSA-6805567",
                  "R-HSA-6809371"
                ]
              },
              {
                "name": "Value",
                "path": "property[@type='pathway name']/@value",
                "value": [
                  "Keratinization",
                  "Formation of the cornified envelope"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "P04264",
    "queries": [
      {
        "name": "UniProt",
        "urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
        "url": "https://www.uniprot.org/uniprot/P04264.xml",
        "fetcher": {},
        "parser": {},
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
                "name": "Accession",
                "path": ".",
                "linkTo": "https://uniprot.org/uniprot/{{value}}",
                "value": [
                  "P04264",
                  "B2RA01",
                  "P85925",
                  "P86104",
                  "Q14720",
                  "Q6GSJ0",
                  "Q9H298"
                ],
                "links": [
                  "https://uniprot.org/uniprot/P04264",
                  "https://uniprot.org/uniprot/B2RA01",
                  "https://uniprot.org/uniprot/P85925",
                  "https://uniprot.org/uniprot/P86104",
                  "https://uniprot.org/uniprot/Q14720",
                  "https://uniprot.org/uniprot/Q6GSJ0",
                  "https://uniprot.org/uniprot/Q9H298"
                ]
              }
            ]
          },
          {
            "name": "Gene name",
            "path": "uniprot/entry/gene/name",
            "entries": [
              {
                "name": "Gene name",
                "path": ".",
                "saveData": "GENENAME",
                "value": [
                  "KRT1",
                  "KRTA"
                ]
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
                "path": ".",
                "value": [
                  "Keratin, type II cytoskeletal 1"
                ]
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
                "saveData": "SEQUENCE",
                "removeNewLines": true,
                "value": [
                  "MSRQFSSRSGYRSGGGFSSGSAGIINYQRRTTSSSTRRSGGGGGRFSSCGGGGGSFGAGGGFGSRSLVNLGGSKSISISVARGGGRGSGFGGGYGGGGFGGGGFGGGGFGGGGIGGGGFGGFGSGGGGFGGGGFGGGGYGGGYGPVCPPGGIQEVTINQSLLQPLNVEIDPEIQKVKSREREQIKSLNNQFASFIDKVRFLEQQNQVLQTKWELLQQVDTSTRTHNLEPYFESFINNLRRRVDQLKSDQSRLDSELKNMQDMVEDYRNKYEDEINKRTNAENEFVTIKKDVDGAYMTKVDLQAKLDNLQQEIDFLTALYQAELSQMQTQISETNVILSMDNNRSLDLDSIIAEVKAQYEDIAQKSKAEAESLYQSKYEELQITAGRHGDSVRNSKIEISELNRVIQRLRSEIDNVKKQISNLQQSISDAEQRGENALKDAKNKLNDLEDALQQAKEDLARLLRDYQELMNTKLALDLEIATYRTLLEGEESRMSGECAPNVSVSVSTSHTTISGGGSRGGGGGGYGSGGSSYGSGGGSYGSGGGGGGGRGSYGSGGSSYGSGGGSYGSGGGGGGHGSYGSGSSSGGYRGGSGGGGGGSSGGRGSGGGSSGGSIGGRGSSSGGVKSSGGSSSVKFVSTTYSGVTR"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0030246",
                  "GO:0046982",
                  "GO:0038023",
                  "GO:0030280"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0030246",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0046982",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0038023",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0030280"
                ]
              },
              {
                "name": "Description",
                "path": "property[@type='term']/@value",
                "value": [
                  "F:carbohydrate binding",
                  "F:protein heterodimerization activity",
                  "F:signaling receptor activity",
                  "F:structural constituent of epidermis"
                ]
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
                "linkTo": "https://www.ebi.ac.uk/QuickGO/term/{{value}}",
                "value": [
                  "GO:0072562",
                  "GO:0062023",
                  "GO:0001533",
                  "GO:0005856",
                  "GO:0005829",
                  "GO:0070062",
                  "GO:0005576",
                  "GO:0005615",
                  "GO:1904813",
                  "GO:0045095",
                  "GO:0016020",
                  "GO:0005634"
                ],
                "links": [
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0072562",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0062023",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0001533",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005856",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005829",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0070062",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005576",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005615",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:1904813",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0045095",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0016020",
                  "https://www.ebi.ac.uk/QuickGO/term/GO:0005634"
                ]
              },
              {
                "name": "Description",
                "path": "property[starts-with(@value, 'C:')]/@value",
                "value": [
                  "C:blood microparticle",
                  "C:collagen-containing extracellular matrix",
                  "C:cornified envelope",
                  "C:cytoskeleton",
                  "C:cytosol",
                  "C:extracellular exosome",
                  "C:extracellular region",
                  "C:extracellular space",
                  "C:ficolin-1-rich granule lumen",
                  "C:keratin filament",
                  "C:membrane",
                  "C:nucleus"
                ]
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
                "saveData": "DISGENET",
                "linkTo": "http://disgenet.org/search?q={{value}}",
                "value": [
                  "3848"
                ],
                "links": [
                  "http://disgenet.org/search?q=3848"
                ]
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
                "linkTo": "https://thebiogrid.org/{{value}}",
                "value": [
                  "110046"
                ],
                "links": [
                  "https://thebiogrid.org/110046"
                ]
              }
            ]
          },
          {
            "name": "Glycosylation sites",
            "path": "uniprot/entry/feature[@type='glycosylation site']",
            "entries": [
              {
                "name": "description",
                "path": "@description",
                "value": []
              },
              {
                "name": "position",
                "path": "location/position/@position",
                "value": []
              }
            ]
          },
          {
            "name": "Disulfide bonds",
            "path": "uniprot/entry/feature[@type='disulfide bond']/location",
            "entries": [
              {
                "name": "Begin",
                "path": "begin/@position",
                "value": []
              },
              {
                "name": "End",
                "path": "end/@position",
                "value": []
              },
              {
                "name": "Position",
                "path": "position/@position",
                "value": []
              }
            ]
          },
          {
            "name": "Tissue specificity",
            "path": "uniprot/entry/comment[@type='tissue specificity']/text",
            "entries": [
              {
                "name": "Tissue specificity",
                "path": ".",
                "value": [
                  "The source of this protein is neonatal foreskin. The 67-kDa type II keratins are expressed in terminally differentiating epidermis."
                ]
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
                "value": [
                  "R-HSA-6798695",
                  "R-HSA-6805567",
                  "R-HSA-6809371"
                ]
              },
              {
                "name": "Value",
                "path": "property[@type='pathway name']/@value",
                "value": [
                  "Neutrophil degranulation",
                  "Keratinization",
                  "Formation of the cornified envelope"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
*/
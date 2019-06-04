export const debugStoreSearchResults = [
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
                "value": [
                  "P07339",
                  "Q6IB57"
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
                "value": [
                  "J3KMX3"
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
                "value": [
                  "P13645",
                  "Q14664",
                  "Q8N175"
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
                "value": [
                  "P04264",
                  "B2RA01",
                  "P85925",
                  "P86104",
                  "Q14720",
                  "Q6GSJ0",
                  "Q9H298"
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

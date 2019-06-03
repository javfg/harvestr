export const debugStoreSearchResults =
[
	{
		"name": "P07339",
		"queries": [
			{
				"name": "UniProt",
				"urlTemplate": "https://www.uniprot.org/uniprot/{{ITEM}}.xml",
				"url": "https://www.uniprot.org/uniprot/P07339.xml",
				"fetcher": {

				},
				"parser": {

				},
				"saveData": [
					"GENENAME",
					"SEQUENCE"
				],
				"fields": [
					{
						"name": "accession",
						"path": "uniprot/entry/accession",
						"value": [
							[
								{
									"name": "Accession",
									"value": "P07339"
								}
							],
							[
								{
									"name": "Accession",
									"value": "Q6IB57"
								}
							]
						],
						"entries": [
							{
								"name": "Accession",
								"path": "."
							}
						]
					},
					{
						"name": "Gene name",
						"path": "uniprot/entry/gene/name",
						"value": [
							[
								{
									"name": "Gene name",
									"value": "CTSD"
								}
							],
							[
								{
									"name": "Gene name",
									"value": "CPSD"
								}
							]
						],
						"entries": [
							{
								"name": "Gene name",
								"path": ".",
								"or": "GENENAME"
							}
						]
					},
					{
						"name": "Full name",
						"path": "uniprot/entry/protein/submittedName/fullName",
						"or": "uniprot/entry/protein/recommendedName/fullName",
						"value": [
							[
								{
									"name": "Full name",
									"value": "Cathepsin D"
								}
							]
						],
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
						"value": [
							[
								{
									"name": "Sequence",
									"value": "\nMQPSSLLPLALCLLAAPASALVRIPLHKFTSIRRTMSEVGGSVEDLIAKGPVSKYSQAVP\nAVTEGPIPEVLKNYMDAQYYGEIGIGTPPQCFTVVFDTGSSNLWVPSIHCKLLDIACWIH\nHKYNSDKSSTYVKNGTSFDIHYGSGSLSGYLSQDTVSVPCQSASSASALGGVKVERQVFG\nEATKQPGITFIAAKFDGILGMAYPRISVNNVLPVFDNLMQQKLVDQNIFSFYLSRDPDAQ\nPGGELMLGGTDSKYYKGSLSYLNVTRKAYWQVHLDQVEVASGLTLCKEGCEAIVDTGTSL\nMVGPVDEVRELQKAIGAVPLIQGEYMIPCEKVSTLPAITLKLGGKGYKLSPEDYTLKVSQ\nAGKTLCLSGFMGMDIPPPSGPLWILGDVFIGRYYTVFDRDNNRVGFAEAARL\n"
								}
							]
						],
						"entries": [
							{
								"name": "Sequence",
								"path": ".",
								"or": "SEQUENCE",
								"saveData": true
							}
						]
					},
					{
						"name": "Molecular function",
						"path": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/..",
						"value": [
							[
								{
									"name": "GO ID",
									"value": "GO:0004190"
								},
								{
									"name": "Description",
									"value": "F:aspartic-type endopeptidase activity"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0070001"
								},
								{
									"name": "Description",
									"value": "F:aspartic-type peptidase activity"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0008233"
								},
								{
									"name": "Description",
									"value": "F:peptidase activity"
								}
							]
						],
						"entries": [
							{
								"name": "GO ID",
								"path": "@id"
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
						"value": [
							[
								{
									"name": "GO ID",
									"value": "GO:0062023"
								},
								{
									"name": "Description",
									"value": "C:collagen-containing extracellular matrix"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0010008"
								},
								{
									"name": "Description",
									"value": "C:endosome membrane"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0070062"
								},
								{
									"name": "Description",
									"value": "C:extracellular exosome"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0005576"
								},
								{
									"name": "Description",
									"value": "C:extracellular region"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0005615"
								},
								{
									"name": "Description",
									"value": "C:extracellular space"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:1904813"
								},
								{
									"name": "Description",
									"value": "C:ficolin-1-rich granule lumen"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0043202"
								},
								{
									"name": "Description",
									"value": "C:lysosomal lumen"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0005765"
								},
								{
									"name": "Description",
									"value": "C:lysosomal membrane"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0005764"
								},
								{
									"name": "Description",
									"value": "C:lysosome"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0042470"
								},
								{
									"name": "Description",
									"value": "C:melanosome"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0045121"
								},
								{
									"name": "Description",
									"value": "C:membrane raft"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:0035580"
								},
								{
									"name": "Description",
									"value": "C:specific granule lumen"
								}
							],
							[
								{
									"name": "GO ID",
									"value": "GO:1904724"
								},
								{
									"name": "Description",
									"value": "C:tertiary granule lumen"
								}
							]
						],
						"entries": [
							{
								"name": "GO ID",
								"path": "@id"
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
						"value": [
							[
								{
									"name": "Disgenet ID",
									"value": "1509"
								}
							]
						],
						"entries": [
							{
								"name": "Disgenet ID",
								"path": ".",
								"or": "DISGENET"
							}
						]
					},
					{
						"name": "BioGrid ID",
						"path": "uniprot/entry/dbReference[@type='BioGrid']/@id",
						"value": [
							[
								{
									"name": "BioGrid ID",
									"value": "107889"
								}
							]
						],
						"entries": [
							{
								"name": "BioGrid ID",
								"path": "."
							}
						]
					},
					{
						"name": "Glycosylation sites",
						"path": "uniprot/entry/feature[@type='glycosylation site']",
						"value": [
							[
								{
									"name": "description",
									"value": "O-linked (GalNAc...) threonine"
								},
								{
									"name": "position",
									"value": "63"
								}
							],
							[
								{
									"name": "description",
									"value": "N-linked (GlcNAc...) asparagine"
								},
								{
									"name": "position",
									"value": "134"
								}
							],
							[
								{
									"name": "description",
									"value": "N-linked (GlcNAc...) asparagine"
								},
								{
									"name": "position",
									"value": "263"
								}
							]
						],
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
						"value": [
							[
								{
									"name": "Begin",
									"value": "91"
								},
								{
									"name": "End",
									"value": "160"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "110"
								},
								{
									"name": "End",
									"value": "117"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "286"
								},
								{
									"name": "End",
									"value": "290"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "329"
								},
								{
									"name": "End",
									"value": "366"
								},
								{
									"name": "Position",
									"value": ""
								}
							]
						],
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
						"value": [
							[
								{
									"name": "Tissue specificity",
									"value": "Expressed in the aorta extracellular space (at protein level) (PubMed:20551380). Expressed in liver (at protein level) (PubMed:1426530)."
								}
							]
						],
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
						"value": [
							[
								{
									"name": "ID",
									"value": "R-HSA-1442490"
								},
								{
									"name": "Value",
									"value": "Collagen degradation"
								}
							],
							[
								{
									"name": "ID",
									"value": "R-HSA-2022377"
								},
								{
									"name": "Value",
									"value": "Metabolism of Angiotensinogen to Angiotensins"
								}
							],
							[
								{
									"name": "ID",
									"value": "R-HSA-2132295"
								},
								{
									"name": "Value",
									"value": "MHC class II antigen presentation"
								}
							],
							[
								{
									"name": "ID",
									"value": "R-HSA-6798695"
								},
								{
									"name": "Value",
									"value": "Neutrophil degranulation"
								}
							],
							[
								{
									"name": "ID",
									"value": "R-HSA-9018519"
								},
								{
									"name": "Value",
									"value": "Estrogen-dependent gene expression"
								}
							]
						],
						"entries": [
							{
								"name": "ID",
								"path": "@id"
							},
							{
								"name": "Value",
								"path": "property[@type='pathway name']/@value"
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
				"fetcher": {

				},
				"parser": {

				},
				"saveData": [
					"GENENAME",
					"SEQUENCE"
				],
				"fields": [
					{
						"name": "accession",
						"path": "uniprot/entry/accession",
						"value": [
							[
								{
									"name": "Accession",
									"value": "J3KMX3"
								}
							]
						],
						"entries": [
							{
								"name": "Accession",
								"path": "."
							}
						]
					},
					{
						"name": "Gene name",
						"path": "uniprot/entry/gene/name",
						"value": [
							[
								{
									"name": "Gene name",
									"value": "AFP"
								}
							]
						],
						"entries": [
							{
								"name": "Gene name",
								"path": ".",
								"or": "GENENAME"
							}
						]
					},
					{
						"name": "Full name",
						"path": "uniprot/entry/protein/submittedName/fullName",
						"or": "uniprot/entry/protein/recommendedName/fullName",
						"value": [
							[
								{
									"name": "Full name",
									"value": "Alpha-fetoprotein"
								}
							]
						],
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
						"value": [
							[
								{
									"name": "Sequence",
									"value": "\nMKWVESIFLIFLLNFTESRTLHRNEYGIASILDSYQCTAEISLADLATIFFAQFVQEATY\nKEVSKMVKDALTAIEKPTGDEQSSGCLENQLPAFLEELCHEKEILEKYGHSDCCSQSEEG\nRHNCFLAHKKPTPASIPLFQVPEPVTSCEAYEEDRETFMNKFIYEIARRHPFLYAPTILL\nWAARYDKIIPSCCKAENAVECFQTKAATVTKELRESSLLNQHACAVMKNFGTRTFQAITV\nTKLSQKFTKVNFTEIQKLVLDVAHVHEHCCRGDVLDCLQDGEKIMSYICSQQDTLSNKIT\nECCKLTTLERGQCIIHAENDEKPEGLSPNLNRFLGDRDFNQFSSGEKNIFLASFVHEYSR\nRHPQLAVSVILRVAKGYQELLEKCFQTENPLECQDKGEEELQKYIQESQALAKRSCGLFQ\nKLGEYYLQNAFLVAYTKKAPQLTSSELMAITRKMAATAATCCQLSEDKLLACGEGAADII\nIGHLCIRHEMTPVNPGVGQCCTSSYANRRPCFSSLVVDETYVPPAFSDDKFIFHKDLCQA\nQGVALQTMKQEFLINLVKQKPQITEEQLEAVIADFSGLLEKCCQGQEQEVCFAEEGKRRQ\nNESFIRCELFSLILTDLTLFVN\n"
								}
							]
						],
						"entries": [
							{
								"name": "Sequence",
								"path": ".",
								"or": "SEQUENCE",
								"saveData": true
							}
						]
					},
					{
						"name": "Molecular function",
						"path": "uniprot/entry/dbReference/property[starts-with(@value, 'F:')]/..",
						"value": [
							[
								{
									"name": "GO ID",
									"value": "GO:0046872"
								},
								{
									"name": "Description",
									"value": "F:metal ion binding"
								}
							]
						],
						"entries": [
							{
								"name": "GO ID",
								"path": "@id"
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
						"value": [
							[
								{
									"name": "GO ID",
									"value": "GO:0005615"
								},
								{
									"name": "Description",
									"value": "C:extracellular space"
								}
							]
						],
						"entries": [
							{
								"name": "GO ID",
								"path": "@id"
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
						"value": [

						],
						"entries": [
							{
								"name": "Disgenet ID",
								"path": ".",
								"or": "DISGENET"
							}
						]
					},
					{
						"name": "BioGrid ID",
						"path": "uniprot/entry/dbReference[@type='BioGrid']/@id",
						"value": [

						],
						"entries": [
							{
								"name": "BioGrid ID",
								"path": "."
							}
						]
					},
					{
						"name": "Glycosylation sites",
						"path": "uniprot/entry/feature[@type='glycosylation site']",
						"value": [

						],
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
						"value": [
							[
								{
									"name": "Begin",
									"value": "99"
								},
								{
									"name": "End",
									"value": "114"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "113"
								},
								{
									"name": "End",
									"value": "124"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "148"
								},
								{
									"name": "End",
									"value": "193"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "192"
								},
								{
									"name": "End",
									"value": "201"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "224"
								},
								{
									"name": "End",
									"value": "270"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "269"
								},
								{
									"name": "End",
									"value": "277"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "289"
								},
								{
									"name": "End",
									"value": "303"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "302"
								},
								{
									"name": "End",
									"value": "313"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "384"
								},
								{
									"name": "End",
									"value": "393"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "416"
								},
								{
									"name": "End",
									"value": "462"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "461"
								},
								{
									"name": "End",
									"value": "472"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "485"
								},
								{
									"name": "End",
									"value": "501"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "500"
								},
								{
									"name": "End",
									"value": "511"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "538"
								},
								{
									"name": "End",
									"value": "583"
								},
								{
									"name": "Position",
									"value": ""
								}
							],
							[
								{
									"name": "Begin",
									"value": "582"
								},
								{
									"name": "End",
									"value": "591"
								},
								{
									"name": "Position",
									"value": ""
								}
							]
						],
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
						"value": [

						],
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
						"value": [

						],
						"entries": [
							{
								"name": "ID",
								"path": "@id"
							},
							{
								"name": "Value",
								"path": "property[@type='pathway name']/@value"
							}
						]
					}
				]
			}
		]
	}
]

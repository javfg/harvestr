export const debugRankingDefinition = {
  "rules": [
    {
      "name": "Located in extracellular space",
      "query": "UniProt",
      "field": "Subcellular location",
      "entry": ["GO ID"],
      "operator": "INCLUDES",
      "values": ["GO:0005615"],
      "importance": 1
    },
    {
      "name": "Not located in chylomicron",
      "query": "UniProt",
      "field": "Subcellular location",
      "entry": ["GO ID"],
      "operator": "INCLUDES",
      "values": ["GO:0042627"],
      "importance": -1
    },
    {
      "name": "Has glycosylation sites",
      "query": "UniProt",
      "field": "Glycosylation sites",
      "entry": ["Description"],
      "operator": "ATLEAST",
      "values": [1],
      "importance": 2
    },
    {
      "name": "Interacts with Antithrombin or Annexin",
      "query": "BioGRID",
      "field": "BioGRID Interaction data",
      "entry": ["Interactor A", "Interactor B"],
      "operator": "INCLUDES",
      "values": ["SERPINC1", "ANXA2"],
      "importance": 3
    },
    {
      "name": "Has most articles in PubMed",
      "query": "PubMed",
      "field": "Count",
      "entry": ["Count"],
      "operator": "MAX",
      "values": [1],
      "importance": 1
    },
    {
      "name": "Melting temperature 55C < x < 65C",
      "query": "TM Predictor",
      "field": "TM Index",
      "entry": ["TM Index"],
      "operator": "BETWEEN",
      "values": [0, 1],
      "importance": 3
    }
  ]
}

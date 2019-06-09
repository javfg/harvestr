export const debugRankingDefinition = {
  rules: [
    {
      "name": "Located in extracellular space",
      "query": "UniProt",
      "field": "Subcellular location",
      "entry": "GO ID",
      "type": "INCLUDES",
      "value": "GO:0005615",
      "importance": 1
    },
    {
      "name": "Not located in chylomicron",
      "query": "UniProt",
      "field": "Subcellular location",
      "entry": "GO ID",
      "type": "INCLUDES",
      "value": "GO:0042627",
      "importance": -1
    },
    {
      "name": "Has glycosylation sites",
      "query": "UniProt",
      "field": "Glycosylation sites",
      "entry": "description",
      "type": "ATLEAST",
      "value": 1,
      "importance": 2
    },
    {
      "name": "Interacts with Antithrombin",
      "query": "BioGRID",
      "field": "BioGRID Interaction data",
      "type": "INCLUDES",
      "value": "SERPINC1",
      "importance": 3
    },
    {
      "name": "Has most articles in PubMed",
      "query": "PubMed",
      "field": "count",
      "type": "MAX",
      "importance": 1
    },
    {
      "name": "Melting temperature 55C < x < 65C",
      "query": "TM Predictor",
      "field": "TM Index",
      "type": "BETWEEN",
      "value": [0, 1],
      "importance": 3
    }
  ]
};

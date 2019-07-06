export const demoRankingDefinition = {
  "rules": [
    {
      "name": "Located in extracellular space",
      "query": "UniProt",
      "field": "Subcellular location",
      "entry": [
        "GO ID"
      ],
      "operator": "INCLUDES",
      "values": [
        "GO:0005615"
      ],
      "importance": "1"
    },
    {
      "name": "Has at least 2 glycosylation sites",
      "query": "UniProt",
      "field": "Glycosylation sites",
      "entry": [
        "Description"
      ],
      "operator": "ATLEAST",
      "values": [
        "2"
      ],
      "importance": 2
    },
    {
      "name": "Interacts with Antithrombin or Thrombin",
      "query": "BioGRID",
      "field": "BioGRID Interaction data",
      "entry": [
        "Interactor A",
        "Interactor B"
      ],
      "operator": "INCLUDES",
      "values": [
        "SERPINC1",
        "F2"
      ],
      "importance": 3,
      "parameters": {
        "exact": true
      }
    },
    {
      "name": "Has most articles in PubMed",
      "query": "PubMed",
      "field": "Count",
      "entry": [
        "Count"
      ],
      "operator": "MAX",
      "values": [
        1
      ],
      "importance": "3"
    },
    {
      "name": "Melting temperature > 65C",
      "query": "TM Predictor",
      "field": "TM Index",
      "entry": [
        "TM Index"
      ],
      "operator": "GREATERTHAN",
      "values": [
        "1"
      ],
      "importance": 3
    }
  ]
};

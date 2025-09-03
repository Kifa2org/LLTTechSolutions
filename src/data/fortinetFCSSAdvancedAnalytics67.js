// FCSS—Advanced Analytics 6.7 Architect Exam Details
const examDetails = {
  examCode: "FCSS_ADA_AR-6.7",
  examName: "FCSS—Advanced Analytics 6.7 Architect",
  duration: "70 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCSS—Advanced Analytics 6.7 Architect exam validates your ability to design and implement advanced analytics solutions using FortiSIEM and FortiSOAR.",
    targetAudience: "Security architects and analysts responsible for designing and implementing advanced analytics solutions"
  },

  examTopics: [
    {
      topic: "Multi-Tenancy SOC Solution for MSSP",
      weight: "25%",
      objectives: [
        "Describe multi-tenancy solutions for SOC environments",
        "Define and deploy collectors and agents",
        "Install and manage FortiSIEM Windows and Linux agents"
      ]
    },
    {
      topic: "FortiSIEM Rules and Analytics",
      weight: "25%",
      objectives: [
        "Explain FortiSIEM rule processing",
        "Construct FortiSIEM rules",
        "Configure advanced nested queries and lookup tables"
      ]
    },
    {
      topic: "FortiSIEM Baseline and UEBA",
      weight: "20%",
      objectives: [
        "Explain FortiSIEM baseline and profile reports",
        "Construct FortiSIEM baseline rules",
        "Explain UEBA on FortiSIEM"
      ]
    },
    {
      topic: "Conditions and Remediation",
      weight: "30%",
      objectives: [
        "Remediate incidents on FortiSIEM both manually and automatically",
        "Remediate incidents through FortiSOAR"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FCSS—Advanced Analytics 6.7 course",
      "Hands-on experience with FortiSIEM and FortiSOAR",
      "Advanced analytics and SOC design knowledge"
    ]
  }
};

export default examDetails;

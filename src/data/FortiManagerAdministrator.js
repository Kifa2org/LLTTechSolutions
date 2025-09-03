// FortiManager 7.6 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FMG_AD-7.6",
  examName: "FCP - FortiManager 7.6 Administrator",
  duration: "70 minutes",
  questions: 35,
  questionType: "multiple-choice questions",
  passingScore: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English",
 

   examDescription: {
    overview: "FortiManager 7.6.1, FortiOS 7.6",
    targetAudience: ""
  },

  examTopics: [
    {
      topic: "Administration",
         weight: "",
      objectives: [
        "Describe FortiManager features",
        "Perform initial configuration",
        "Configure administrative domains (ADOMs)"
      ]
    },
    {
      topic: "Device manager",
       weight: "",
      objectives: [
        "Register devices in ADOMs",
        "Install configuration changes using scripts",
        "Diagnose issues using the revision history"
      ]
    },
    {
      topic: "Policy and objects",
       weight: "",
      objectives: [
        "Perform policy and object management",
        "Manage ADOM revisions",
        "Configure workspace mode",
        "Perform policy imports and installations"
      ]
    },
    {
      topic: "Advanced configuration",
       weight: "",
      objectives: [
        "Describe FortiManager HA",
        "Configure FortiGuard services",
        "Configure the global database ADOM"
      ]
    },
    {
      topic: "Troubleshooting",
       weight: "",
      objectives: [
        "Describe FortiManager deployment scenarios",
        "Troubleshoot import and installation issues",
        "Troubleshoot device-level and ADOM-level issues",
        "Troubleshoot system issues"
      ]
    }
  ],

   examFormat: {
    questionTypes: [""],
    delivery: "",
    retakePolicy: ""
  },

  registration: {
    provider: "Pearson VUE",
    website: "",
    preparation: [
      ''
    ]
  }
};

export default examDetails;

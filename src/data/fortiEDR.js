// FortiEDR Exam Details
const examDetails = {
  examCode: "FCP_FEDR_AD-7.6",
  examName: "FortiEDR 7.2",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FortiEDR exam validates your ability to configure, manage, and monitor FortiEDR solutions using the most common FortiEDR features.",
    targetAudience: "Security professionals responsible for day-to-day management of FortiEDR solutions"
  },

  examTopics: [
    {
      topic: "FortiEDR system",
      weight: "20%",
      objectives: [
        "Explain FortiEDR architecture and technical positioning",
        "Perform installation process",
        "Perform FortiEDR inventory and use system tools",
        "Deploy FortiEDR multi-tenancy",
        "Use API to carry out FortiEDR management functions"
      ]
    },
    {
      topic: "FortiEDR security settings and policies",
      weight: "25%",
      objectives: [
        "Configure communication control policy",
        "Configure security policies",
        "Configure playbooks",
        "Explain Fortinet Cloud Service (FCS)"
      ]
    },
    {
      topic: "Events, forensics, and threat hunting",
      weight: "30%",
      objectives: [
        "Analyze security events and alerts",
        "Configure threat hunting profiles and scheduled queries",
        "Analyze threat hunting data",
        "Investigate security events using forensics analysis"
      ]
    },
    {
      topic: "FortiEDR integration",
      weight: "15%",
      objectives: [
        "Deploy FortiXDR",
        "Configure security fabric using FortiEDR"
      ]
    },
    {
      topic: "FortiEDR troubleshooting",
      weight: "10%",
      objectives: [
        "Perform FortiEDR troubleshooting",
        "Perform alert analysis on FortiEDR security events and logs"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)", "Drag and drop", "Matching"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "",
    preparation: [
      "FortiEDR 7.2 course",
      "Hands-on experience with FortiEDR solutions"
    ]
  }
};

export default examDetails;

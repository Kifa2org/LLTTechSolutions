// FortiAnalyzer 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FAZ_AD-7.4",
  examName: "FCP - FortiAnalyzer 7.4 Administrator",
  duration: "65 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - FortiAnalyzer 7.4 Administrator exam validates your ability to configure, manage, and monitor FortiAnalyzer devices using the most common FortiAnalyzer features.",
    targetAudience: "Security professionals responsible for day-to-day management of FortiAnalyzer devices and log analysis"
  },

  examTopics: [
    {
      topic: "System configuration",
      weight: "20%",
      objectives: [
        "Perform initial configuration",
        "Manage high availability",
        "Manage RAID",
        "Describe FortiAnalyzer concepts"
      ]
    },
    {
      topic: "Device management",
      weight: "25%",
      objectives: [
        "Manage devices",
        "Troubleshoot device communication issues"
      ]
    },
    {
      topic: "Logs and reports management",
      weight: "30%",
      objectives: [
        "Manage log data",
        "Manage reports"
      ]
    },
    {
      topic: "Administration",
      weight: "25%",
      objectives: [
        "Configure administrative access",
        "Manage administrative domains (ADOMs)",
        "Manage disk quota and backups"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    languages: ["English", "Japanese", "French"],
    productVersion: "FortiAnalyzer 7.4.1, FortiOS 7.4.1"
  },

  registration: {
    provider: "Pearson VUE",
    website: "",
    preparation:[ "Available from your Pearson VUE account"]
  }
};

export default examDetails;

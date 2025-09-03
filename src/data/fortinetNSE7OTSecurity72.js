// Fortinet NSE 7 - OT Security 7.2 Exam Details
const examDetails = {
  examCode: "NSE7_OTS-7.2",
  examName: "Fortinet NSE 7 - OT Security 7.2",
  duration: "60 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The Fortinet NSE 7 - OT Security 7.2 exam validates your ability to secure operational technology (OT) environments using Fortinet solutions.",
    targetAudience: "OT security professionals responsible for implementing and managing security in industrial environments"
  },

  examTopics: [
    {
      topic: "Asset management",
      weight: "20%",
      objectives: [
        "Explain OT fundamentals and concept",
        "Explain the OT architecture with Fortinet products",
        "Configure the security fabric for OT network",
        "Implement device detection",
        "Categorize devices for OT asset management"
      ]
    },
    {
      topic: "Network access control",
      weight: "25%",
      objectives: [
        "Apply authentication to control access to devices",
        "Configure internal segmentation",
        "Explain Industrial Ethernet protocols",
        "Describe OT Availability and Redundancy",
        "Explain Industrial Ethernet networks"
      ]
    },
    {
      topic: "OT network protection",
      weight: "30%",
      objectives: [
        "Identify industrial protocols and signatures",
        "Implement IPS to secure OT networks",
        "Implement Application control in OT networks",
        "Configure OT firewall and security policies"
      ]
    },
    {
      topic: "Monitoring and risk assessment",
      weight: "25%",
      objectives: [
        "Implement logging and monitoring with FortiAnalyzer and FortiSIEM",
        "Customize and generate reports",
        "Configure security automation with FortiAnalyzer and FortiSIEM",
        "Perform risk assessment and management"
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
      "NSE 7 - OT Security 7.2 course",
      "Hands-on experience with Fortinet OT security solutions",
      "OT security fundamentals knowledge"
    ]
  }
};

export default examDetails;

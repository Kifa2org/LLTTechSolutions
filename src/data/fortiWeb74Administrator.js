// FCP - FortiWeb 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FWB_AD-7.4",
  examName: "FCP - FortiWeb 7.4 Administrator",
  duration: "65 minutes",
  questions: 36,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - FortiWeb 7.4 Administrator exam validates your ability to configure, manage, and monitor FortiWeb devices for web application security.",
    targetAudience: "Web security professionals responsible for implementing and managing FortiWeb solutions"
  },

  examTopics: [
    {
      topic: "Deployment and configuration",
      weight: "25%",
      objectives: [
        "Identify FortiWeb deployment requirements",
        "Configure system settings",
        "Configure server pools, policies, and protected host names",
        "Configure FortiWeb high availability (HA)",
        "Troubleshoot deployment and system-related issues"
      ]
    },
    {
      topic: "Encryption, authentication, and compliance",
      weight: "25%",
      objectives: [
        "Mitigate web application vulnerabilities",
        "Configure various access control and tracking methods",
        "Mitigate attacks on authentication",
        "Configure SSL inspection and offloading",
        "Troubleshoot encryption and authentication-related issues"
      ]
    },
    {
      topic: "Web application security",
      weight: "25%",
      objectives: [
        "Configure various threat mitigation features",
        "Configure FortiWeb to block known attacks",
        "Troubleshoot threat detection and mitigation-related issues",
        "Configure API protection"
      ]
    },
    {
      topic: "Machine learning (ML)",
      weight: "25%",
      objectives: [
        "Configure machine learning for anomalies",
        "Configure machine learning for bots",
        "Configure machine learning for APIs"
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
      "FCP - FortiWeb 7.4 course",
      "Hands-on experience with FortiWeb devices",
      "Web application security fundamentals knowledge"
    ]
  }
};

export default examDetails;

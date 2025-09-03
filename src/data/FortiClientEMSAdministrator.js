// FortiClient EMS 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FCT_AD-7.4",
  examName: "FCP - FortiClient EMS 7.4 Administrator",
  duration: "65 minutes",
  questions: 34,
  passingScore: "Pass or fail",
  price: "$400 USD",
  language: "English, Japanese",
  
  examDescription: {
    overview: "The FortiClient EMS 7.4 Administrator exam validates your ability to configure, manage, and monitor FortiClient EMS and endpoints using the most common features.",
    targetAudience: "Security professionals responsible for day-to-day management of FortiClient EMS and endpoint security"
  },

  examTopics: [
    {
      topic: "FortiClient EMS design and deployment",
      weight: "25%",
      objectives: [
        "Describe FortiClient EMS architecture, components, and deployment modes",
        "Perform installation and configuration of FortiClient EMS"
      ]
    },
    {
      topic: "FortiClient provisioning and deployment",
      weight: "20%",
      objectives: [
        "Deploy FortiClient on endpoint devices",
        "Configure endpoint profiles to provision endpoint devices"
      ]
    },
    {
      topic: "Implement endpoint security",
      weight: "20%",
      objectives: [
        "Configure endpoint security policies",
        "Manage endpoint compliance and protection"
      ]
    },
    {
      topic: "Zero trust and Security Fabric integration",
      weight: "20%",
      objectives: [
        "Configure Security Fabric integration",
        "Set up quarantine for compromised endpoints",
        "Implement zero trust network access for endpoints"
      ]
    },
    {
      topic: "Troubleshooting",
      weight: "15%",
      objectives: [
        "Analyze diagnostic information to troubleshoot EMS and endpoint issues",
        "Resolve common deployment and configuration issues"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple-choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FortiClient EMS 7.4 Administrator course",
      "Hands-on experience with FortiClient EMS and FortiClient",
      "Experience with FortiGate 7.6 integration"
    ]
  },

  productVersions: {
    ems: "FortiClient EMS 7.4",
    fortigate: "FortiGate 7.6",
    forticlient: "FortiClient 7.4"
  }
};

export default examDetails;

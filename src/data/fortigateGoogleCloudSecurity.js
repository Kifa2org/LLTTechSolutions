// FCP - Google Cloud Security 7.6 Administrator Exam Details
const examDetails = {
  examCode: "FCP_GCS_AD-7.6",
  examName: "FCP - Google Cloud Security 7.6 Administrator",
  duration: "70 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - Google Cloud Security 7.6 Administrator exam validates your ability to configure, manage, and monitor Fortinet solutions in Google Cloud environments.",
    targetAudience: "Cloud security professionals responsible for implementing and managing Fortinet security solutions in Google Cloud"
  },

  examTopics: [
    {
      topic: "Google Cloud fundamentals",
      weight: "15%",
      objectives: [
        "Describe public cloud concepts",
        "Explain Google Cloud core components",
        "Explain Google Cloud security components"
      ]
    },
    {
      topic: "Integration with Google Cloud",
      weight: "25%",
      objectives: [
        "Explain the Fortinet products available in Google Cloud Marketplace",
        "Configure FortiGate integration with Google Cloud SDN",
        "Deploy FortiWeb Cloud to protect Google Cloud workloads"
      ]
    },
    {
      topic: "High availability (HA) and scalability",
      weight: "30%",
      objectives: [
        "Deploy FortiGate in an active-passive HA setup in Google Cloud",
        "Implement FortiGate auto-scaling to handle dynamic traffic and ensure HA",
        "Use Terraform templates to automate FortiGate deployment",
        "Deploy FortiGate in an active-active HA setup in Google Cloud"
      ]
    },
    {
      topic: "Networking in Google Cloud",
      weight: "30%",
      objectives: [
        "Optimize Google Cloud load balancers in FortiGate deployments",
        "Explain the traffic flow for different FortiGate architectures in Google Cloud"
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
      "FCP - Google Cloud Security 7.6 course",
      "Hands-on experience with Fortinet solutions in Google Cloud",
      "Google Cloud fundamentals knowledge"
    ]
  }
};

export default examDetails;

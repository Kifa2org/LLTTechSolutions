// Fortinet FCSS - Network Security 7.6 Support Engineer Exam Details
const examDetails = {
  examCode: "FCSS_NST_SE-7.6",
  examName: "FCSS - Network Security 7.6 Support Engineer",
  duration: "75 minutes",
  questions: 40,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English",
  productVersion: "FortiOS 7.6.2",

  examDescription: {
    overview: "The FCSS - Network Security 7.6 Support Engineer exam validates advanced troubleshooting skills and knowledge required to support Fortinet network security solutions.",
    targetAudience: "Network security support engineers and technical support specialists responsible for troubleshooting Fortinet security infrastructure"
  },

  examTopics: [
    {
      topic: "System troubleshooting",
      weight: "25%",
      objectives: [
        "Troubleshoot Security Fabric issues between FortiGate devices",
        "Troubleshoot automation stitches",
        "Troubleshoot resource problems using built-in tools",
        "Troubleshoot connectivity problems using built-in tools",
        "Troubleshoot different operation modes for FGCP HA clusters"
      ]
    },
    {
      topic: "Authentication",
      weight: "20%",
      objectives: [
        "Troubleshoot local and remote authentication",
        "Troubleshoot Fortinet Single Sign-On (FSSO) issues"
      ]
    },
    {
      topic: "Security profiles",
      weight: "20%",
      objectives: [
        "Troubleshoot FortiGuard issues",
        "Troubleshoot web filtering issues",
        "Troubleshoot the intrusion prevention system (IPS)"
      ]
    },
    {
      topic: "Routing",
      weight: "20%",
      objectives: [
        "Troubleshoot routing packets using static routes",
        "Troubleshoot OSPF to route the enterprise traffic",
        "Troubleshoot BGP to route the enterprise traffic"
      ]
    },
    {
      topic: "VPN",
      weight: "15%",
      objectives: [
        "Troubleshoot IPsec IKE version 1 and 2 issues"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "15-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FCSS - Network Security 7.6 Support Engineer training course",
      "Hands-on experience troubleshooting FortiGate devices",
      "Experience with FortiOS 7.6.2 and related Fortinet products"
    ]
  }
};

export default examDetails;

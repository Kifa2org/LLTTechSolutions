// Fortinet FCSS - LAN Edge 7.6 Architect Exam Details
const examDetails = {
  examCode: "FCSS_LED_AR-7.6",
  examName: "FCSS - LAN Edge 7.6 Architect",
  duration: "75 minutes",
  questions: 40,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English",
  productVersion: "FortiOS 7.6, FortiSwitch 7.6, FortiAP 7.6, FortiAuthenticator 6.6.1, FortiManager 7.6, FortiAnalyzer 7.6, and FortiAIOps 2.0.1",

  examDescription: {
    overview: "The FCSS - LAN Edge 7.6 Architect exam validates advanced knowledge and skills in designing and implementing Fortinet LAN Edge security solutions.",
    targetAudience: "Network security architects and senior engineers responsible for designing and implementing Fortinet LAN Edge solutions"
  },

  examTopics: [
    {
      topic: "Authentication",
      weight: "25%",
      objectives: [
        "Configure advanced user authentication and authorization scenarios using RADIUS and LDAP",
        "Implement two-factor authentication using digital certificates",
        "Configure syslog on FortiAuthenticator",
        "Configure RADIUS single sign-on (RSSO) on FortiAuthenticator"
      ]
    },
    {
      topic: "Central management",
      weight: "30%",
      objectives: [
        "Manage FortiSwitch using FortiManager over FortiLink",
        "Implement and deploy zero-touch provisioning",
        "Configure VLANs, ports, and trunks on FortiSwitch",
        "Configure FortiExtender and FortiAP"
      ]
    },
    {
      topic: "Zero-trust LAN access",
      weight: "25%",
      objectives: [
        "Implement machine authentication, MAC Authentication Bypass (MAB), and NAC policies to secure wireless networks",
        "Deploy a guest portal",
        "Explain advanced solutions in LAN edge: FortiLink NAC, dynamic VLAN, and VLAN pooling"
      ]
    },
    {
      topic: "Monitoring and troubleshooting",
      weight: "20%",
      objectives: [
        "Configure automatic and manual quarantine",
        "Manage FortiAIOps configuration",
        "Troubleshoot FortiGate communication with FortiSwitch and FortiAP",
        "Use widgets and tools to monitor wireless connectivity"
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
      "FCSS - LAN Edge 7.6 Architect training course",
      "Hands-on experience with FortiGate, FortiSwitch, FortiAP, and FortiAuthenticator",
      "Experience with FortiManager, FortiAnalyzer, and FortiAIOps"
    ]
  }
};

export default examDetails;

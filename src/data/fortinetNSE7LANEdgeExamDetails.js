// Fortinet NSE 7 - LAN Edge 7.0 Exam Details
const examDetails = {
  examCode: "NSE7_LED-7.0",
  examName: "Fortinet NSE 7 - LAN Edge 7.0",
  duration: "70 minutes",
  questions: 37,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account",
  language: "English",
  productVersion: "FortiOS 7.0, FortiSwitch 7.0, FortiAP 6.4, FortiAuthenticator 6.4, FortiManager 7.0, and FortiAnalyzer 7.0",

  examDescription: {
    overview: "The Fortinet NSE 7 - LAN Edge 7.0 exam validates advanced knowledge and skills in LAN Edge security solutions including authentication, FortiSwitch, and wireless technologies.",
    targetAudience: "Network security professionals responsible for designing, implementing, and managing Fortinet LAN Edge solutions"
  },

  examTopics: [
    {
      topic: "Authentication",
      weight: "25%",
      objectives: [
        "Configure advanced user authentication and authorization scenarios using RADIUS and LDAP",
        "Troubleshoot user authentication and authorization problems",
        "Implement two-factor authentication using digital certificates",
        "Implement and troubleshoot RADIUS and syslog single sign-on solutions"
      ]
    },
    {
      topic: "FortiSwitch",
      weight: "35%",
      objectives: [
        "Provision, configure, and manage FortiSwitch using FortiManager over FortiLink",
        "Secure the wired network by implementing machine authentication, MAB, and NAC policies",
        "Implement and deploy a ZTP solution",
        "Automatically quarantine wired clients using IoC triggers",
        "Configure VLANs, ports, and trunks on FortiSwitch",
        "Monitor and troubleshoot issues with FortiLink management between FortiSwitch and FortiGate"
      ]
    },
    {
      topic: "Wireless",
      weight: "40%",
      objectives: [
        "Provision, deploy, and manage FortiAP using FortiManager over FortiLink",
        "Deploy complex wireless networks with dynamic VLAN assignments",
        "Implement and deploy wireless networks with IoT segmentation",
        "Provide secure access to guest users",
        "Secure wireless networks",
        "Monitor and analyze wireless clients and traffic using Wireless Manager",
        "Automatically quarantine wireless clients using IoC triggers"
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
      "NSE 7 LAN Edge 7.0 training course",
      "Hands-on experience with FortiGate, FortiSwitch, and FortiAP devices",
      "Experience with FortiManager and FortiAuthenticator"
    ]
  }
};

export default examDetails;

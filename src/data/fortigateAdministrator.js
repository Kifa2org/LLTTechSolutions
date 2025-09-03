// FortiGate 7.6 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FGT_7.6",
  examName: "FCP - FortiGate 7.6 Administrator",
  duration: "90 minutes",
  questions: 50,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - FortiGate 7.6 Administrator exam validates your ability to configure, manage, and monitor FortiGate devices using FortiOS 7.6.0 features and capabilities.",
    targetAudience: "Networking and security professionals responsible for deployment, configuration, and management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Deployment and system configuration",
      weight: "20%",
      objectives: [
        "Perform initial configuration",
        "Implement the Fortinet Security Fabric",
        "Configure an FGCP HA cluster",
        "Diagnose resource and connectivity problems"
      ]
    },
    {
      topic: "Firewall policies and authentication",
      weight: "20%",
      objectives: [
        "Configure firewall policies",
        "Configure SNAT and DNAT options in firewall policies",
        "Configure different methods of firewall authentication",
        "Explain how to deploy and configure FSSO"
      ]
    },
    {
      topic: "Content inspection",
      weight: "25%",
      objectives: [
        "Explain and inspect encrypted traffic using certificates",
        "Identify FortiGate inspection modes and configure web filtering",
        "Configure application control to monitor and control network applications",
        "Configure antivirus scanning modes to neutralize malware threats",
        "Configure IPS to protect networks from threats and vulnerabilities"
      ]
    },
    {
      topic: "Routing",
      weight: "15%",
      objectives: [
        "Configure and route packets using static routes",
        "Configure SD-WAN to load balance traffic between multiple WAN links effectively"
      ]
    },
    {
      topic: "VPN",
      weight: "20%",
      objectives: [
        "Configure and implement different SSL VPNs to provide secure access to your private network",
        "Implement a meshed or partially redundant IPsec VPN"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    language: "English, Japanese",
    productVersion: "FortiOS 7.6.0",
    retakePolicy: "Pass or fail. A score report is available from your Pearson VUE account"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FortiGate Security 7.6 course",
      "FortiGate Infrastructure 7.6 course",
      "Hands-on experience with FortiGate devices"
    ]
  }
};

export default examDetails;

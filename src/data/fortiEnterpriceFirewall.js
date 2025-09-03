// FCSS - Enterprise Firewall 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCSS_EFW_AD-7.4",
  examName: "FCSS - Enterprise Firewall 7.4 Administrator",
  duration: "70 minutes",
  questions: 36,
  passingScore: "Pass or fail. A score report is available from your Pearson VUE account.",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCSS - Enterprise Firewall 7.4 Administrator exam validates your ability to configure and manage Fortinet enterprise firewall solutions.",
    targetAudience: "Network security professionals responsible for implementing and managing FortiGate firewalls in enterprise environments"
  },

  examTopics: [
    {
      topic: "System configuration",
      weight: "25%",
      objectives: [
        "Implement the Fortinet Security Fabric",
        "Configure hardware acceleration on FortiGate",
        "Configure different operation modes for an HA cluster",
        "Implement enterprise networks using VLANs and VDOMs",
        "Explain various use case scenarios of a secure network using Fortinet solutions"
      ]
    },
    {
      topic: "Central management",
      weight: "15%",
      objectives: [
        "Implement central management"
      ]
    },
    {
      topic: "Security profiles",
      weight: "25%",
      objectives: [
        "Given a scenario, manage SSL/SSH inspection profiles",
        "Use a combination of web filters, application control, and ISDB to secure a network",
        "Integrate IPS to perform security checks in enterprise networks"
      ]
    },
    {
      topic: "Routing",
      weight: "20%",
      objectives: [
        "Implement OSPF to route enterprise traffic",
        "Implement BGP to route enterprise traffic"
      ]
    },
    {
      topic: "VPN",
      weight: "15%",
      objectives: [
        "Implement IPsec VPN IKE version 2",
        "Implement ADVPN to enable on-demand VPN tunnels between sites"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "Standard Fortinet retake policy applies"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FCSS - Enterprise Firewall 7.4 Administrator course",
      "Hands-on experience with FortiOS 7.4, FortiManager 7.4, and FortiAnalyzer 7.4",
      "Enterprise network security fundamentals knowledge"
    ]
  }
};

export default examDetails;

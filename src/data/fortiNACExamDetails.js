// Fortinet NSE 6 - FortiNAC 7.2 Exam Details
const examDetails = {
  examCode: "NSE6_FNC-7.2",
  examName: "Fortinet NSE 6 - FortiNAC 7.2",
  duration: "60 minutes",
  questions: 30,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The Fortinet NSE 6 - FortiNAC 7.2 exam validates your knowledge and skills in configuring, managing, and monitoring FortiNAC solutions for network access control.",
    targetAudience: "Network security professionals responsible for implementing and managing FortiNAC solutions"
  },

  examTopics: [
    {
      topic: "Concepts and design",
      weight: "20%",
      objectives: [
        "Explain access control",
        "Explain information gathering and network visibility techniques",
        "Explain isolation networks and the configuration wizard"
      ]
    },
    {
      topic: "Deployment and provisioning",
      weight: "25%",
      objectives: [
        "Configure security automation",
        "Configure access control on FortiNAC",
        "Configure and monitor HA",
        "Model and organize infrastructure devices",
        "Explain and configure logical networks",
        "Explain and configure MDM integration",
        "Configure FortiNAC security policies"
      ]
    },
    {
      topic: "Network visibility and monitoring",
      weight: "20%",
      objectives: [
        "Guests and contractors",
        "Use logging options available on FortiNAC",
        "Explain and configure device profiling",
        "Options for rogue classification",
        "Monitor network devices and device status",
        "Troubleshoot endpoint connectivity and classification"
      ]
    },
    {
      topic: "Integration",
      weight: "35%",
      objectives: [
        "Integrate with third-party devices using Syslog and SNMP trap input",
        "Configure and use FortiNAC Control Manager",
        "Configure and use group and tag information for network devices",
        "Configure FortiGate VPN integration with FortiNAC"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FortiNAC 7.2 Administrator course",
      "Hands-on experience with FortiNAC solutions",
      "Familiarity with FortiNAC 7.2 and FortiOS 7.2"
    ]
  }
};

export default examDetails;

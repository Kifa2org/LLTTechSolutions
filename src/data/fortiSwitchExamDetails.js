// Fortinet NSE 6 - FortiSwitch 7.2 Exam Details
const examDetails = {
  examCode: "NSE6_FSW-7.2",
  examName: "Fortinet NSE 6 - FortiSwitch 7.2",
  duration: "70 minutes",
  questions: 32,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The Fortinet NSE 6 - FortiSwitch 7.2 exam validates your knowledge and skills in managing, provisioning, and configuring FortiSwitch devices in various deployment scenarios.",
    targetAudience: "Network professionals responsible for deploying and managing FortiSwitch solutions"
  },

  examTopics: [
    {
      topic: "Manage and Provision FortiSwitch",
      weight: "25%",
      objectives: [
        "Manage FortiSwitch over FortiLink",
        "Deploy and provision FortiSwitch",
        "Use FortiCloud to manage FortiSwitch",
        "Deploy and manage FortiSwitch in standalone mode",
        "Configure SVI and dynamic routing on FortiSwitch"
      ]
    },
    {
      topic: "Network planning and design",
      weight: "20%",
      objectives: [
        "Deploy FortiSwitch supported deployment topologies",
        "Select a suitable FortiSwitch model",
        "Deploy and configure FortiSwitch in a multi-tenancy environment",
        "Differentiate available FortiSwitch management operation modes",
        "Configure STP to prevent network loops",
        "Configure switch ports, split port, and available transceivers"
      ]
    },
    {
      topic: "FortiSwitch essentials and fundamentals",
      weight: "20%",
      objectives: [
        "Deploying VLANs using FortiSwitch",
        "Use IGMP QoS and LLDP-MED on FortiSwitch",
        "Configure the ports required for stack deployment",
        "Implement switching and routing on available FortiSwitch devices"
      ]
    },
    {
      topic: "Layer 2 control and security",
      weight: "20%",
      objectives: [
        "Use port security options on FortiSwitch",
        "Use available filtering and antispoofing techniques on FortiSwitch",
        "Use integrated and quarantine options to protect the network",
        "Use ACLs, security profiles, and VLAN security mechanisms on FortiSwitch"
      ]
    },
    {
      topic: "FortiSwitch monitoring and troubleshooting",
      weight: "15%",
      objectives: [
        "Use SNMP and sFlow to monitor FortiSwitch and ports",
        "Configure and use different packet sampling options",
        "Configure available packet capturing methods",
        "Troubleshoot FortiLink issues",
        "Use available tools to view and extract network information from FortiSwitch"
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
      "FortiSwitch 7.2 Administrator course",
      "Hands-on experience with FortiSwitch devices",
      "Familiarity with FortiSwitchOS 7.2 and FortiOS 7.2"
    ]
  }
};

export default examDetails;

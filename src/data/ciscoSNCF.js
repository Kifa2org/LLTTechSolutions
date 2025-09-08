// Exam Details - Extracted from PDF
 const ciscoSNCF = {
  examCode: "SNCF",
  examName: "300-710 SNCF",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "This 300-710 SNCF exam validates your skills related to Cisco Secure Firewall (formerly Cisco Firepower) and Cisco Secure Firewall Management Center (formerly Cisco Firepower Management Center), including policy configurations, integrations, deployments, management, and troubleshooting.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Deployment",
      weight: "30%",
      objectives: [
        "Planning and Preparing for Security Solution Deployment",
        "Initial Device Setup and Network Integration",
        "Deploying Cisco Firewalls and Security Appliances",
        "Implementing Secure Network Topologies",
        "Verifying and Testing Deployment Success",
      ]
    },
    {
      topic: "Configuration",
      weight: "30%",
      objectives: [
        "Configuring Security Policies and Access Controls",
        "Setting Up VPNs and Secure Remote Access",
        "Enabling Threat Detection and Prevention Features",
        "Configuring Network Address Translation (NAT)",
        "Customizing Logging and Alerting Settings",
      ]
    },
    {
      topic: "Management and Troubleshooting",
      weight: "25%",
      objectives: [
        "Monitoring Security Devices and Network Traffic",
        "Performing Regular System Maintenance",
        "Troubleshooting Connectivity and Policy Issues",
        "Analyzing Logs and Responding to Security Events",
        "Backing Up and Restoring Device Configurations",
      ]
    },
    {
      topic: "Integration",
      weight: "15%",
      objectives: [
        "Integrating Security Solutions with Network Infrastructure",
        "Connecting with Cloud Security Services",
        "Implementing Identity and Access Management (IAM)",
        "Automating Security Operations and Workflows",
        "Ensuring Compliance with Security Standards",
      ]
    },

  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)", "Drag and drop", "Matching"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "300-710 SNCF course",
      "300-710 SNCF Infrastructure course",
      "Hands-on experience with labs"
    ]
  }
};

export default ciscoSNCF;

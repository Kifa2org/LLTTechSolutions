// Exam Details - Extracted from PDF
 const checkpointCCSE = {
  examCode: "CCSE",
  examName: "Check Point Certified Security Expert",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "The Check Point Certified Security Expert (CCSE) exam demonstrates advanced skills in configuring, managing, and troubleshooting Check Point security environments. It is designed for experienced IT professionals seeking to master complex security solutions and advanced threat prevention techniques.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Overview",
      weight: "20%",
      objectives: [
        "About the Check Point Certified Security Expert (CCSE)",
        "Course Objectives",
        "Who Should Attend",
        "Prerequisites",
      ]
    },
    {
      topic: "Advanced Security Management",
      weight: "20%",
      objectives: [
        "Advanced Security Policy Configuration",
        "Managing Multiple Security Gateways",
        "Advanced User Access Control",
      ]
    },
    {
      topic: "VPN and Encryption",
      weight: "10%",
      objectives: [
        "Site-to-Site VPN Configuration",
        "Remote Access VPN Solutions",
        "VPN Troubleshooting and Optimization",
      ]
    },
    {
      topic: "Threat Prevention and Security Solutions",
      weight: "10%",
      objectives: [
        "Advanced Threat Prevention Features",
        "Intrusion Prevention System (IPS)",
        "Application Control and URL Filtering",
        "Threat Emulation and Threat Extraction",
      ]
    },
    {
      topic: "Advanced Network Address Translation (NAT)",
      weight: "10%",
      objectives: [
        "NAT Concepts and Configuration",
        "Advanced NAT Scenarios",
      ]
    },
    {
      topic: "Clustering and High Availability",
      weight: "10%",
      objectives: [
        "ClusterXL Advanced Configuration",
        "Load Sharing and High Availability",
        "Cluster Troubleshooting",
      ]
    },
    {
      topic: "Performance Optimization and Troubleshooting",
      weight: "10%",
      objectives: [
        "Security Gateway Performance Tuning",
        "Advanced Troubleshooting Tools and Techniques",
        "Log Management and Reporting",
      ]
    },
    {
      topic: "Automation and Orchestration",
      weight: "10%",
      objectives: [
        "Introduction to Automation with Check Point",
        "Using APIs for Security Management",
        "Automated Security Tasks",
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
      "Advanced VPN and Encryption Workshops",
      "ClusterXL and High Availability Labs",
      "Exam Preparation Workshops"
    ]
  }
};

export default checkpointCCSE;

// Exam Details - Extracted from PDF
 const checkpointCCSM = {
  examCode: "CCSM",
  examName: "Check Point Certified Security Master ",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "The Check Point Certified Security Master (CCSM) exam validates expert-level proficiency in designing, implementing, and troubleshooting complex Check Point security environments. It is intended for seasoned professionals aiming to demonstrate mastery of advanced security architecture and optimization techniques.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Overview",
      weight: "15%",
      objectives: [
        "About the Check Point Certified Security Master (CCSM)",
        "Course Objectives",
        "Target Audience",
        "Prerequisites",
      ]
    },
    {
      topic: " Advanced Security Architecture",
      weight: "15%",
      objectives: [
        "Advanced Firewall Operations",
        "Security Policy Optimization",
        "Advanced NAT Techniques",
      ]
    },
    {
      topic: "Advanced Threat Prevention",
      weight: "10%",
      objectives: [
        "Threat Prevention Architecture",
        "Advanced IPS and Threat Emulation",
        "Threat Intelligence Integration",
      ]
    },
    {
      topic: "Troubleshooting and Debugging",
      weight: "10%",
      objectives: [
        "Advanced Troubleshooting Tools",
        "Debugging Security Gateways",
        "Analyzing Logs and Events",
      ]
    },
    {
      topic: "Performance Optimization",
      weight: "10%",
      objectives: [
        "Security Gateway Performance Tuning",
        "Resource Management and Optimization",
        "High Availability and Load Sharing",
      ]
    },
    {
      topic: "Automation and Orchestration",
      weight: "10%",
      objectives: [
        "Security Automation Concepts",
        "API Integration and Scripting",
        "Automated Incident Response",
      ]
    },
    {
      topic: "Advanced VPN and Remote Access",
      weight: "10%",
      objectives: [
        "Complex VPN Deployments",
        "VPN Troubleshooting and Optimization",
        "Remote Access Solutions",
      ]
    },
    {
      topic: "Hands-On Labs",
      weight: "10%",
      objectives: [
        "Lab Exercises Overview",
        "Real-World Scenarios and Solutions",
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
      "Advanced Troubleshooting and Debugging Workshops",
      "Advanced Threat Prevention and Forensics",
      "Hands-On Labs and Simulation Exercises"
    ]
  }
};

export default checkpointCCSM;

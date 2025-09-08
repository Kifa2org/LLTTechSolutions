// Exam Details - Extracted from PDF
 const checkpointCCSA = {
  examCode: "CCSA",
  examName: "Check Point Certified Security Administrator",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "The Check Point Certified Security Administrator (CCSA) exam validates your ability to configure, manage, and troubleshoot Check Point security solutions. It is designed for IT professionals seeking foundational expertise in network security administration and policy management.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Overview",
      weight: "15%",
      objectives: [
        "About the Check Point Certified Security Administrator (CCSA)",
        "Course Objectives",
        "Target Audience",
        "Prerequisites",
      ]
    },
    {
      topic: "Introduction to Check Point Technology",
      weight: "15%",
      objectives: [
        "Security Architecture Overview",
        "Key Components and Features",
      ]
    },
    {
      topic: "Security Policy Management",
      weight: "10%",
      objectives: [
        "Creating and Managing Security Policies",
        "Policy Layers and Rule Base",
        "Policy Installation and Verification"
      ]
    },
    {
      topic: "Traffic Monitoring and Network Address Translation",
      weight: "10%",
      objectives: [
        "Monitoring Network Traffic",
        "Configuring and Managing NAT",
      ]
    },
    {
        topic: "VPN Concepts and Configuration",
        weight: "10%",
        objectives: [
          "Basic Concepts of VPN",
          "Site-to-Site VPN Setup",
          "Remote Access VPN Overview"
        ]
    },
    {
      topic: " User and Access Management",
      weight: "10%",
      objectives: [
        "Managing User Access",
        "Authentication Methods",
        "Identity Awareness"
      ]
    },
    {
      topic: " Working with SmartConsole",
      weight: "10%",
      objectives: [
        "Navigating SmartConsole",
        "Managing Security Gateways",
        "Monitoring and Reporting"
      ]
    },
    {
      topic: " Introduction to Threat Prevention",
      weight: "10%",
      objectives: [
        "Threat Prevention Features",
        "Basic Configuration and Management",
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
      "Network Security Fundamentals",
      "Check Point CCSA R81.20 Online Training",
      "Exam Preparation Workshops"
    ]
  }
};

export default checkpointCCSA;

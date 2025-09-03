// Fortinet NSE 8 - Network Security Expert 8 Practical Exam Details
const examDetails = {
  examCode: "NSE8_PRAC",
  examName: "NSE 8 - Network Security Expert 8 Practical Exam",
  duration: "One day, two sessions (5 hours and 4 hours)",
  questions: 30,
  questionType: "Hands-on configuration and troubleshooting tasks",
  scoring: "Partial credits are available for selected tasks. No deductions for incorrect answers. General pass or fail result provided.",
  language: "English",
  productVersion: "FortiOS 7.2+, FortiManager 7.2+, FortiAnalyzer 7.2+",

  examDescription: {
    overview: "The NSE 8 - Network Security Expert 8 Practical Exam is the hands-on component of the highest level Fortinet certification, validating expert-level skills through real-world configuration and troubleshooting scenarios.",
    targetAudience: "Senior security professionals, architects, and consultants with extensive hands-on experience implementing complex Fortinet security solutions"
  },

  examTopics: [
    {
      topic: "Advanced FortiGate Configuration",
      weight: "25%",
      objectives: [
        "Configure complex routing and switching scenarios",
        "Implement advanced firewall policies and NAT",
        "Deploy high availability and load balancing"
      ]
    },
    {
      topic: "Security Fabric Integration",
      weight: "20%",
      objectives: [
        "Integrate FortiManager with FortiGate devices",
        "Configure FortiAnalyzer for centralized logging",
        "Implement Security Fabric automation"
      ]
    },
    {
      topic: "Advanced VPN and SSL/TLS",
      weight: "20%",
      objectives: [
        "Configure site-to-site IPsec VPN with advanced features",
        "Deploy SSL VPN with certificate authentication",
        "Implement ADVPN and dynamic routing"
      ]
    },
    {
      topic: "Threat Protection and IPS",
      weight: "15%",
      objectives: [
        "Configure advanced IPS signatures and policies",
        "Implement application control and web filtering",
        "Deploy anti-malware and sandboxing"
      ]
    },
    {
      topic: "Troubleshooting and Diagnostics",
      weight: "20%",
      objectives: [
        "Diagnose complex connectivity issues",
        "Analyze security logs and events",
        "Perform advanced packet captures and analysis"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Hands-on configuration", "Troubleshooting scenarios", "Performance optimization"],
    delivery: "Fortinet Training Institute, proctored through ProctorU",
    equipmentRequirements: "ProctorU Support - Equipment Requirements",
    retakePolicy: "15-day waiting period between attempts. You cannot retest with an exam version you have already passed."
  },

  registration: {
    provider: "Fortinet Training Institute",
    website: "training.fortinet.com",
    preparation: [
      "Extensive hands-on experience with Fortinet products",
      "NSE 8 written exam completion",
      "Advanced lab practice with FortiGate, FortiManager, and FortiAnalyzer",
      "Real-world experience with complex network security implementations"
    ],
    scheduling: {
      note: "Take note of your certification expiry date. If you are FCX certified and are scheduling the practical exam to renew your certification, ensure that you take the exam no more than six months before the expiration date of your current certification."
    }
  }
};

export default examDetails;

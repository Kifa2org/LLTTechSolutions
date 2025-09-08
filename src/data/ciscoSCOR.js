// Exam Details - Extracted from PDF
 const ciscoSCOR = {
  examCode: "SCOR",
  examName: "350-701 SCOR",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "This 350-701 SCOR exam validates your skills related to viruses, trojans, DoS/DDoS attacks, phishing, rootkits, man-in-themiddle attacks, SQL injection, cross-site scripting, malware.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Security Concepts",
      weight: "25%",
      objectives: [
       "Understanding Threat Intelligence and Attack Vectors",
       "Security Principles: Confidentiality, Integrity, and Availability",
       "Risk Management and Security Policies",
       "Cryptography Fundamentals and Use Cases",
       "Security Compliance and Governance",
      ]
    },
    {
      topic: "Network Security",
      weight: "20%",
      objectives: [
        "Implementing Network Segmentation and Zoning",
        "Configuring Firewalls and Intrusion Prevention Systems (IPS)",
        "Secure Routing and Switching Practices",
        "Network Traffic Analysis and Anomaly Detection",
        "VPN Technologies and Secure Communications",
      ]
    },
    {
      topic: "Securing the Cloud",
      weight: "15%",
      objectives: [
        "Cloud Security Models and Shared Responsibility",
        "Securing Cloud Infrastructure and Services",
        "Identity and Access Management in the Cloud",
        "Cloud Threats and Mitigation Strategies",
        "Monitoring and Logging in Cloud Environments",
      ]
    },
    {
      topic: "Content Security",
      weight: "15%",
      objectives: [
        "Web and Email Security Fundamentals",
        "Implementing Secure Web Gateways and Proxies",
        "Anti-Malware and Anti-Spam Solutions",
        "Data Loss Prevention (DLP) Techniques",
        "Content Filtering and Policy Enforcement",
      ]
    },
    {
      topic: "Endpoint Protection and Detection",
      weight: "10%",
      objectives: [
        "Endpoint Security Technologies and Solutions",
        "Malware Detection and Response",
        "Host-Based Intrusion Prevention Systems (HIPS)",
        "Endpoint Forensics and Incident Response",
        "Managing Endpoint Security Policies",
      ]
    },
    {
      topic: "Secure Network Access, Visibility and Enforcement",
      weight: "15%",
      objectives: [
        "Authentication, Authorization, and Accounting (AAA)",
        "Implementing Network Access Control (NAC)",
        "Identity Services and Policy Enforcement",
        "Network Visibility and Monitoring Tools",
        "Responding to Access Violations and Threats",
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
      "350-701 SCOR course",
      "350-701 SCOR Infrastructure course",
      "Hands-on experience with labs"
    ]
  }
};

export default ciscoSCOR;

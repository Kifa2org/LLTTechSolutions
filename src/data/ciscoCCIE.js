// Exam Details - Extracted from PDF
 const ciscoCCIE = {
  examCode: "CCIE",
  examName: "CCIE Security",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "This CCIE Security exam validates your skills related to viruses, trojans, DoS/DDoS attacks, phishing, rootkits, man-in-themiddle attacks, SQL injection, cross-site scripting, malware.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Perimeter Security and Intrusion Prevention",
      weight: "20%",
      objectives: [
        "Designing and Implementing Perimeter Security Architectures",
        "Configuring and Managing Firewalls (Stateful and Next-Gen)",
        "Deploying Intrusion Prevention Systems (IPS) and Detection Techniques",
        "Network Address Translation (NAT) and Secure Border Controls",
        "Monitoring, Logging, and Responding to Perimeter Threats",
      ]
    },
    {
      topic: "Secure Connectivity and Segmentation",
      weight: "20%",
      objectives: [
        "Implementing Site-to-Site and Remote Access VPNs",
        "Network Segmentation with VLANs, VRFs, and Trust Boundaries",
        "Secure Routing Protocols and Path Isolation",
        "Policy-Based Access and Micro-Segmentation",
        "Ensuring High Availability and Redundancy in Secure Networks",
      ]
    },
    {
      topic: "Security Infrastructure",
      weight: "15%",
      objectives: [
        "Deploying and Managing Security Appliances and Platforms",
        "Integrating Security Services into Network Infrastructure",
        "High Availability and Scalability of Security Solutions",
        "Secure Network Services (DHCP, DNS, NTP, etc.)",
        "Infrastructure Hardening and Patch Management",
      ]
    },
    {
      topic: "Identity Management, Information Exchange and Access Control",
      weight: "25%",
      objectives: [
        "Implementing Authentication, Authorization, and Accounting (AAA)",
        "Integrating Identity Services (ISE, LDAP, RADIUS, TACACS+)",
        "Secure Information Exchange Protocols (SAML, OAuth, PKI)",
        "Role-Based Access Control (RBAC) and Policy Enforcement",
        "Managing Certificates and Secure Key Distribution",
      ]
    },
    {
      topic: "Advanced Threat Protection and Content Security",
      weight: "20%",
      objectives: [
        "Deploying Advanced Malware Protection and Sandboxing",
        "Email and Web Content Security Solutions",
        "Threat Intelligence Integration and Automation",
        "Data Loss Prevention (DLP) and Sensitive Data Handling",
        "Incident Detection, Response, and Forensics",
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
      "CCIE Security course",
      "CCIE Security Infrastructure course",
      "Hands-on experience with labs"
    ]
  }
};

export default ciscoCCIE;

// Exam Details - Extracted from PDF
 const informationSecurityHacking = {
  examCode: "informationSecurityHacking",
  examName: "Information Security Hacking",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Information security hacking involves exploiting vulnerabilities in computer systems and networks to compromise data and security. Ethical hacking helps identify and fix these vulnerabilities to prevent malicious attacks.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Foundations of Information Security",
      weight: "15%",
      objectives: [
        "What is Information Security",
        "Goals of InfoSec: CIA Triad (Confidentiality, Integrity, Availability)",
        "Risk, Threat, and Vulnerability",
        "Security Terminologies (Attack Vector, Exploit, Payload, etc.)",
        "Types of Hackers: White Hat, Black Hat, Grey Hat",
        "Evolution of Cyber Attacks"
      ]
    },
    {
      topic: "Security Domains and Concepts",
      weight: "15%",
      objectives: [
        "Physical vs Logical Security",
        "Network Security Basics",
        "Application Security",
        "Identity and Access Management (IAM)",
        "Encryption and Cryptography Basics",
        "Compliance & Legal Overview (GDPR, HIPAA, ISO 27001)"
      ]
    },
    {
      topic: "Introduction to Ethical Hacking",
      weight: "10%",
      objectives: [
        "What is Ethical Hacking",
        "Phases of Ethical Hacking",
        "Real-world Use Cases of Ethical Hacking",
        "Understanding the Hacker Mindset"
      ]
    },
    {
      topic: "Common Attack Vectors",
      weight: "10%",
      objectives: [
        "Malware: Virus, Worm, Ransomware, Trojan",
        "Phishing & Social Engineering",
        "Denial of Service (DoS/DDoS)",
        "Password Attacks (Brute Force, Dictionary, Rainbow Tables)",
        "Web Application Attacks (SQLi, XSS, CSRF)",
        "Insider Threats"
      ]
    },
    {
        topic: "Tools of the Trade",
        weight: "10%",
        objectives: [
          "Kali Linux Overview",
          "Nmap – Network Scanning",
          "Wireshark – Packet Analysis",
          "Metasploit – Exploitation Framework",
          "Burp Suite – Web App Testing",
          "Other Common Tools (John the Ripper, Hydra, Nikto)"
        ]
    },
    {
      topic: "Defensive Measures",
      weight: "10%",
      objectives: [
        "Firewalls & IDS/IPS",
        "Antivirus & EDR",
        "Network Segmentation",
        "Patch Management",
        "Secure Coding Practices",
        "Security Policies and Training"
      ]
    },
    {
      topic: "Hands-On Labs & Practice",
      weight: "10%",
      objectives: [
        "Setting Up a Pentesting Lab (VirtualBox/Vmware)",
        "Simulated Phishing Attack",
        "Basic Recon with Nmap",
        "Exploiting a Web Vulnerability (DVWA / Juice Shop)",
        "Capturing & Analyzing Packets with Wireshark",
        "Reporting & Documentation"
      ]
    },
    {
      topic: "Career Path and Certifications",
      weight: "10%",
      objectives: [
        "Career Roles in Cybersecurity",
        "Entry-Level Certifications",
        "Building a Cybersecurity Portfolio",
        "Learning Resources & Communities"
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
      "Certified Ethical Hacker",
      "Hacking Techniques",
      "Exam Preparation"
    ]
  }
};

export default informationSecurityHacking;

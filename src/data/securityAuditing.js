// Exam Details - Extracted from PDF
 const securityAuditing = {
  examCode: "securityAuditing",
  examName: "Security Auditing",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Security Auditing teaches students to assess and evaluate the security controls, policies, and procedures of an organization, identifying vulnerabilities and ensuring compliance with regulatory requirements. This course covers risk assessment, audit methodologies, and reporting to strengthen an organization's security posture.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Introduction to Security Auditing",
      weight: "10%",
      objectives: [
                "What is Security Auditing?",
                "Types of Security Audits (Internal, External, Compliance, Risk-based)",
                "Importance of Auditing in Cybersecurity",
                "Common Standards and Frameworks (ISO 27001, NIST, SOC 2, PCI-DSS)",
                "Roles and Responsibilities of an Auditor"
      ]
    },
    {
      topic: "Audit Planning & Scoping",
      weight: "10%",
      objectives: [
        "Defining Audit Objectives",
               "Scope, Boundaries, and Limitations",
               "Risk Assessment and Prioritization",
               "Understanding Business and IT Environment",
               "Creating an Audit Plan & Timeline"
      ]
    },
    {
      topic: "Security Policies & Controls Review",
      weight: "10%",
      objectives: [
        "Reviewing Security Policies and Procedures",
                "User Access Controls and Permissions",
                "Physical and Environmental Controls",
                "Administrative, Technical, and Physical Safeguards",
                "Configuration and Change Management"
      ]
    },
    {
      topic: "System & Network Auditing",
      weight: "10%",
      objectives: [
        "Auditing Operating Systems (Linux, Windows)",
                "Log Review and Analysis",
                "Network Device Auditing (Firewall, Switches, Routers)",
                "Reviewing IDS/IPS and SIEM Alerts",
                "Analyzing Traffic and Packet Captures"
      ]
    },
    {
        topic: "Application & Database Auditing",
        weight: "10%",
        objectives: [
          "Web Application Security Audits",
                  "Common Application Vulnerabilities (OWASP Top 10)",
                  "Database Access and Query Monitoring",
                  "Audit Trails and Logs in Databases",
                  "Application Source Code Review (Intro)"
        ]
    },
    {
      topic: "Compliance & Regulatory Audits",
      weight: "10%",
      objectives: [
        "Auditing for GDPR, HIPAA, PCI-DSS, ISO 27001",
                "Control Mapping and Gap Analysis",
                "Evidence Collection and Documentation",
                "Third-Party Vendor Security Audits",
                "Dealing with Non-Compliance Issues"
      ]
    },
    {
      topic: "Tools for Security Auditing",
      weight: "10%",
      objectives: [
        "SIEM Tools (Splunk, ELK, QRadar)",
                "Vulnerability Assessment Tools (Nessus, OpenVAS)",
                "File Integrity Monitoring (FIM)",
                "Log Analysis Tools",
                "Custom Scripting for Auditing (Bash, PowerShell, Python)"
      ]
    },
    {
      topic: "Audit Reporting & Remediation",
      weight: "10%",
      objectives: [
        "Creating an Audit Report (Executive Summary + Technical Findings)",
                "Risk Ratings and Impact Analysis",
                "Recommendations for Remediation",
                "Tracking Findings and Corrective Actions",
                "Communicating with Stakeholders and Management"
      ]
    },
    {
      topic: "Continuous Auditing & Monitoring",
      weight: "10%",
      objectives: [
         "Real-Time Monitoring vs Periodic Audits",
                "Security Metrics and KPIs",
                "Automated Alerting and Anomaly Detection",
                "Building an Audit Calendar",
                "Integrating Auditing into DevSecOps"
      ]
    },
    {
      topic: "Audit Reporting & Remediation",
      weight: "10%",
      objectives: [
        "Conducting a Simulated Internal Audit",
                "Using Nessus for Vulnerability Reporting",
                "Log Review and Incident Correlation with SIEM",
                "Creating a Sample Audit Report",
                "Case Study: Security Audit of a Financial Organization"
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
      "Cybersecurity Auditing Training Course",
      "Information Security Auditor Online Training",
      "Security Auditing & Compliance"
    ]
  }
};

export default securityAuditing;

// Exam Details - Extracted from PDF
 const cloudSecurity = {
  examCode: "cloudSecurity",
  examName: "Cloud Security",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Cloud Security covers the principles and practices for securing cloud-based infrastructure, applications, and data, including risk management, compliance, and threat mitigation. Students learn to design and implement secure cloud architectures and protect against cloud-specific threats.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Introduction to Cloud Security",
      weight: "20%",
      objectives: [
        "What is Cloud Security",
        "The Shared Responsibility Model",
        "Cloud Deployment Models: Public, Private, Hybrid, Community",
        "Cloud Service Models: IaaS, PaaS, SaaS, FaaS",
        "Key Challenges in Cloud Security",
        "Cloud Security vs Traditional Security",
      ]
    },
    {
      topic: "Cloud Architecture and Design",
      weight: "10%",
      objectives: [
        "Secure Cloud Architecture Principles",
        "Multi-Tenant Isolation",
        "Microservices & Container Security (Docker, Kubernetes)",
        "Serverless Security Considerations",
        "Identity Federation and SSO in Cloud",
        "API Security",
      ]
    },
    {
      topic: "Identity and Access Management (IAM)",
      weight: "10%",
      objectives: [
        "Role-Based Access Control (RBAC)",
        "Attribute-Based Access Control (ABAC)",
        "Cloud IAM Services",
        "MFA & Conditional Access Policies",
        "Privileged Identity Management (PIM)",
      ]
    },
    {
      topic: "Network and Perimeter Security in Cloud",
      weight: "10%",
      objectives: [
        "Virtual Private Cloud (VPC) Concepts",
        "Firewalls, Security Groups, and NACLs",
        "Zero Trust Network Architecture",
        "VPNs, Bastion Hosts, and Transit Gateways",
        "DDoS Protection and WAFs",
        "DNS Security in the Cloud",
      ]
    },
    {
        topic: "Data Protection and Encryption",
        weight: "10%",
        objectives: [
          "Data at Rest vs In Transit vs In Use",
          "Cloud Key Management Services (KMS)",
          "Customer-Managed Keys (CMK) vs Provider-Managed",
          "Tokenization and Masking",
          "Cloud Storage Encryption Options (S3, Azure Blob, GCP Bucket)",
          "Data Loss Prevention (DLP) in the Cloud",
        ]
    },
    {
      topic: "Cloud Monitoring & Threat Detection",
      weight: "10%",
      objectives: [
        "Cloud Logging & Auditing (CloudTrail, CloudWatch, Azure Monitor)",
        "SIEM Integration with Cloud (Splunk, Sentinel, Chronicle)",
        "Security Alerts & Event Correlation",
        "Threat Intelligence in Cloud",
        "Cloud-native Security Tools",
      ]
    },
    {
      topic: "Compliance, Governance, and Risk",
      weight: "10%",
      objectives: [
        "Cloud Compliance Frameworks",
        "Risk Assessment & Business Continuity",
        "Cloud Security Policies & Standards",
        "Auditing Cloud Environments",
        "Vendor Management & Third-Party Risks",
      ]
    },
    {
      topic: "Incident Response & Recovery",
      weight: "10%",
      objectives: [
        "Incident Response Planning in Cloud",
        "Forensics in Cloud Environments",
        "Cloud-native IR Tools",
        "Backup and Disaster Recovery in Cloud",
        "Legal and Regulatory Considerations",
        "Building a Cloud IR Runbook",
      ]
    },
    {
      topic: "Hands-on Labs & Practical Exercises",
      weight: "10%",
      objectives: [
        "Setting up IAM Roles and Policies (AWS / Azure / GCP)",
        "Encrypting Storage and Databases",
        "Configuring WAF & DDoS Protection",
        "Logging and Monitoring with Cloud-native Tools",
        "Implementing DLP Rules",
        "Simulating a Cloud Incident & Response",
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
      "Certified Cloud Security Engineer",
      "CompTIA Cloud",
      "Exam Preparation"
    ]
  }
};

export default cloudSecurity;

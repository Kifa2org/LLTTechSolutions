// FortiSOAR 7.3 Administrator Exam Details
const examDetails = {
  examCode: "NSE6_FSR-7.3",
  examName: "Fortinet NSE 6 - FortiSOAR 7.3 Administrator",
  duration: "60 minutes",
  questions: 32,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The Fortinet NSE 6 - FortiSOAR 7.3 Administrator exam validates your knowledge and skills in configuring, managing, and operating FortiSOAR security orchestration, automation, and response (SOAR) platform.",
    targetAudience: "Security professionals, SOC analysts, and administrators responsible for implementing and managing FortiSOAR solutions"
  },

  examTopics: [
    {
      topic: "SOC and SOAR Overview",
      weight: "10%",
      objectives: [
        "Understand Security Operations Center (SOC) concepts",
        "Understand SOAR platform capabilities and benefits",
        "Identify FortiSOAR architecture and components"
      ]
    },
    {
      topic: "Deployment and Initial Configuration",
      weight: "15%",
      objectives: [
        "Identify deployment requirements",
        "Manage FortiSOAR licensing",
        "Configure initial settings",
        "Perform system initialization"
      ]
    },
    {
      topic: "Incident and Alert Management",
      weight: "20%",
      objectives: [
        "Manage incidents and alerts",
        "Configure alert ingestion",
        "Create and manage incident workflows",
        "Implement case management processes"
      ]
    },
    {
      topic: "System Configuration",
      weight: "15%",
      objectives: [
        "Configure applications and system fixtures",
        "Configure proxy settings",
        "View and manage audit logs",
        "Export and import system configuration"
      ]
    },
    {
      topic: "High Availability and System Management",
      weight: "10%",
      objectives: [
        "Configure FortiSOAR HA",
        "Manage system backups",
        "Perform system upgrades",
        "Monitor system health"
      ]
    },
    {
      topic: "Security Management",
      weight: "15%",
      objectives: [
        "Configure role-based access control (RBAC)",
        "Configure and manage teams and team hierarchy",
        "Differentiate between appliance and user authentication",
        "Troubleshoot security management issues"
      ]
    },
    {
      topic: "System Operation",
      weight: "10%",
      objectives: [
        "Externalize and migrate Elasticsearch data",
        "Configure the recommendation engine",
        "Configure and operate war rooms",
        "Manage playbook execution"
      ]
    },
    {
      topic: "System Monitoring and Maintenance",
      weight: "5%",
      objectives: [
        "Monitor FortiSOAR using system tools",
        "Monitor various FortiSOAR processes and services",
        "View and interpret log files",
        "Perform routine maintenance tasks"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)"],
    delivery: "Pearson VUE testing centers or online proctored",
    language: "English",
    productVersion: "FortiSOAR 7.3"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FortiSOAR Administrator 7.3 course",
      "Hands-on experience with FortiSOAR platform",
      "FortiSOAR product documentation and best practices"
    ]
  }
};

export default examDetails;

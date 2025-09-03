// Fortinet FCSS - Public Cloud Security 7.6 Architect Exam Details
const examDetails = {
  examCode: "FCSS_CDS_AR-7.6",
  examName: "FCSS - Public Cloud Security 7.6 Architect",
  duration: "75 minutes",
  questions: 38,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English, Japanese",
  productVersion: "FortiOS 7.6, FortiWeb 7.4",

  examDescription: {
    overview: "The FCSS - Public Cloud Security 7.6 Architect exam validates advanced knowledge and skills in designing and implementing Fortinet security solutions in public cloud environments.",
    targetAudience: "Cloud security architects and senior engineers responsible for designing and implementing Fortinet security solutions in AWS, Azure, and other public cloud platforms"
  },

  examTopics: [
    {
      topic: "Security solutions deployment",
      weight: "25%",
      objectives: [
        "Deploy Fortinet solutions to protect IaaS",
        "Deploy Fortinet solutions to protect CaaS",
        "Integrate Fortinet solutions with cloud native tools"
      ]
    },
    {
      topic: "Automation tools",
      weight: "20%",
      objectives: [
        "Deploy cloud infrastructure using Terraform and Ansible",
        "Deploy Fortinet solutions using Azure Bicep",
        "Deploy Fortinet solutions using AWS CloudFormation"
      ]
    },
    {
      topic: "Cloud infrastructure monitoring",
      weight: "20%",
      objectives: [
        "Monitor AWS networks",
        "Monitor Azure networks",
        "Use Fortinet monitoring tools for cloud workloads"
      ]
    },
    {
      topic: "Troubleshooting",
      weight: "35%",
      objectives: [
        "Troubleshoot AWS connectivity issues",
        "Troubleshoot Azure connectivity issues",
        "Troubleshoot AWS and Azure SDN connectors"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "15-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FCSS - Public Cloud Security 7.6 Architect training course",
      "Hands-on experience with FortiOS 7.6 and FortiWeb 7.4",
      "Experience designing and implementing cloud security solutions",
      "Practical experience with AWS and Azure cloud platforms"
    ]
  }
};

export default examDetails;

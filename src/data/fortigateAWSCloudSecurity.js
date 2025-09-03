// FCP - AWS Cloud Security 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_WCS_AD-7.4",
  examName: "FCP - AWS Cloud Security 7.4 Administrator",
  duration: "70 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - AWS Cloud Security 7.4 Administrator exam validates your ability to configure, manage, and monitor Fortinet solutions in AWS cloud environments.",
    targetAudience: "Cloud security professionals responsible for implementing and managing Fortinet security solutions in AWS"
  },

  examTopics: [
    {
      topic: "Public cloud fundamentals",
      weight: "15%",
      objectives: [
        "Explain AWS public cloud concepts",
        "Identify Fortinet solutions to secure the cloud"
      ]
    },
    {
      topic: "AWS components",
      weight: "20%",
      objectives: [
        "Identify AWS networking components",
        "Apply AWS security components",
        "Describe traffic flow in AWS"
      ]
    },
    {
      topic: "Fortinet product deployment",
      weight: "25%",
      objectives: [
        "Integrate Fortinet solutions in AWS",
        "Deploy WAF in AWS"
      ]
    },
    {
      topic: "High availability",
      weight: "20%",
      objectives: [
        "Deploy HA in AWS",
        "Configure HA using Fortinet CloudFormation templates"
      ]
    },
    {
      topic: "Load balancers and FortiCNF",
      weight: "20%",
      objectives: [
        "Compare load balancer types in AWS",
        "Deploy FortiGate CNF"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FCP - AWS Cloud Security 7.4 course",
      "Hands-on experience with Fortinet solutions in AWS",
      "AWS cloud fundamentals knowledge"
    ]
  }
};

export default examDetails;

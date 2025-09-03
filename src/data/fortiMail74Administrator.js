// FCP - FortiMail 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FML_AD-7.4",
  examName: "FCP - FortiMail 7.4 Administrator",
  duration: "65 minutes",
  questions: 34,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - FortiMail 7.4 Administrator exam validates your ability to configure, manage, and monitor FortiMail devices for secure email management.",
    targetAudience: "Email security professionals responsible for managing FortiMail solutions"
  },

  examTopics: [
    {
      topic: "Initial deployment and basic configuration",
      weight: "20%",
      objectives: [
        "Describe the fundamentals of SMTP and email flow",
        "Complete the basic setup of FortiMail operation mode, system settings, and protected domains",
        "Deploy FortiMail high-availability clusters"
      ]
    },
    {
      topic: "Email flow and authentication",
      weight: "25%",
      objectives: [
        "Enable and match authentication on FortiMail",
        "Configure secure MTA features",
        "Configure and track access control rules, IP policies, and recipient policies"
      ]
    },
    {
      topic: "Email security",
      weight: "30%",
      objectives: [
        "Configure session-based email filtering",
        "Configure and manage spam filtering techniques",
        "Configure malware detection and advanced persistent threat mitigation",
        "Configure content-based email filtering and archiving"
      ]
    },
    {
      topic: "Encryption",
      weight: "15%",
      objectives: [
        "Configure traditional SMTP encryption methods",
        "Configure identity-based encryption (IBE)",
        "Manage IBE users"
      ]
    },
    {
      topic: "Server mode and transparent mode",
      weight: "10%",
      objectives: [
        "Configure and manage server mode features",
        "Deploy FortiMail in transparent mode"
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
      "FCP - FortiMail 7.4 course",
      "Hands-on experience with FortiMail devices",
      "Email security fundamentals knowledge"
    ]
  }
};

export default examDetails;

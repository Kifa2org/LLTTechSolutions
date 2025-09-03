// Fortinet FCSS - FortiSASE 25 Administrator Exam Details
const examDetails = {
  examCode: "FCSS_SASE_AD-25",
  examName: "FCSS - FortiSASE 25 Administrator",
  duration: "60 minutes",
  questions: 30,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English, Japanese",
  productVersion: "FortiSASE 25, FortiOS 7.4, FortiAuthenticator 6.5, FortiClient 7.0 and later",

  examDescription: {
    overview: "The FCSS - FortiSASE 25 Administrator exam validates knowledge and skills required to administer and manage FortiSASE security solutions.",
    targetAudience: "Network security administrators and engineers responsible for managing FortiSASE deployments"
  },

  examTopics: [
    {
      topic: "SASE architecture and components",
      weight: "20%",
      objectives: [
        "Integrate FortiSASE in a hybrid network",
        "Identify FortiSASE components",
        "Construct FortiSASE deployment cases"
      ]
    },
    {
      topic: "SASE deployment",
      weight: "30%",
      objectives: [
        "Implement various types of user onboarding methods",
        "Configure SASE administration settings",
        "Configure and apply security posture checks and compliance rules"
      ]
    },
    {
      topic: "SIA, SSA, and SPA",
      weight: "25%",
      objectives: [
        "Design security profiles to perform content inspection",
        "Deploy SD-WAN using FortiSASE",
        "Deploy ZTNA"
      ]
    },
    {
      topic: "Analytics",
      weight: "25%",
      objectives: [
        "Identify potential security threats using FortiSASE logs",
        "Configure dashboards and logging settings",
        "Analyze reports for user traffic and security issues"
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
      "FCSS - FortiSASE 25 Administrator training course",
      "Hands-on experience with FortiSASE 25 and related Fortinet products",
      "Experience with cloud security and SASE implementations"
    ]
  }
};

export default examDetails;

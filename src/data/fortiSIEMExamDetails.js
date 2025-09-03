 const fortiSIEMExamDetails = {
  examCode: "FCP_FortiSIEM-7.2",
  examName: "FCP - FortiSIEM 7.2 Analyst",
  examSeries: "FCP_FSM_AN-7.2",
  duration: "60 minutes",
  questions: 32 ,
  passingScore: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English",
  productVersion: "FortiSIEM 7.2",
    examDescription: {
    overview: "",
    targetAudience: ""
  },
  examTopics: [
    {
      topic: "Analytics",
        weight: "20%",
      objectives: [
        "Build queries from search results and events",
        "Apply group by and data aggregation on search results",
        "Perform CMDB and lookup table queries",
        "Perform nested query lookups"
      ]
    },
    {
      topic: "Rules and subpatterns",
        weight: "20%",
      objectives: [
        "Identify various rule components",
        "Utilize rule subpatterns, aggregation, and group by",
        "Configure FortiSIEM analytics rules"
      ]
    },
    {
      topic: "Incidents, notifications, and remediation",
        weight: "20%",
      objectives: [
        "Manage incidents",
        "Configure notification policies",
        "Configure remediation options"
      ]
    },
    {
      topic: "Machine learning, UEBA, and ZTNA",
        weight: "20%",
      objectives: [
        "Configure machine learning configuration tasks",
        "Integrate UEBA data into rules and dashboards",
        "Describe how to integrate ZTNA into FortiSIEM operations"
      ]
    }
  ],

    examFormat: {
    questionTypes: [""],
  
    retakePolicy: "",
    delivery: "The Fortinet Training Institute recommends that you review the exam policies and procedures before you register for the exam. Access important information on the Fortinet Training Institute Policies page, and find answers to common questions on the FAQ page."
  },

  registration: {
    provider: "",
    website: "www.pearsonvue.com/fortinet",
      preparation: [
  
    ]
  }
};

export default fortiSIEMExamDetails;

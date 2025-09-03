const examDetails = {
  examCode: "FCSS_SOC_AN-7.4",
  examName: "FCSS - Security Operations 7.4 Analyst",
 duration: "65 minutes",
 questions: 32,
  passingScore: "Pass or fail",
 price: "$400 USD",
  
  examDescription: {
   overview: "The FCSS - Security Operations 7.4 Analyst exam validates your ability to analyze security incidents and manage Fortinet SOC solutions.",
    targetAudience: "Security operations analysts responsible for monitoring and responding to security incidents"
  },

 examTopics: [
   {
     topic: "SOC concepts and adversary behavior",
     weight: "20%",
     objectives: [
       "Analyze security incidents and identify adversary behaviors",
       "Map adversary behaviors to MITRE ATT&CK tactics and techniques",
       "Identify components of the Fortinet SOC solution"
     ]
   },
   {
     topic: "Architecture and detection capabilities",
     weight: "25%",
     objectives: [
       "Configure and manage collectors and analyzers",
       "Design stable and efficient FortiAnalyzer deployments",
       "Design, configure, and manage FortiAnalyzer Fabric deployments"
     ]
   },
   {
    topic: "SOC operation",
    weight: "25%",
    objectives: [
      "Configure and manage event handlers",
      "Analyze and manage events and incidents",
      "Analyze threat hunting information feeds",
       "Manage outbreak alert handlers and reports"
     ]
   },
   {
     topic: "SOC automation",
     weight: "30%",
     objectives: [
       "Configure playbook triggers and tasks",
       "Configure and manage connectors",
      "Manage playbook templates",
      "Monitor playbooks"
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
     "FCSS - Security Operations 7.4 course",
     "Hands-on experience with FortiAnalyzer and FortiSOAR",
     "Security operations fundamentals knowledge"
    ]
 }
};

export default examDetails;
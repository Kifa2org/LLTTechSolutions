// Fortinet FCSS - SD-WAN 7.6 Architect Exam Details
const examDetails = {
  examCode: "FCSS_SDW-7.6-AR",
  examName: "FCSS - SD-WAN 7.6 Architect",
  duration: "75 minutes",
  questions: 38,
  questionType: "Multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account.",
  language: "English",
  productVersion: "FortiOS 7.6, FortiManager 7.6",

  examDescription: {
    overview: "The FCSS - SD-WAN 7.6 Architect exam validates advanced knowledge and skills in designing and implementing Fortinet SD-WAN solutions.",
    targetAudience: "Network architects and senior engineers responsible for designing and implementing Fortinet SD-WAN solutions"
  },

  examTopics: [
    {
      topic: "SD-WAN basic setup",
      weight: "15%",
      objectives: [
        "Configure a basic SD-WAN setup",
        "Configure SD-WAN members and zones",
        "Configure performance SLAs"
      ]
    },
    {
      topic: "Rules and routing",
      weight: "20%",
      objectives: [
        "Configure SD-WAN rules",
        "Configure SD-WAN routing"
      ]
    },
    {
      topic: "Centralized management",
      weight: "20%",
      objectives: [
        "Deploy SD-WAN from FortiManager",
        "Implement the branch configuration deployment",
        "Use SD-WAN manager and overlay orchestration"
      ]
    },
    {
      topic: "Advanced IPsec",
      weight: "25%",
      objectives: [
        "Deploy a hub-and-spoke IPsec topology for SD-WAN",
        "Configure ADVPN",
        "Configure IPsec multihub, multiregion, and large deployments"
      ]
    },
    {
      topic: "SD-WAN troubleshooting",
      weight: "20%",
      objectives: [
        "Troubleshoot SD-WAN rules and session behavior",
        "Troubleshoot SD-WAN routing",
        "Troubleshoot ADVPN"
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
      "FCSS - SD-WAN 7.6 Architect training course",
      "Hands-on experience with FortiOS 7.6 and FortiManager 7.6",
      "Experience designing and implementing SD-WAN solutions"
    ]
  }
};

export default examDetails;

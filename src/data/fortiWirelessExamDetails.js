// FCP - Secure Wireless LAN 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_FWF_AD-7.4",
  examName: "FCP - Secure Wireless LAN 7.4 Administrator",
  duration: "60 minutes",
  questions: 30,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - Secure Wireless LAN 7.4 Administrator exam validates your knowledge and skills in deploying, configuring, and managing secure wireless networks using FortiGate, FortiAP, and FortiPresence solutions.",
    targetAudience: "Network security professionals responsible for implementing and managing secure wireless LAN solutions"
  },

  examTopics: [
    {
      topic: "Wireless fundamentals and FortiAP management",
      weight: "25%",
      objectives: [
        "Apply wireless fundamentals and technology standards",
        "Deploy FortiAP devices using the FortiOS integrated wireless controller",
        "Use custom access point profiles to configure FortiAP devices"
      ]
    },
    {
      topic: "Wireless network security and access",
      weight: "25%",
      objectives: [
        "Design and deploy a wireless network",
        "Configure secure wireless access",
        "Deploy VLANs and NAC for wireless segmentation"
      ]
    },
    {
      topic: "Wireless monitoring and protection",
      weight: "25%",
      objectives: [
        "Identify wireless threats and malicious activities",
        "Monitor access point health and performance",
        "Implement location-based presence and guest services"
      ]
    },
    {
      topic: "Wireless diagnostics and analytics",
      weight: "25%",
      objectives: [
        "Gather information about clients and wireless components",
        "Troubleshoot common wireless issues and apply remediation",
        "Analyze wireless logs and debugs"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice questions"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "FortiGate Security 7.4 course",
      "FortiGate Infrastructure 7.4 course",
      "Hands-on experience with FortiGate 7.4, FortiAP 7.4, and FortiPresence 2.0"
    ]
  }
};

export default examDetails;

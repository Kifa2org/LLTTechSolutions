// Fortinet NSE 8 - Network Security Expert 8 Written Exam Details
const examDetails = {
  examCode: "NSE8_WRT",
  examName: "NSE 8 - Network Security Expert 8 Written Exam",
  duration: "120 minutes",
  questions: 60,
  questionType: "Multiple-choice questions",
  scoring: "Answers must be 100% correct for credit. No partial credit or deduction for incorrect answers. You will receive a document containing a pass or fail result and an indication of your performance for each exam section.",
  language: "English",
  productVersion: "FortiOS 7.2+",

  examDescription: {
    overview: "The NSE 8 - Network Security Expert 8 Written Exam is the highest level of Fortinet's Network Security Expert certification program, validating expert-level knowledge across the entire Fortinet Security Fabric.",
    targetAudience: "Senior security professionals, architects, and consultants with extensive experience designing and implementing complex Fortinet security solutions"
  },

  examTopics: [
    {
      topic: "Advanced FortiGate Configuration",
      weight: "20%",
      objectives: [
        "Configure advanced routing protocols",
        "Implement complex firewall policies",
        "Deploy advanced VPN configurations"
      ]
    },
    {
      topic: "Security Fabric Architecture",
      weight: "25%",
      objectives: [
        "Design enterprise-level Security Fabric deployments",
        "Integrate multiple Fortinet products",
        "Implement zero-trust network architecture"
      ]
    },
    {
      topic: "Advanced Threat Protection",
      weight: "20%",
      objectives: [
        "Configure advanced IPS signatures",
        "Implement sandboxing solutions",
        "Deploy anti-malware protection"
      ]
    },
    {
      topic: "Cloud Security",
      weight: "15%",
      objectives: [
        "Design cloud security architectures",
        "Implement hybrid cloud security",
        "Configure cloud-native security controls"
      ]
    },
    {
      topic: "Troubleshooting and Optimization",
      weight: "20%",
      objectives: [
        "Diagnose complex network issues",
        "Optimize security performance",
        "Implement advanced logging and monitoring"
      ]
    }
  ],

  examFormat: {
    questionTypes: ["Multiple choice"],
    delivery: "Pearson VUE testing centers and OnVUE online proctoring",
    retakePolicy: "15-day waiting period between attempts. You cannot retest with an exam version you have already passed."
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "Extensive hands-on experience with Fortinet products",
      "NSE 7 certification in relevant specializations",
      "Advanced training courses",
      "Real-world experience designing enterprise security solutions"
    ],
    recertification: {
      note: "Take note of your certification expiry date. If you are FCX certified and are scheduling the written exam to renew your certification, ensure that you take the exam no more than six months before the expiration date of your current certification."
    }
  }
};

export default examDetails;

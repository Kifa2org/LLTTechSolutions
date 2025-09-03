// FCP - Azure Cloud Security 7.4 Administrator Exam Details
const examDetails = {
  examCode: "FCP_ZCS_AD-7.4",
  examName: "FCP - Azure Cloud Security 7.4 Administrator",
  duration: "70 minutes",
  questions: 35,
  passingScore: "Pass or fail",
  price: "$400 USD",
  
  examDescription: {
    overview: "The FCP - Azure Cloud Security 7.4 Administrator exam validates your ability to configure, manage, and monitor Fortinet solutions in Microsoft Azure cloud environments.",
    targetAudience: "Cloud security professionals responsible for implementing and managing Fortinet security solutions in Azure"
  },

  examTopics: [
    {
      topic: "Azure public cloud concepts",
      weight: "15%",
      objectives: [
        "Describe public cloud basic concepts and components",
        "Describe Azure basic concepts and components"
      ]
    },
    {
      topic: "Azure components",
      weight: "20%",
      objectives: [
        "Explain Azure components and networking elements",
        "Explain Azure security services"
      ]
    },
    {
      topic: "Fortinet product deployment",
      weight: "25%",
      objectives: [
        "Describe the Fortinet solutions in Azure",
        "Deploy a single FortiWeb instance",
        "Deploy a single FortiGate instance",
        "Configure FortiGate Azure SDN integration"
      ]
    },
    {
      topic: "High availability (HA)",
      weight: "20%",
      objectives: [
        "Configure HA using FortiGate in Azure",
        "Configure load balancing and autoscaling",
        "Explain Azure route server concepts",
        "Explain Azure route server use cases"
      ]
    },
    {
      topic: "VPN solutions in Azure",
      weight: "20%",
      objectives: [
        "Explain the site-to-site connection options in Azure",
        "Deploy connections between FortiGate and Azure VPN gateway",
        "Explain Azure virtual WAN concepts",
        "Deploy Azure virtual WAN"
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
      "FCP - Azure Cloud Security 7.4 course",
      "Hands-on experience with Fortinet solutions in Azure",
      "Azure cloud fundamentals knowledge"
    ]
  }
};

export default examDetails;

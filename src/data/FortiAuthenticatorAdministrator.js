// FortiAuthenticator Administrator Exam Details
const examDetails = {
  examCode: "FCP_FAC_AD",
  examName: "FCP—FortiAuthenticator 6.5 Administrator",
  duration: "60 minutes",
  questions: 30,
  questionType: "multiple-choice questions",
  scoring: "Pass or fail. A score report is available from your Pearson VUE account",
  language: "English",
  productVersion: "FortiAuthenticator 6.5",
  
  examDescription: {
    overview: "The FCP—FortiAuthenticator 6.5 Administrator exam validates your ability to configure, manage, and monitor FortiAuthenticator devices using the most common FortiAuthenticator features.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiAuthenticator devices"
  },

  examTopics: [
    {
      topic: "FortiAuthenticator management",
      weight: "25%",
      objectives: [
        "Perform deployment configuration on FortiAuthenticator",
        "Explain and configure administrative accounts and roles",
        "Configure advanced system settings",
        "Configure and manage user accounts"
      ]
    },
    {
      topic: "Certificate management",
      weight: "20%",
      objectives: [
        "Describe key concepts of PKI and digital certificates",
        "Use the FortiAuthenticator certificate management service to generate local certificates",
        "Implement automatic certificate management services"
      ]
    },
    {
      topic: "Active authentication (RADIUS, LDAP, 802.1x, Portal Services)",
      weight: "25%",
      objectives: [
        "Implement RADIUS profiles and realms for RADIUS authentication",
        "Configure and manage supported remote authentication services",
        "Use FortiAuthenticator portal services to authenticate local and remote users",
        "Configure tokens and two-factor authentication"
      ]
    },
    {
      topic: "Single sign-on",
      weight: "20%",
      objectives: [
        "Use local authentication events for Fortinet Single Sign-On (FSSO)",
        "Use third-party logon events via RADIUS single sign-on (RSSO), tags, and logs to generate FSSO events",
        "Implement SAML roles on FortiAuthenticator for the SAML SSO service"
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
      "FortiAuthenticator 6.5 course",
      "Hands-on experience with FortiAuthenticator devices"
    ]
  }
};

export default examDetails;

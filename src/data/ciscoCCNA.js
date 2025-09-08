// Exam Details - Extracted from PDF
 const ciscoCCNA = {
  examCode: "CCNA",
  examName: "200-301 CCNA",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "This 200-301 CCNA exam validates your skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Network Fundamentals",
      weight: "20%",
      objectives: [
        "Understanding Network Components (Routers, Switches, End Devices)",
        "OSI and TCP/IP Models: Layer Functions and Mapping",
        "IPv4 and IPv6 Addressing Basics",
        "Types of Networks: LAN, WAN, WLAN, and Topologies",
        "Common Network Protocols and Their Roles",
      ]
    },
    {
      topic: "Network Access",
      weight: "20%",
      objectives: [
        "Switching Concepts and Operations",
        "VLANs: Configuration and Benefits",
        "Inter-Switch Connectivity: Trunking and EtherChannel",
        "Wireless Networking Basics and Access Points",
        "Spanning Tree Protocol (STP) Fundamentals",
      ]
    },
    {
      topic: "IP Connectivity",
      weight: "25%",
      objectives: [
        "Routing Concepts: Static vs. Dynamic Routing",
        "IPv4 and IPv6 Routing Table Interpretation",
        "OSPF Configuration and Operation",
        "Default Gateway and Path Selection",
        "Troubleshooting IP Connectivity Issues",
      ]
    },
    {
      topic: "IP Services",
      weight: "10%",
      objectives: [
        "DHCP and DNS: Configuration and Operation",
        "NAT and PAT: Concepts and Implementation",
        "Network Time Protocol (NTP) Basics",
        "Quality of Service (QoS) Fundamentals",
        "SNMP and Syslog for Network Monitoring",
      ]
    },
    {
      topic: "Security Fundamentals",
      weight: "15%",
      objectives: [
        "Device Security: Passwords and Remote Access",
        "Access Control Lists (ACLs): Types and Configuration",
        "Layer 2 Security Features (Port Security, DHCP Snooping)",
        "Secure Network Management Practices",
        "Recognizing Common Security Threats",
      ]
    },
    {
      topic: "Automation and Programmability",
      weight: "10%",
      objectives: [
        "Introduction to Network Automation Concepts",
        "Understanding REST APIs in Networking",
        "Basics of Configuration Management Tools",
        "Interpreting JSON Data and Network Output",
        "Practical Use Cases for Automation in Cisco Networks",
      ]
    },
  ],

  examFormat: {
    questionTypes: ["Multiple choice (single answer)", "Multiple choice (multiple answers)", "Drag and drop", "Matching"],
    delivery: "Pearson VUE testing centers or online proctored",
    retakePolicy: "14-day waiting period between attempts"
  },

  registration: {
    provider: "Pearson VUE",
    website: "www.pearsonvue.com/fortinet",
    preparation: [
      "200-301 CCNA course",
      "200-301 CCNA Infrastructure course",
      "Hands-on experience with labs"
    ]
  }
};

export default ciscoCCNA;

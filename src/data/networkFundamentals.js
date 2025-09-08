// Exam Details - Extracted from PDF
 const networkFundamentals = {
  examCode: "networkFundamentals",
  examName: "Network Fundamentals",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Network Fundamentals covers the basics of computer networking, including network topologies, protocols, and architectures. Students learn about network devices, IP addressing, and network communication, laying the foundation for advanced networking concepts.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Introduction to Networking",
      weight: "15%",
      objectives: [
        "What is a Network?",
        "Types of Networks (LAN, WAN, MAN, PAN)",
        "Network Topologies (Star, Mesh, Bus, Ring, Hybrid)",
        "Client-Server vs Peer-to-Peer Models",
        "Understanding Network Protocols",
      ]
    },
    {
      topic: "Networking Devices",
      weight: "15%",
      objectives: [
        "Network Interface Cards (NICs)",
        "Hubs, Switches, and Routers",
        "Access Points and Wireless Controllers",
        "Firewalls and Gateways",
        "Modems vs Routers",
      ]
    },
    {
      topic: "OSI & TCP/IP Models",
      weight: "10%",
      objectives: [
        "Introduction to OSI 7-Layer Model",
        "OSI Layers Explained (with Examples)",
        "TCP/IP Model Overview",
        "Mapping OSI vs TCP/IP Layers",
        "Encapsulation and Decapsulation Process",
      ]
    },
    {
      topic: "IP Addressing & Subnetting",
      weight: "10%",
      objectives: [
        "What is an IP Address?",
        "IPv4 Addressing & Classes (A, B, C)",
        "Private vs Public IPs",
        "Subnetting Basics and CIDR Notation",
        "IPv6 Fundamentals",
        "Default Gateway, Broadcast, and Loopback Addresses",
      ]
    },
    {
        topic: "Network Configuration & Troubleshooting",
        weight: "10%",
        objectives: [
          "DHCP: Dynamic IP Assignment",
          "DNS: Domain Name System",
          "NAT: Network Address Translation",
          "Basic Command-Line Tools",
          "Common Network Troubleshooting Steps",
          "Interpreting Network Diagrams",
        ]
    },
    {
      topic: "Wireless Networking Basics",
      weight: "10%",
      objectives: [
        "Wi-Fi Standards (802.11 a/b/g/n/ac/ax)",
        "Frequency Bands: 2.4GHz vs 5GHz",
        "SSID, Channels, and Encryption (WEP/WPA/WPA2/WPA3)",
        "Wireless Security Concerns",
      ]
    },
    {
      topic: "Network Security Fundamentals",
      weight: "10%",
      objectives: [
        "Firewalls & Packet Filtering",
        "VPN Basics",
        "IDS/IPS Overview",
        "Common Attacks: MITM, Spoofing, DoS/DDoS",
        "Security Best Practices",
      ]
    },
    {
      topic: "Hands-On Practice",
      weight: "10%",
      objectives: [
        "Setting Up a Basic Home Network",
        "Subnetting Practice with Visual Tools",
        "Using Packet Tracer (Cisco) or GNS3",
        "Simulating Network Traffic and Tracing Routes",
        "Creating & Interpreting a Network Diagram",
      ]
    },
    {
      topic: "Career and Certification Path",
      weight: "10%",
      objectives: [
        "Entry-Level Networking Roles",
        "Recommended Certifications",
        "Career Roadmap: Network Engineer, Analyst, Administrator",
        "Recommended Study Materials and Labs",
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
      "IT Networking Fundamentals",
      "Networking Fundamentals",
      "Exam Preparation"
    ]
  }
};

export default networkFundamentals;

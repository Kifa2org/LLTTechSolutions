// Exam Details - Extracted from PDF
 const advanceNetworking = {
  examCode: "advanceNetworking",
  examName: "Advance Networking",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Advanced Networking explores complex network design, implementation, and management, including advanced routing and switching protocols, network security, and performance optimization. Students learn to design and troubleshoot large-scale networks, preparing them for advanced networking roles.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Advanced Routing Protocols",
      weight: "10%",
      objectives: [
        "Recap: Static vs Dynamic Routing",
        "OSPF (Open Shortest Path First)",
        "EIGRP (Enhanced Interior Gateway Routing Protocol)",
        "BGP (Border Gateway Protocol)",
        "Route Redistribution and Policy Routing",
        "Troubleshooting Routing Protocols",
      ]
    },
    {
      topic: "VLANs, Trunking & Layer 2 Technologies",
      weight: "10%",
      objectives: [
        "VLAN Design and Best Practices",
        "VLAN Tagging (802.1Q)",
        "Inter-VLAN Routing",
        "Spanning Tree Protocol (STP, RSTP, MSTP)",
        "EtherChannel / Link Aggregation",
        "MAC Address Table Management & Troubleshooting",
      ]
    },
    {
      topic: "Network Security & Access Control",
      weight: "10%",
      objectives: [
        "AAA (Authentication, Authorization, Accounting)",
        "RADIUS vs TACACS+",
        "ACLs (Standard, Extended, Named ACLs)",
        "Port Security and Storm Control",
        "802.1X Authentication",
        "Secure Network Design Principles",
      ]
    },
    {
      topic: "Enterprise Network Design",
      weight: "10%",
      objectives: [
        "Hierarchical Network Design Model",
        "Redundancy: HSRP, VRRP, GLBP",
        "QoS (Quality of Service)",
        "Traffic Classification, Queuing, Shaping",
        "IP SLA and Network Performance Monitoring",
        "Multicast Routing (PIM, IGMP)",
        "MPLS Basics",
      ]
    },
    {
        topic: "Virtualization & Cloud Networking",
        weight: "10%",
        objectives: [
          "Introduction to SDN (Software Defined Networking)",
          "Cisco ACI and VMware NSX",
          "Network Function Virtualization (NFV)",
          "Overlay Networks (VXLAN, GRE)",
          "Cloud Networking (AWS, Azure, GCP)",
          "Hybrid Network Architectures",
        ]
    },
    {
      topic: "IPv6 Deep Dive",
      weight: "10%",
      objectives: [
        "IPv6 Addressing & Configuration",
        "Dual Stack and Tunneling Mechanisms",
        "IPv6 Routing (OSPFv3, EIGRP for IPv6)",
        "Neighbor Discovery Protocol (NDP)",
        "DHCPv6 and SLAAC",
        "IPv6 Security Considerations",
      ]
    },
    {
      topic: "Advanced Wireless Networking",
      weight: "10%",
      objectives: [
        "Enterprise Wireless Architecture",
        "Wireless Standards (802.11n/ac/ax)",
        "Wireless LAN Controllers (WLC)",
        "Roaming, RF Interference, and Site Surveys",
        "Wireless Security: WPA3, 802.1X, RADIUS",
        "Troubleshooting Wireless Networks",
      ]
    },
    {
      topic: "Automation & Network Programmability",
      weight: "10%",
      objectives: [
        "Introduction to Network Automation",
        "Python for Network Engineers",
        "REST APIs and Postman",
        "Cisco DNA Center and API Integrations",
        "Ansible for Network Configuration",
        "Network Monitoring with SNMP, NetFlow, and Syslog",
      ]
    },
    {
      topic: "Labs & Simulations",
      weight: "10%",
      objectives: [
        "GNS3 and EVE-NG Setup",
        "Building OSPF/EIGRP/BGP Topologies",
        "VLANs, STP, and Redundancy Scenarios",
        "Advanced ACL & QoS Configuration",
        "Automating Switch Config with Python & Ansible",
        "Monitoring & Logging with SNMP and Syslog Servers",
      ]
    },
    {
      topic: "Career & Certification Path",
      weight: "10%",
      objectives: [
        "Advanced Job Roles in Networking",
        "Recommended Certifications",
        "Resume & Lab Portfolio Building",
        "Interview Prep: Real-World Scenarios",
        "Learning Resources, Labs, and Communities",
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
      "CCNP Enterprise",
      "CCNP Security",
      "Exam Preparation"
    ]
  }
};

export default advanceNetworking;

// Exam Details - Extracted from PDF
 const networkArchitecture = {
  examCode: "networkArchitecture",
  examName: "Network Architecture",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Network Architecture teaches students to design and implement scalable, secure, and efficient network infrastructures, covering topics such as topology, protocols, and network devices. This course helps professionals develop the skills to plan, build, and manage complex networks that meet organizational needs.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "Introduction to Network Architecture",
      weight: "10%",
      objectives: [
        "What is Network Architecture?",
                "Evolution of Networking (Legacy to Modern)",
                "Types of Networks (LAN, WAN, MAN, PAN)",
                "Role of Network Architecture in IT Infrastructure",
                "Client-Server vs Peer-to-Peer Models"
      ]
    },
    {
      topic: "Network Models & Design Principles",
      weight: "10%",
      objectives: [
        "OSI and TCP/IP Models Overview",
                "Layered Network Architecture",
                "Design Principles: Scalability, Availability, Performance",
                "Modular Network Design",
                "Redundancy and Fault Tolerance Concepts"
      ]
    },
    {
      topic: "Network Components",
      weight: "10%",
      objectives: [
        "Routers, Switches, Hubs, and Bridges",
                "Firewalls, Load Balancers, and Gateways",
                "Wireless Access Points (WAP) and Controllers",
                "Network Interface Cards (NICs)",
                "Cabling, Transceivers, and Patch Panels"
      ]
    },
    {
      topic: "IP Addressing & Subnetting",
      weight: "10%",
      objectives: [
        "IPv4 and IPv6 Addressing",
                "Public vs Private IPs",
                "Subnetting and Supernetting",
                "CIDR Notation and VLSM",
                "IP Planning and Allocation Strategies"
      ]
    },
    {
        topic: "Network Topologies",
        weight: "10%",
        objectives: [
          "Physical vs Logical Topologies",
                  "Bus, Star, Ring, Mesh, Hybrid",
                  "Enterprise Campus Topology",
                  "Data Center Topologies (Spine-Leaf, Clos)",
                  "Topology Selection Criteria"
        ]
    },
    {
      topic: "WAN & Internet Connectivity",
      weight: "10%",
      objectives: [
        "Leased Lines, MPLS, Metro Ethernet",
                "Broadband: DSL, Cable, Fiber",
                "VPN Architectures and Tunnels",
                "SD-WAN and Hybrid WAN",
                "Cloud Connectivity (AWS Direct Connect, Azure ExpressRoute)"
      ]
    },
    {
      topic: "Wireless Network Architecture",
      weight: "10%",
      objectives: [
        "Wi-Fi Standards (802.11 a/b/g/n/ac/ax)",
                "SSID, Channels, and Frequencies",
                "WLAN Controllers and Centralized Management",
                "Enterprise Wireless Design",
                "Security in Wireless Architecture"
      ]
    },
    {
      topic: "Network Virtualization & Segmentation",
      weight: "10%",
      objectives: [
         "VLANs and Trunking",
                "VXLAN and Network Overlays",
                "Subnets and Broadcast Domains",
                "Microsegmentation (Zero Trust)",
                "Network Function Virtualization (NFV)"
      ]
    },
    {
      topic: "High Availability & Redundancy",
      weight: "10%",
      objectives: [
         "Redundant Links and Devices",
                 "Spanning Tree Protocol (STP/RSTP/MSTP)",
                 "First Hop Redundancy Protocols (HSRP, VRRP, GLBP)",
                 "Load Balancing Techniques",
                 "Failover Planning and Testing"
      ]
    },
    {
      topic: "Network Design Case Studies & Labs",
      weight: "10%",
      objectives: [
         "Designing a Small Office Network",
                 "Enterprise Campus Network Design",
                 "Data Center Network Design (Spine-Leaf)",
                 "Secure Branch Office Architecture",
                 "Hands-on Lab: Packet Tracer / GNS3 Network Design"
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
      "Cisco CCDA",
      "Designing Cisco Enterprise Networks",
      "Google Cloud Network Architecture"
    ]
  }
};

export default networkArchitecture;

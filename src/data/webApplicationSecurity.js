// Exam Details - Extracted from PDF
 const webApplicationSecurity = {
  examCode: "webApplicationSecurity",
  examName: "Web Application Security",
  duration: "105 minutes",
  questions: 52,
  passingScore: "70%",
  price: "$400 USD",

  examDescription: {
    overview: "Web Application Security teaches students to identify and mitigate vulnerabilities in web applications, covering topics such as injection attacks, cross-site scripting (XSS), and authentication threats. This course helps developers and security professionals protect web applications from common attacks and ensure data security.",
    targetAudience: "Networking and security professionals responsible for day-to-day management of FortiGate devices"
  },

  examTopics: [
    {
      topic: "(Module - API Pentesting) - API Basics & Reconnaissance",
      weight: "10%",
      objectives: [
                  "Testing for Broken Authentication",
                       "JWT Attacks: Token Tampering & Signature Bypass",
                       "OAuth Misconfiguration & Flows Testing",
                       "IDOR (Insecure Direct Object References)",
                       "Privilege Escalation via API Calls"
      ]
    },
    {
      topic: "(Module - API Pentesting) - Authentication & Authorization Attacks",
      weight: "10%",
      objectives: [
        "Defining Audit Objectives",
               "Scope, Boundaries, and Limitations",
               "Risk Assessment and Prioritization",
               "Understanding Business and IT Environment",
               "Creating an Audit Plan & Timeline"
      ]
    },
    {
      topic: "(Module - API Pentesting) - Input Validation & Injection Testing",
      weight: "10%",
      objectives: [
         "Testing for SQL Injection in APIs",
                "Command Injection & OS Injection via Parameters",
                "Mass Assignment Vulnerabilities",
                "XXE (XML External Entity) & SSRF Attacks",
                "Testing Error Handling & Information Disclosure"
      ]
    },
    {
      topic: "(Module - API Pentesting) - Advanced Attacks & Automation",
      weight: "10%",
      objectives: [
        "Rate Limiting Bypass and DoS Attacks",
                "API Fuzzing with ffuf and Burp Intruder",
                "Pentesting GraphQL APIs",
                "Using Postman, Burp Suite, and Python for Automation",
                "Writing Reports & Mitigation Best Practices"
      ]
    },
    {
        topic: "(Module - Exploiting Vulnerabilities) - Introduction to Web Exploitation",
        weight: "10%",
        objectives: [
          "Understanding the Web Application Attack Surface",
                  "HTTP Basics and Request Manipulation",
                  "Understanding OWASP Top 10 Vulnerabilities",
                  "Burp Suite for Intercepting and Modifying Requests",
                  "Setting Up a Web Exploitation Lab (DVWA, Juice Shop, BWAPP)"
        ]
    },
    {
      topic: "(Module - Exploiting Vulnerabilities) - Input-Based Attacks",
      weight: "10%",
      objectives: [
         "SQL Injection (Classic, Blind, Error-based)",
                "Cross-Site Scripting (Stored, Reflected, DOM-Based)",
                "Command Injection and Remote Code Execution (RCE)",
                "HTML Injection and Open Redirects",
                "Cross-Site Request Forgery (CSRF) Exploitation"
      ]
    },
    {
      topic: "(Module - Exploiting Vulnerabilities) - Authentication and Access Control Exploits",
      weight: "10%",
      objectives: [
          "Broken Authentication Exploits (Session Hijacking, Weak Passwords)",
                "Bypassing Login Portals and Rate Limiting",
                "Exploiting Insecure Direct Object References (IDOR)",
                "Privilege Escalation through Role Manipulation",
                "JWT and OAuth Exploitation Techniques"
      ]
    },
    {
      topic: "(Module - Exploiting Vulnerabilities) - File and Business Logic Exploits",
      weight: "10%",
      objectives: [
        "File Upload Vulnerabilities (Web Shells, MIME Bypass)",
                "Path Traversal and Local File Inclusion (LFI)",
                "Exploiting Insecure Deserialization in Web Apps",
                "Business Logic Flaws (Coupon Abuse, Checkout Manipulation)",
                "Practical Exploitation Labs and CTF Challenges"
      ]
    }
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
      "OWASP WebGoat",
      "Web Application Hacking",
      "Cross-Site Scripting (XSS)"
    ]
  }
};

export default webApplicationSecurity;

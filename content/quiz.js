export const QUESTIONS_PER_ROUND = 5;

export const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Transfer Machine Language",
      "Hyperlink and Text Management Logic",
      "Home Tool Markup Language",
    ],
    answer: 0,
    explanation:
      "HyperText Markup Language is the standard language used to structure the content of web pages.",
  },
  {
    question: "What is CSS mainly used for?",
    options: [
      "Storing user data on a server",
      "Controlling how a page looks: colours, fonts and layout",
      "Sending emails from a website",
      "Encrypting a connection",
    ],
    answer: 1,
    explanation:
      "CSS (Cascading Style Sheets) controls the look and layout of a web page.",
  },
  {
    question:
      "Which language is the standard way to make web pages interactive in the browser?",
    options: ["SQL", "JavaScript", "Markdown", "Photoshop"],
    answer: 1,
    explanation:
      "JavaScript runs in the browser and powers things like menus, forms and animations.",
  },
  {
    question: "Which is the safest password habit?",
    options: [
      "Using one long password for every account",
      "Using your name and birth year",
      "A different long passphrase for each account, kept in a password manager",
      "Changing one letter each time you update it",
    ],
    answer: 2,
    explanation:
      "Unique, long passwords mean one leaked password cannot unlock your other accounts.",
  },
  {
    question: "What is phishing?",
    options: [
      "A way of making a network faster",
      "A fake message or website that tricks you into giving away private information",
      "A programming technique",
      "A type of storage device",
    ],
    answer: 1,
    explanation:
      "Phishing tries to trick you into sharing passwords or payment details. Check the sender and the link before you click.",
  },
  {
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Remote Link",
      "Unified Router Line",
      "User Request Location",
    ],
    answer: 0,
    explanation:
      "A URL is the full web address of a page, such as https://example.com/about.",
  },
  {
    question: "Which HTML tag creates a clickable link?",
    options: ["<a>", "<p>", "<img>", "<div>"],
    answer: 0,
    explanation:
      "The <a> (anchor) tag makes a link. Its href attribute says where the link goes.",
  },
  {
    question: 'What does "responsive design" mean?',
    options: [
      "A site that answers emails quickly",
      "A site whose layout adapts to different screen sizes",
      "A site that loads only on fast connections",
      "A site with lots of animations",
    ],
    answer: 1,
    explanation:
      "A responsive site works well on phones, tablets and desktops, usually using flexible layouts and CSS.",
  },
  {
    question: "What does an API let one piece of software do?",
    options: [
      "Make a screen brighter",
      "Talk to another piece of software in an agreed way",
      "Store passwords in plain text",
      "Speed up an internet cable",
    ],
    answer: 1,
    explanation:
      "An API (Application Programming Interface) is a set of rules for requesting data or actions from other software.",
  },
  {
    question: "What is a domain name?",
    options: [
      "A type of web server",
      "A password for a website",
      "A readable address, such as example.com, that points to a website",
      "A programming language",
    ],
    answer: 2,
    explanation:
      "Domain names are easier to remember than the numeric addresses computers use.",
  },
  {
    question: 'What does the "front end" of a website mean?',
    options: [
      "The database where data is stored",
      "The part people see and interact with in their browser",
      "The physical server in a data centre",
      "The company's front office",
    ],
    answer: 1,
    explanation:
      "The front end is everything the visitor sees and uses: layout, text, buttons and forms.",
  },
  {
    question: "Which of these is used to work with databases?",
    options: ["CSS", "SQL", "HTML", "JPEG"],
    answer: 1,
    explanation:
      "SQL (Structured Query Language) is used to read and change data in many databases.",
  },
  {
    question: "What is Git mainly used for?",
    options: [
      "Compressing photos",
      "Tracking changes to code and helping teams work on it together",
      "Hosting email accounts",
      "Designing logos",
    ],
    answer: 1,
    explanation:
      "Git records the history of a project, so you can go back to earlier versions and combine work from many people.",
  },
  {
    question: "What does two-factor authentication (2FA) add to your login?",
    options: [
      "A second password that is easier to guess",
      "A second proof that it is you, such as a code from your phone",
      "A faster login",
      "A backup of your files",
    ],
    answer: 1,
    explanation:
      "Even if someone steals your password, they still need your second factor to get in.",
  },
  {
    question: "What does a firewall do?",
    options: [
      "Cools down a computer",
      "Filters network traffic to block unwanted connections",
      "Backs up your files every night",
      "Makes websites load faster",
    ],
    answer: 1,
    explanation:
      "A firewall decides which connections are allowed in and out of a device or network.",
  },
  {
    question: 'What does "https" at the start of a web address tell you?',
    options: [
      "The site is guaranteed to be honest",
      "The connection between you and the site is encrypted",
      "The site was built with JavaScript",
      "The site is free to use",
    ],
    answer: 1,
    explanation:
      "https encrypts the connection, but fake websites can use it too, so still check the address carefully.",
  },
  {
    question: "What is malware?",
    options: [
      "A kind of keyboard",
      "Software designed to damage, spy on or steal from a device",
      "A tool for backing up files",
      "A Wi-Fi password",
    ],
    answer: 1,
    explanation: "Viruses, spyware and ransomware are all types of malware.",
  },
  {
    question: "What is the safest approach on public Wi-Fi?",
    options: [
      "Log in to your bank freely, because Wi-Fi is always safe",
      "Share files with anyone nearby",
      "Avoid sensitive logins unless the connection is protected, for example with a VPN",
      "Turn off all updates",
    ],
    answer: 2,
    explanation:
      "Other people on an open network may be able to watch unprotected traffic, so keep sensitive activity for trusted connections.",
  },
  {
    question: "What does ransomware do?",
    options: [
      "Speeds up your computer",
      "Locks or encrypts your files and demands payment to unlock them",
      "Deletes spam emails",
      "Updates your software",
    ],
    answer: 1,
    explanation:
      "Regular offline backups are the best protection against ransomware.",
  },
  {
    question: "Why are software updates important?",
    options: [
      "They fix security holes and bugs",
      "They make your device use more data",
      "They only change the icons",
      "They are not important",
    ],
    answer: 0,
    explanation:
      "Attackers often target known weaknesses that updates have already fixed.",
  },
  {
    question: "What is social engineering?",
    options: [
      "Building social media apps",
      "Tricking people into giving away information or access",
      "Teaching engineering online",
      "Making a network faster",
    ],
    answer: 1,
    explanation:
      "Social engineering targets people instead of machines. Phishing is one example.",
  },
  {
    question: "What is an IP address?",
    options: [
      "A number that identifies a device on a network",
      "A kind of password",
      "A web browser",
      "A type of cable",
    ],
    answer: 0,
    explanation:
      "IP addresses let devices find and talk to each other on the internet and on local networks.",
  },
  {
    question: 'What does "the cloud" mean in everyday tech?',
    options: [
      "Weather data for apps",
      "Computers run by a provider on the internet, used to store data or run software",
      "A type of screen",
      "A special kind of Wi-Fi",
    ],
    answer: 1,
    explanation:
      "Instead of using only your own computer, you use a provider's servers, such as for file storage or hosting.",
  },
  {
    question: "Computers store and process information using what?",
    options: [
      "Binary: 0s and 1s",
      "Decimal digits only",
      "Letters from A to Z",
      "Colours",
    ],
    answer: 0,
    explanation:
      "Everything on a computer, including text, photos and video, is ultimately stored as binary.",
  },
  {
    question: "What does RAM do?",
    options: [
      "Permanently stores your photos",
      "Acts as short-term memory for the programs that are running",
      "Connects you to the internet",
      "Charges the battery",
    ],
    answer: 1,
    explanation:
      "RAM is fast, temporary memory. Storage such as an SSD keeps your files when the device is off.",
  },
  {
    question: 'What does "open source" software mean?',
    options: [
      "It is always free of bugs",
      "Its source code can be viewed by anyone, and is often free to change and share",
      "It only works online",
      "It can only be used by large companies",
    ],
    answer: 1,
    explanation:
      "Many popular tools, including Linux and Firefox, are open source.",
  },
  {
    question: "What is debugging?",
    options: [
      "Writing code faster",
      "Finding and fixing errors in code",
      "Deleting old files",
      "Making a website look better",
    ],
    answer: 1,
    explanation:
      'A "bug" is a mistake in a program. Debugging is the detective work of tracking it down and fixing it.',
  },
  {
    question: "What is an algorithm?",
    options: [
      "A step-by-step set of instructions for solving a problem",
      "A type of computer virus",
      "A kind of screen",
      "A programming language",
    ],
    answer: 0,
    explanation:
      "A recipe is a good everyday example: clear steps that lead to a result.",
  },
  {
    question: "What is a VPN mainly used for?",
    options: [
      "Making your screen larger",
      "Creating an encrypted connection that protects your traffic on the network",
      "Deleting your browsing history",
      "Downloading apps faster",
    ],
    answer: 1,
    explanation:
      "A VPN encrypts the link between your device and the VPN provider, which helps on untrusted networks.",
  },
  {
    question: "Which of these is a programming language?",
    options: ["Python", "PNG", "HTTP", "USB"],
    answer: 0,
    explanation:
      "Python is a popular, beginner-friendly language used for websites, data work and automation.",
  },
];

// STARTER ARTICLES. Read them, edit them, or replace them with your own.
//
// To add an article, copy one block below and change it. Newest articles are shown first (by date).
//   slug:     the web address of the article, for example "my-first-post" -> /blog/my-first-post
//             (use only lowercase letters, numbers and hyphens, and make each one different)
//   title, excerpt (the short summary on the list page), category, date ("YYYY-MM-DD"), author
//   category: Learning, Security or Business (each has its own colour)
//   art:      the illustration shown beside the article: roadmap, password, storefront or checklist
//             (if you leave it out, one is chosen from the category)
//   image:    OPTIONAL real photo instead of the illustration, for example "/blog/my-photo.jpg"
//             (save the photo in public/blog). Add imageAlt too, a short description of the photo.
//   body:     the article, as a list of pieces. Each piece is one of:
//               { type: "p", text: "A paragraph." }
//               { type: "h2", text: "A heading" }
//               { type: "ul", items: ["Bullet one", "Bullet two"] }
//               { type: "ol", items: ["Step one", "Step two"] }
//               { type: "callout", text: "A highlighted tip or warning." }
export const posts = [
  {
    slug: "how-to-start-learning-web-development",
    art: "roadmap",
    title: "How to start learning web development from zero",
    excerpt:
      "A simple, realistic roadmap for complete beginners: what to learn first, what to build, and how to avoid getting stuck.",
    category: "Learning",
    date: "2026-10-12",
    author: "Set-Time Digital Hub Academy",
    body: [
      {
        type: "p",
        text: "Web development can feel overwhelming at the start. There are hundreds of tools, and every video seems to recommend a different path. The good news is that you only need a handful of things to build real websites, and the order you learn them in matters more than the tools themselves.",
      },
      { type: "h2", text: "Step 1: Learn HTML" },
      {
        type: "p",
        text: "HTML gives a web page its structure: headings, paragraphs, images, links and forms. You can learn the basics in a few days. Build a plain page about yourself and open it in your browser.",
      },
      { type: "h2", text: "Step 2: Learn CSS" },
      {
        type: "p",
        text: "CSS controls how a page looks: colours, fonts, spacing and layout. Focus on the box model, flexbox and grid, then practise making your page look good on both a phone and a laptop.",
      },
      { type: "h2", text: "Step 3: Learn JavaScript" },
      {
        type: "p",
        text: "JavaScript makes pages interactive. Start with variables, functions, conditions, loops and arrays, then learn how to change a page when someone clicks a button. This is the step that takes the longest, so be patient with yourself.",
      },
      { type: "h2", text: "Step 4: Learn Git and put your work online" },
      {
        type: "p",
        text: "Git records the history of your code, and GitHub lets you store it online and share it. Publishing your projects also gives you something to show people.",
      },
      { type: "h2", text: "Build small projects as you go" },
      {
        type: "ul",
        items: [
          "A personal profile page",
          "A to-do list that saves your tasks",
          "A simple calculator",
          "A landing page for a made-up business",
        ],
      },
      {
        type: "callout",
        text: "Tip: after every lesson, build something small without copying the tutorial. Getting stuck and working your way out is where most of the learning happens.",
      },
      { type: "h2", text: "Only then, choose a framework" },
      {
        type: "p",
        text: "Tools such as React are popular and well worth learning, but they are much easier once you are comfortable with plain HTML, CSS and JavaScript.",
      },
      {
        type: "p",
        text: "A little practice every day beats a long session once a week. Thirty to sixty focused minutes daily, plus a mentor or classmates to ask when you are stuck, will take you further than you expect.",
      },
    ],
  },
  {
    slug: "five-password-habits-that-protect-you",
    art: "password",
    title: "Five password habits that actually protect you",
    excerpt:
      "Most account break-ins start with a weak or reused password. These five habits make you much harder to hack.",
    category: "Security",
    date: "2026-10-14",
    author: "Set-Time Digital Hub Academy",
    body: [
      {
        type: "p",
        text: "Most account takeovers do not involve clever hacking. Someone simply reuses a password that leaked from another website. A few simple habits make that far less likely.",
      },
      { type: "h2", text: "1. Use a different password for every account" },
      {
        type: "p",
        text: "If one website is breached, attackers try the same email and password on other sites. A unique password for each account means one leak cannot open the rest.",
      },
      { type: "h2", text: "2. Make passwords long" },
      {
        type: "p",
        text: "Length matters more than clever symbols. A passphrase made of several unrelated words is long, easier to remember and harder to guess than a short, complicated password.",
      },
      { type: "h2", text: "3. Let a password manager remember them" },
      {
        type: "p",
        text: "Nobody can remember dozens of unique passwords. A password manager creates and stores them for you, so you only need to remember one strong master password.",
      },
      { type: "h2", text: "4. Turn on two-factor authentication" },
      {
        type: "p",
        text: "Two-factor authentication asks for a second proof, such as a code from an authenticator app, when you log in. Even if someone steals your password, they still cannot get in. Start with your email, banking and social media accounts.",
      },
      { type: "h2", text: "5. Slow down before you click" },
      {
        type: "p",
        text: "Phishing messages pretend to come from your bank, a delivery company or a friend, and try to rush you into entering your password on a fake page. If a message creates panic, stop. Go to the website yourself instead of using the link, or contact the sender another way.",
      },
      {
        type: "callout",
        text: "Quick check: if you reuse any password right now, change it today, starting with your email account. Whoever controls your email can reset almost everything else.",
      },
    ],
  },
  {
    slug: "does-your-business-need-a-website",
    art: "storefront",
    title: "Does your small business need a website?",
    excerpt:
      "A good website is not about fancy design. Here is what your customers need to see, and what to put on it.",
    category: "Business",
    date: "2026-10-08",
    author: "Set-Time Digital Hub Academy",
    body: [
      {
        type: "p",
        text: "Many small businesses start on social media, and that can work well. But a website gives you something social pages cannot: a place you own, that people can find through search engines, and that makes your business look established.",
      },
      { type: "h2", text: "What every business website needs" },
      {
        type: "ul",
        items: [
          "A clear statement of what you do and who it is for, right at the top",
          "Your services or products, with honest descriptions",
          "Easy ways to contact you, such as a phone number, WhatsApp and a form",
          "Proof that you are trustworthy: testimonials, past work or certifications",
          "A design that works well on a phone, because many visitors will arrive on one",
        ],
      },
      { type: "h2", text: "Keep it fast and simple" },
      {
        type: "p",
        text: 'Visitors leave pages that load slowly or are hard to understand. Use compressed images, plain language and a clear next step on every page, such as "Request a quote" or "Call us".',
      },
      { type: "h2", text: "Think about security from day one" },
      {
        type: "p",
        text: "Even a small site should use HTTPS, keep its software updated, and protect any forms from spam. A hacked or defaced website damages trust quickly.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "ol",
        items: [
          "Write down who your customers are and what they ask you most often",
          "Collect good photos and a few customer testimonials",
          "Choose a simple structure: Home, Services, About and Contact",
          "Launch, then improve it as you learn what visitors actually use",
        ],
      },
      {
        type: "p",
        text: "If you would like help planning or building a website for your business, get in touch with us and tell us what you need.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-tech-program",
    art: "checklist",
    title: "What to look for when choosing a tech program",
    excerpt:
      "Not all tech courses are equal. Use this checklist to compare programs before you pay for one.",
    category: "Learning",
    date: "2026-10-02",
    author: "Set-Time Digital Hub Academy",
    body: [
      {
        type: "p",
        text: "Choosing a tech program is a big commitment of time and money. Before you enrol anywhere, including with us, ask these questions.",
      },
      { type: "h2", text: "Does the program teach by building?" },
      {
        type: "p",
        text: "Reading and watching are not enough. Look for programs where you build real projects, get feedback on your work, and finish with something you can show people.",
      },
      { type: "h2", text: "Who teaches, and how much support do you get?" },
      {
        type: "p",
        text: "Find out who the instructors are, how big the classes are, and how you can ask for help when you are stuck. Learning alone is slow, and good support makes a big difference.",
      },
      { type: "h2", text: "Is the curriculum clear?" },
      {
        type: "p",
        text: "You should be able to see what you will learn week by week, what you need to know beforehand, and how long the program takes. Vague promises are a warning sign.",
      },
      { type: "h2", text: "Are the costs and the outcomes honest?" },
      {
        type: "ul",
        items: [
          "The full fee, what it covers and any payment plans are stated clearly",
          "The program does not promise a guaranteed job",
          "You can see examples of what past students built",
          "There is a clear policy on refunds and missed classes",
        ],
      },
      {
        type: "callout",
        text: "Be careful with any program that guarantees a job or an income. Nobody can honestly promise that, because it depends on your effort, the job market and many other things.",
      },
      { type: "h2", text: "Does it fit your life?" },
      {
        type: "p",
        text: "Check the schedule, whether classes are online or in person, and how many hours you will need each week. The best program is the one you can actually finish.",
      },
    ],
  },
];

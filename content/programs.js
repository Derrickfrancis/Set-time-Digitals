// The programs shown on the Home page and the Programs page.
//
//   slug:     the short name used in links (lowercase letters, numbers and hyphens)
//   name:     the program's name
//   summary:  one or two sentences describing the program (edit these to match your real teaching)
//   art:      which illustration to show: frontend, backend, uiux, fullstack, marketing, data,
//             bootcamp, graphics or cybersecurity
//   image:    OPTIONAL real photo instead of the illustration, for example "/programs/front-end.jpg"
//             (save the photo in public/programs)
//   duration: OPTIONAL, for example "12 weeks". Only shown when you fill it in.
//   level:    OPTIONAL, for example "Beginner". Only shown when you fill it in.
//   includes: OPTIONAL list of other program slugs that this program contains (used by Full Stack)
export const programs = [
  {
    slug: "front-end",
    name: "Front End",
    art: "frontend",
    summary:
      "Build the parts of a website that people see and use: layouts, styling and interactivity.",
  },
  {
    slug: "back-end",
    name: "Back End",
    art: "backend",
    summary:
      "Learn how websites and apps work behind the scenes: servers, databases and the logic that connects them.",
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    art: "uiux",
    summary:
      "Design interfaces that look good and are easy to use, from research and wireframes to polished screens.",
  },
  {
    slug: "full-stack",
    name: "Full Stack",
    art: "fullstack",
    summary:
      "The complete path. Combines Front End, Back End and UI/UX so you can design, build and launch a whole product.",
    includes: ["front-end", "back-end", "ui-ux"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    art: "marketing",
    summary:
      "Learn how businesses find and win customers online through social media, content, search and advertising.",
  },
  {
    slug: "data-analysis",
    name: "Data Analysis",
    art: "data",
    summary:
      "Turn raw data into answers: clean it, analyse it and present clear insights that people can act on.",
  },
  {
    slug: "summer-coding-bootcamp",
    name: "Summer Coding Bootcamp",
    art: "bootcamp",
    summary:
      "A focused six-week introduction to coding, designed to take you from curious to building your first projects.",
    duration: "6 weeks",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    art: "graphics",
    summary:
      "Create logos, social media graphics and brand visuals that communicate clearly and look professional.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    art: "cybersecurity",
    summary:
      "Learn how to protect systems, data and people from online threats, and how attackers think.",
  },
];

// PLACEHOLDER services. Replace with the services the institute really offers to businesses.
//
//   slug:    the short name used in links (lowercase letters, numbers and hyphens)
//   name:    the service's name
//   summary: one or two sentences describing it
//   points:  a short list of what is included
//   art:     which illustration to show: devices, cybersecurity or support
//            (you can also use any other name from components/ui/Art.js)
//   image:   OPTIONAL real photo instead of the illustration, for example "/services/web.jpg"
//            (save the photo in public/services)
export const services = [
  {
    slug: "web-app-development",
    name: "Web and app development",
    art: "devices",
    summary:
      "Websites, web applications and portals built around how your business works.",
    points: [
      "Business websites",
      "Web applications and portals",
      "Maintenance and support",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    art: "cybersecurity",
    summary: "Find and fix weaknesses before attackers do.",
    points: [
      "Security assessments",
      "Secure setup and hardening",
      "Staff awareness training",
    ],
  },
  {
    slug: "it-consulting",
    name: "IT consulting and support",
    art: "support",
    summary:
      "Practical advice and hands-on help to keep your technology working.",
    points: ["Technology planning", "Systems setup", "Ongoing support"],
  },
];

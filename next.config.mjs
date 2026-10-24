const isProduction = process.env.NODE_ENV === "production";

// Content-Security-Policy: a list of rules telling the browser what the site may load and do.
// Anything not allowed here is blocked, even if an attacker managed to put it on a page.
//   default-src 'self'      by default, only load things from our own site
//   script-src / style-src  our own files, plus the small inline pieces Next.js adds itself
//   img-src                 our own images (data: and blob: are used for small built-in images)
//   media-src 'self'        videos must be files on our own site
//   frame-src               the only outside page we allow inside ours is YouTube's privacy-friendly player
//   connect-src 'self'      the page may only send data back to our own site
//   object-src 'none'       no plugins
//   base-uri, form-action   stops attackers redirecting links and forms to another site
//   frame-ancestors 'none'  no other website may put ours inside a frame (clickjacking)
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Set CSP_MODE=report-only in your hosting settings to see problems in the browser console
// WITHOUT blocking anything. Leave it unset to enforce the policy.
const cspHeaderName =
  process.env.CSP_MODE === "report-only"
    ? "Content-Security-Policy-Report-Only"
    : "Content-Security-Policy";

// Headers sent with every response. They tell the browser to be stricter.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // The policy is only sent on the live site. The development server needs extra freedom to work.
  ...(isProduction
    ? [{ key: cspHeaderName, value: contentSecurityPolicy }]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  poweredByHeader: false, // stops advertising "X-Powered-By: Next.js"
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

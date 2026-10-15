import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: {
    default: `${site.name} | Tech training and solutions`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}document.documentElement.setAttribute("data-js","1")})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className="antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-bg text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

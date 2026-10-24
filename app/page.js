import Hero from "@/components/home/Hero";
import TwoPaths from "@/components/home/TwoPaths";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Gallery from "@/components/home/Gallery";
import Quiz from "@/components/home/Quiz";
import CallToAction from "@/components/home/CallToAction";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: site.name,
          url: site.url,
          description: site.description,
          logo: `${site.url}/set-time-logo-light.png`,
        }}
      />
      <Hero />
      <TwoPaths />
      <ProgramsPreview />
      <HowItWorks />
      <Gallery />
      <Quiz />
      <CallToAction />
    </>
  );
}

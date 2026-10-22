import Hero from "@/components/home/Hero";
import TwoPaths from "@/components/home/TwoPaths";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Gallery from "@/components/home/Gallery";
import Quiz from "@/components/home/Quiz";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
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

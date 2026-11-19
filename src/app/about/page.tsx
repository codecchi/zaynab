import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { display } from "@/lib/content";
import { localTitle, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { Accent } from "@/components/ui/section-heading";
import { ProfileIntro } from "@/components/sections/about/profile-intro";
import { Credentials } from "@/components/sections/about/credentials";
import { ExperienceSection } from "@/components/sections/about/experience";
import { AboutExpertise, Philosophy, VisionMission } from "@/components/sections/about/expertise-philosophy";
import { Recognition } from "@/components/sections/about/recognition";
import { CtaBand } from "@/components/sections/cta-band";

const name = display(profile.fullName);

export const metadata: Metadata = pageMetadata({
  title: "Profile & Experience",
  description: `The professional background, qualifications, experience and approach of ${name ?? "our lead consultant"} — ${localTitle()} for tax, compliance and business advisory.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Professional Profile"
        title={
          <>
            Integrity, experience <Accent>& professional care.</Accent>
          </>
        }
        description="The background, qualifications and principles behind every engagement — so you know exactly who you are trusting with your tax and compliance matters."
      />
      <ProfileIntro />
      <Credentials />
      <ExperienceSection />
      <AboutExpertise />
      <Philosophy />
      <VisionMission />
      <Recognition />
      <CtaBand
        title="Ready to Discuss Your Tax Matters?"
        description="Book a confidential consultation to talk through your situation and the right next steps."
      />
    </>
  );
}

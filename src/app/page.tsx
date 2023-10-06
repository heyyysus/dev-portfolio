import Image from 'next/image'
import SlotText from './_components/SlotText'
import { AboutSection } from './_components/aboutSection'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LandingSection } from './_components/landingSection';
import { ExperienceSection } from './_components/experienceSection';

export default function Home() {
  return (
    <main className="flex flex-col justify-space-between">
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  )
}

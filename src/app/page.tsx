import Image from 'next/image'
import SlotText from './_components/SlotText'
import { AboutSection } from './_components/aboutSection'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LandingSection } from './_components/landingSection';

export default function Home() {
  return (
    <main className="flex flex-col justify-space-between">
      <LandingSection />
      <AboutSection />
    </main>
  )
}

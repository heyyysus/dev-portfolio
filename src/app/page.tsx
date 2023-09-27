import Image from 'next/image'
import SlotText from './_components/SlotText'
import { AboutSection } from './_components/aboutSection'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <main className="flex flex-col justify-space-between">
      <div className='text-2xl xl:text-5xl 2xl:text-5xl lg:text-4xl md:text-3xl " font-bold text-white font-sans h-[100vh] p-24'>
        <div className='flex flex-row content-center items-center'>
          <div className='mr-40'>
            <p className='mb-5 text-xl font-light animate-fadeInFast'>
              Hello, my name is
            </p>
            <p className='mb-5 text-[color:#9badcf] text-7xl animate-fadeIn'>
              Jesus Velarde
            </p>
            <p className='animate-fadeInSlow'>
              And I&apos;m a <span className='text-green'>Full-Stack Developer</span>
            </p>

          <div className='flex flex-row content-center items-center mt-10 animate-fadeInSlow text-grey'>
            <a href='https://github.com/heyyysus' className='hover:text-white transition-color mr-5'>
              <GitHubIcon sx={{
                fontSize: 50,
              }}  />
            </a>
            <a href='https://www.linkedin.com/in/jesus-velarde-arvayo-117958207/' className='hover:text-white transition-color pt-1.5'>
              <LinkedInIcon sx={{
                fontSize: 60,
              }}  />
            </a>
          </div>

          </div>
          <div className='flex flex-col justify-center content-center animate-fadeInSlow'>
            <div className='rounded-full overflow-hidden'>
              <Image 
                src={'/images/linkedin.jpeg'}
                alt={''} 
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </main>
  )
}

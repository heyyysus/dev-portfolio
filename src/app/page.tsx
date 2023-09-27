import Image from 'next/image'
import SlotText from './_components/SlotText'

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
          </div>
          <div className='flex flex-col justify-center content-center'>
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
      <div className='flex flex-row justify-center items-center bg-white h-[100vh] w-full'>
        <div className='flex flex-row justify-center items-center content-center'>
          <div className='font-sans w-[700px] h-fit p-10 bg-blue-dark rounded-md mr-5 pb-20'>
            <h1 className='text-2xl font-bold text-white mb-5'>About Me</h1>
            <p className='text-base text-grey font-mono'>
              I&apos;m a Full-Stack Developer with a passion for creating
              beautiful and functional web applications. I&apos;m currently
              in my 4th year studying Computer Science at the 
              University of California - Santa Barbara. 
            </p>
            <p className='text-base text-grey font-mono mt-4'>
              Outside of school, I develop web applications for clients and work on personal projects.
            </p>
            <p className='text-base text-grey font-mono mt-4'>
              I am most familiar with the following technologies:
            </p>
            {/** 2 column grid of text elements */}
            <div className='grid grid-cols-2 gap-4 mt-4 w-4/6 text-green'>
              <span className='text-base font-mono'>React</span>
              <span className='text-base font-mono'>Typescript/Javascript</span>
              <span className='text-base font-mono'>Python</span>
              <span className='text-base font-mono'>SQL</span>
              <span className='text-base font-mono'>Express.js</span>
              <span className='text-base font-mono'>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

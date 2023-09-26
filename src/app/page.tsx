import Image from 'next/image'
import SlotText from './_components/SlotText'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-space-between p-24">
      <div className='text-2xl xl:text-5xl 2xl:text-5xl lg:text-4xl md:text-3xl " font-bold text-white font-sans '>
        <p className='mb-5 text-xl font-light'>
          Hello, my name is
        </p>
        <p className='mb-5 text-[color:#9badcf] text-7xl'>
          Jesus Velarde
        </p>
        <p className=''>
          And I'm a <span className='text-green'>Full-Stack Developer</span>
        </p>
      </div>
    </main>
  )
}

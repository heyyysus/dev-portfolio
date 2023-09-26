import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-space-between p-24">
      <div className='max-w-xl'>
        <p className='text-4xl font-bold text-white font-sans mb-2'>
          Hello, I'm <span className='text-[color:#9badcf]'>Jesus Velarde</span>
        </p>
        <p className='text-4xl font-bold text-white font-sans'>
          And I'm a <span className='text-green'>Full-Stack Developer</span>
        </p>
      </div>
    </main>
  )
}

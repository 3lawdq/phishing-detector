// /app/team/page.tsx

import Image from 'next/image'

const teamMembers = [
  {
    name: 'Hessah Nasser Alajmi',
    id: '444925864',
    image: '/hacker-character.png', // 👈 غيّر المسار بما يناسب اسم الصورة التي ستضيفها
  },
  {
    name: 'Reema Mohammed Alquraini',
    id: '444925913',
    image: '/hacker-character.png',
  },
  {
    name: 'Farah Zaid Alfayadh',
    id: '444925794',
    image: '/hacker-character.png',
  },
  {
    name: 'Muneerah Faisal Bin Hasher',
    id: '444925687',
    image: '/hacker-character.png',
  },
  {
    name: 'Worood Waleed Alshammari',
    id: '444925619',
    image: '/hacker-character.png',
  },
  {
    name: 'Razan Fawaz Albogami',
    id: '444925961',
    image: '/hacker-character.png',
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#d9ebff] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f49e0b]">Our Team</h1>
        <div className="mt-4">
          <span className="inline-block bg-[#021e4b] text-white px-4 py-2 rounded-full text-sm font-medium">Home &nbsp;›&nbsp; Our Team</span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border-2 border-blue-300 text-center p-4 hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={220}
              height={220}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#0a0a0a]">{member.name}</h3>
            <p className="text-blue-800 font-medium">{member.id}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

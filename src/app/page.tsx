import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#f4f8ff] min-h-screen px-6 py-16">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text section */}
        <div className="flex-1 text-center lg:text-left">
          <h5 className="text-blue-700 text-sm font-bold uppercase tracking-widest">
            Phishing Test
          </h5>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] leading-tight mt-2">
            Can you tell when <br /> you&apos;ve been phished?
          </h1>

          <p className="mt-6 text-blue-800 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
            Phishing attacks attempt to trick unsuspecting users into revealing their personal or financial information, often by mimicking content from well-known and trusted companies. <br />
            With the help of artificial intelligence, phishing attacks have become more sophisticated, personalized, and widespread.
          </p>

          <p className="mt-4 text-sm text-blue-900 font-semibold">
            Can you tell if content is real or fake?
          </p>

          <div className="mt-6">
            <span className="text-3xl font-extrabold text-orange-500">18K+</span>
            <p className="text-sm text-blue-800">Participant in the game</p>
          </div>
        </div>

        {/* Image section */}
        <div className="flex-1 text-center">
          <Image
            src="/hacker-character.png" // ✅ غيّر اسم الصورة حسب ما ستسميه
            alt="Phishing attacker"
            width={400}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}

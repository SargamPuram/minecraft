import { Pickaxe } from "@/components/pickaxe"
import { ChapterScroll } from "@/components/chapter-scroll"
import { MineReveal } from "@/components/mine-reveal"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#F4EAD5] font-minecraft overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dirt_background.png')] bg-repeat opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <Image
              src="/images/enchanted_book.png"
              alt="Enchanted Book"
              width={200}
              height={200}
              className="mx-auto mb-6 pixelated"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FFD700] animate-glow">
            <span className="text-[#6A0DAD]">📖</span> The Redstone Chronicles
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-[#3DDC97]">My OSPP 2025 Quest</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Welcome, brave adventurer! Embark on a journey through my proposal for the Open Source Promotion Plan 2025.
          </p>

          <div className="flex justify-center space-x-4">
            <Button className="bg-[#B22222] hover:bg-[#B22222]/80 text-white border-2 border-[#6A0DAD] px-8 py-6 text-xl">
              <Link href="#chapters">📜 Begin Your Quest</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="w-10 h-10 text-[#FFD700]" />
        </div>

        {/* Animated torches */}
        <div className="absolute left-10 top-1/3 animate-flicker">
          <Image src="/images/torch.png" alt="Torch" width={48} height={96} className="pixelated" />
        </div>
        <div className="absolute right-10 top-1/3 animate-flicker-delay">
          <Image src="/images/torch.png" alt="Torch" width={48} height={96} className="pixelated" />
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFBE0B] border-b-4 border-[#D72638] pb-4">
            Quest Chapters
          </h2>

          <ChapterScroll />
        </div>
      </section>

      {/* Mine & Reveal Section */}
      <section id="mine-reveal" className="py-20 px-4 relative bg-[#1E1E1E]/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#FFBE0B] border-b-4 border-[#D72638] pb-4">
            ⛏️ Uncover the Proposal Scrolls
          </h2>

          <p className="text-xl mb-12">Click to mine and reveal secrets...</p>

          <MineReveal />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FFBE0B] border-b-4 border-[#D72638] pb-4">
            💬 Contact The Guildmaster
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#A9A9A9]/30 text-center">
        <p className="text-[#A9A9A9]">
          Crafted with <span className="text-[#D72638]">❤</span> for OSPP 2025
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Pickaxe />
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const chapters = [
  {
    id: 1,
    title: "📜 Chapter 1: Project Overview",
    content:
      "The MCSManager Panel is an open-source, distributed, and lightweight web control panel designed to manage Minecraft and Steam game servers efficiently. Leveraging Node.js and Docker technologies, it offers a robust solution for admins and developers to centrally control multiple physical and virtual game servers with ease. My goal is to enhance the reliability, usability, and performance of this tool by improving Docker container management and enabling advanced file upload features.",
  },
  {
    id: 2,
    title: "🧠 Chapter 2: Key Features to Build",
    content:
      "I plan to work on increasing the fault tolerance of MCSManager by enabling it to recover and take control of surviving Docker containers after unexpected crashes and restarts. Additionally, I will improve the distributed file upload system by implementing sliced uploads and resuming capabilities for interrupted transfers. Bug fixing and stability enhancements will also be part of my contribution to deliver a seamless experience for end users.",
  },
  {
    id: 3,
    title: "🛠️ Chapter 3: Technical Approach",
    content:
      "Using my expertise in JavaScript/TypeScript and Node.js, I will dive into the Koa backend and Vue3 frontend to extend the current architecture. My familiarity with Docker APIs, process signals, and inter-process communication will be essential for implementing the Docker-related improvements. I will follow the project's modular and scalable design to ensure compatibility with existing features and to optionally support Docker on Windows environments.",
  },
  {
    id: 4,
    title: "🧩 Chapter 4: Why Me?",
    content:
      "As an avid gamer with experience in Minecraft and interest in server management, I bring both passion and technical skills to this project. My full-stack background and understanding of operating systems and containerization align well with the project's needs. I am eager to contribute to a community-driven project that supports indie developers and server admins, and I am committed to maintaining a collaborative, respectful team culture.",
  },
  {
    id: 5,
    title: "🏆 Chapter 5: Project Vision",
    content:
      "By enhancing the MCSManager's reliability and file management, I aim to make it easier for server administrators to maintain uptime and control over their Minecraft and Steam game environments. This will empower small server operators and indie developers to deliver stable multiplayer experiences without extensive DevOps overhead.",
  },
]

export function ChapterScroll() {
  const [currentChapter, setCurrentChapter] = useState(0)

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev === chapters.length - 1 ? 0 : prev + 1))
  }

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev === 0 ? chapters.length - 1 : prev - 1))
  }

  return (
    <div className="relative bg-[#1E1E1E] border-4 border-[#A9A9A9] p-6 rounded-lg min-h-[400px] flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper_texture.png')] bg-repeat opacity-10 pointer-events-none"></div>

      <div className="flex justify-between items-center mb-8">
        <Button
          onClick={prevChapter}
          variant="outline"
          className="border-2 border-[#915EFF] bg-[#1E1E1E] hover:bg-[#915EFF]/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="text-[#FFBE0B] text-xl">
          {currentChapter + 1} / {chapters.length}
        </div>

        <Button
          onClick={nextChapter}
          variant="outline"
          className="border-2 border-[#915EFF] bg-[#1E1E1E] hover:bg-[#915EFF]/20"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentChapter}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#3DBE65]">{chapters[currentChapter].title}</h3>

          <div className="bg-[#1E1E1E]/60 p-6 rounded-lg border-2 border-[#A9A9A9] flex-1">
            <p className="text-lg leading-relaxed">{chapters[currentChapter].content}</p>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {chapters.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentChapter ? "bg-[#D72638]" : "bg-[#A9A9A9]"}`}
                  onClick={() => setCurrentChapter(index)}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

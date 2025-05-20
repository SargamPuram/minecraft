"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const proposalPoints = [
  "MCSManager Panel is an open-source web control panel for Minecraft servers.",
  "I'll improve Docker container recovery after system crashes.",
  "Implementing sliced uploads for large file transfers.",
  "Adding resume capability for interrupted file uploads.",
  "Using JavaScript/TypeScript and Node.js with Koa backend.",
  "Extending Vue3 frontend for better user experience.",
  "Ensuring compatibility with existing features.",
  "Adding optional support for Docker on Windows environments.",
  "All improvements will be open source and well-documented.",
]

export function MineReveal() {
  const [clickCount, setClickCount] = useState(0)
  const [revealedPoints, setRevealedPoints] = useState<string[]>([])
  const [blockState, setBlockState] = useState(0)
  const [showPickaxeBroke, setShowPickaxeBroke] = useState(false)
  const [lastClickTime, setLastClickTime] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleMineClick = () => {
    const currentTime = Date.now()

    // Check if clicking too fast (less than 300ms between clicks)
    if (currentTime - lastClickTime < 300 && clickCount > 2) {
      setShowPickaxeBroke(true)
      setTimeout(() => setShowPickaxeBroke(false), 2000)
      return
    }

    setLastClickTime(currentTime)

    if (clickCount < proposalPoints.length) {
      // Update block crack state (0-4)
      const newBlockState = Math.min(4, Math.floor((clickCount + 1) / 2))
      setBlockState(newBlockState)

      // Reveal a new point
      setRevealedPoints([...revealedPoints, proposalPoints[clickCount]])
      setClickCount(clickCount + 1)

      // Check if all points are revealed
      if (clickCount === proposalPoints.length - 1) {
        setIsComplete(true)
        // Auto-scroll to next section after a delay
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }, 3000)
      }
    }
  }

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        {/* Stone block to mine */}
        <motion.div className="relative cursor-pointer mb-8" whileTap={{ scale: 0.95 }} onClick={handleMineClick}>
          <Image
            src={`/images/stone_${blockState}.png`}
            alt="Stone Block"
            width={128}
            height={128}
            className="pixelated"
          />

          {/* Pickaxe animation on click */}
          <AnimatePresence>
            {lastClickTime > 0 && (
              <motion.div
                initial={{ rotate: -45, x: -50, y: -50, opacity: 0 }}
                animate={{ rotate: 45, x: 0, y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Image src="/images/pickaxe.png" alt="Pickaxe" width={64} height={64} className="pixelated" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pickaxe broke message */}
        <AnimatePresence>
          {showPickaxeBroke && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#1E1E1E] border-2 border-[#D72638] p-4 rounded-lg text-[#D72638] font-bold"
            >
              Pickaxe broke! Mine slower!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revealed points */}
        <div className="mt-8 w-full max-w-2xl">
          <AnimatePresence>
            {revealedPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-4 bg-[#1E1E1E]/80 p-4 border-l-4 border-[#3DBE65] rounded-r-lg"
              >
                <p className="text-lg">{point}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-4 bg-[#915EFF]/20 border-2 border-[#915EFF] rounded-lg text-center"
            >
              <p className="text-xl font-bold text-[#FFBE0B]">All secrets revealed!</p>
              <p className="text-lg mt-2">Proceeding to next chapter...</p>
            </motion.div>
          )}

          {clickCount === 0 && (
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="text-center text-[#FFBE0B]"
            >
              Click the stone block to mine and reveal the proposal!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

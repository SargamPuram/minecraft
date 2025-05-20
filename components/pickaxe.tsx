"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Pickaxe() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={isHovering ? { rotate: [0, -20, 20, 0] } : {}}
      transition={{ duration: 0.5 }}
      className="cursor-pointer"
    >
      <Image src="/images/pickaxe.png" alt="Pickaxe" width={48} height={48} className="pixelated" />
    </motion.div>
  )
}

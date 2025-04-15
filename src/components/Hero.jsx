import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/hero.svg'
import { motion } from 'motion/react'

function Hero() {
  const [text, setText] = useState('')
  const fullText = "frontend developer"

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1)) // ✅ safe slicing — no undefined
        i++
      } else {
        clearInterval(intervalId)
      }
    }, 150)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-10" id='home'>
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-5xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="inline-flex">
            {("My Portfolio").split('').map((char, i) => {
              if (char === ' ') {
                char = '\u00A0'; // This will represent the space as a non-breaking space
              }
              return (
                <motion.span
                  key={i}
                  className="text-blue-600 inline-block"
                  initial={{ y: 0, color: "#2563eb" }} // blue-600
                  animate={{
                    y: [0, -5, 0],
                    color: ["#2563eb", "#1d4ed8", "#2563eb"] // blue-600 to blue-700 to blue-600
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-xl text-gray-400 mb-6 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I’m a <span className="font-semibold text-blue-600">{text}</span> crafting beautiful and performant websites.
        </motion.p>

        <motion.div initial={{ opacity: 0, x: -10, rotate: -30, scale: 0.5 }} animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.div initial={{ scaleY: 0.5, opacity: 0.3, y: 100 }} animate={{ scaleY: 1, opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex-1">
        <img src={HeroImage} alt="Hero" className="w-full max-w-md mx-auto" />
      </motion.div>
    </section>
  )
}

export default Hero

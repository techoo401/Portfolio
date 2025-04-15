import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = ['Home', 'About', 'Projects', 'Contact']

const navItemVariants = {
  hidden: { y: 100, opacity: 0, scale: 0.5, rotate: 180 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.1 },
  }),
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <motion.h1
        initial={{ opacity: 0, scale: 0, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white"
      >
        I'm Himanshu
      </motion.h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-xl text-white">
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="cursor-pointer hover:bg-blue-600 px-3 py-1 rounded transition-all duration-300"
          >
            <a href={`#${item.toLowerCase()}`} className="block">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 gap-4 md:hidden">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-white hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar

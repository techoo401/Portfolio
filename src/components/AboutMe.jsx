import React from 'react';
import { motion } from 'motion/react';
import {
    FaReact,
    FaCss3Alt,
    FaHtml5,
    FaJsSquare,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

function AboutMe() {
    const paragraph = `I’m a passionate Frontend Developer who turns ideas into interactive digital experiences. With a love for smooth UI, animated transitions, and clean code, I craft modern web interfaces that feel alive. Currently diving deep into React and Tailwind, building everything from stunning portfolios to engaging web apps, one pixel at a time.`;

    const words = paragraph.split(' ');


    const skills = [
        { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'Framer Motion', icon: <TbBrandFramerMotion className="text-pink-400" /> },
    ];

    return (
        <section className="px-8 py-20" id="about">
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
                {/* Left: Illustration (Mobile Upar, Desktop Left) */}
                <motion.div
                    className="w-full max-w-md mx-auto order-1 md:order-none"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://kit8.net/wp-content/uploads/2020/12/Coding@2x.png"
                        alt="Illustration"
                        className="w-full object-contain rounded"
                    />
                </motion.div>

                {/* Right: Text Content */}
                <div>
                    <motion.h2
                        className="text-4xl font-bold mb-6 mt-5"
                        initial={{ opacity: 0, y: 20, rotate: 120 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Me
                    </motion.h2>

                    <p className="text-xl text-gray-300 mb-8 flex flex-wrap leading-relaxed">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                className="mr-1"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </p>

                    <motion.div
                        className="flex flex-wrap gap-4 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        {skills.map((skill, i) => (
                            <motion.span
                                key={skill.name}
                                className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-sm text-white px-4 py-2 rounded-full shadow-md ring-1 ring-white/30 hover:scale-110 hover:ring-blue-400 transition-transform duration-300 cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8, y: 20, rotate: 180 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                            >
                                {skill.icon}
                                {skill.name}
                            </motion.span>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default AboutMe;

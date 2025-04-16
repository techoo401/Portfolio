import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "DeltaFlix",
    image: "/deltaflix.png",
    description: "A Netflix clone with movie browsing, trailers, and responsive UI.",
  },
  {
    title: "Chat Website",
    image: "/chat_website.png",
    description: "Real-time chat web app with rooms and messaging powered by sockets.",
  },
  {
    title: "Employee Management System",
    image: "/employee_management_system.png",
    description: "Admin dashboard for managing employees, leaves, and reports.",
  },
  {
    title: "Personal Dashboard",
    image: "/personal_dashboard.png",
    description: "Your own productivity dashboard with widgets, notes, and tasks.",
  },
  {
    title: "TastyBites",
    image: "/tastybites.png",
    description: "A modern food ordering UI with menu browsing and cart system.",
  },
];

function Projects() {
  return (
    <section className="px-8 py-20 text-white" id="projects">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20, rotate: 240 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative w-[400px] h-[300px] overflow-hidden rounded-xl shadow-lg cursor-pointer group bg-gray-900 border-2 border-transparent hover:border-blue-500 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.5, y: 100, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React, { useState } from 'react';
import { motion } from 'motion/react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle it however you want
  };

  return (
    <section className="px-8 py-20 text-white bg-gray-950" id="contact">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Tilt effect on hover using motion */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto flex flex-col gap-6 bg-gray-900 p-8 rounded-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, rotateX: 0, rotateY: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ rotateX: 2, rotateY: -3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <motion.button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-semibold w-fit self-end"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;

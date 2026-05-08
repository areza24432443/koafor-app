

import React from 'react'

function page() {
  return (
   <section
  id="contact"
  className="w-full bg-black text-white py-24 px-6 md:px-16"
>
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">
      <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold">
        Contact Us
      </span>

      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Get In Touch
      </h1>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>

      <p className="text-gray-400 mt-6 text-lg">
        We would love to hear from you!
      </p>
    </div>

    {/* FORM */}
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name *"
          className="w-full bg-neutral-900 border border-neutral-700 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 transition"
        />

        <input
          type="email"
          placeholder="Your Email *"
          className="w-full bg-neutral-900 border border-neutral-700 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 transition"
        />

        <input
          type="tel"
          placeholder="Your Phone *"
          className="w-full bg-neutral-900 border border-neutral-700 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 transition"
        />

      </div>

      {/* RIGHT SIDE */}
      <div>

        <textarea
          placeholder="Your Message *"
          rows={10}
          className="w-full h-full bg-gray-900 border border-neutral-700 rounded-2xl px-6 py-4 outline-none resize-none focus:border-yellow-400 transition"
        ></textarea>

      </div>

      {/* BUTTON */}
      <div className="lg:col-span-2 flex justify-center mt-4">

        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>

      </div>

    </form>
  </div>
</section>
  )
}

export default page
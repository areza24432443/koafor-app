export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gray-200 text-white px-6 md:px-16 py-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
          <img
            src="/treamer-small.png"
            alt="Barber Shop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6">
          <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold">
            About Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Modern Barber <br />
            Experience & Style
          </h1>

          <p className="text-gray-400 text-lg leading-8">
            We provide premium barber services with modern techniques,
            professional grooming, and luxury styling. Our mission is to help
            every customer feel confident, stylish, and refreshed.
          </p>

          <p className="text-gray-500 leading-7">
            From classic haircuts to modern fades, beard styling, and hair
            coloring, our professional barbers deliver precision in every cut.
            We combine creativity, comfort, and attention to detail for a truly
            premium experience.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">10+</h2>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">5K+</h2>
              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">15+</h2>
              <p className="text-gray-400 mt-2">Expert Barbers</p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Premium Grooming Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD */}
          <div className="bg-neutral-900 p-8 rounded-3xl hover:bg-yellow-400 hover:text-black transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Haircut</h3>
            <p className="text-sm leading-7">
              Modern and classic haircuts designed for your personal style.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl hover:bg-yellow-400 hover:text-black transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Beard Styling</h3>
            <p className="text-sm leading-7">
              Precision beard trimming and shaping for a sharp look.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl hover:bg-yellow-400 hover:text-black transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Hair Coloring</h3>
            <p className="text-sm leading-7">
              Professional coloring for modern style and confidence.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-3xl hover:bg-yellow-400 hover:text-black transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Skin Fade</h3>
            <p className="text-sm leading-7">
              Clean fades with premium finishing and attention to detail.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-32 bg-yellow-400 rounded-3xl p-12 text-center text-black">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready For Your Next Style?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Experience premium barber services with professional styling and
          modern grooming techniques.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition duration-300">
          Book Appointment
        </button>
        </div>
    </div>
    )
}
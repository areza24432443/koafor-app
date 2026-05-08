
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-gray-300 text-white border-t border-neutral-800 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* COPYRIGHT */}
        <div className="text-center md:text-left text-sm text-gray-400">
          Copyright © 2018 Design By{" "}
          <a
            href="https://boostraptheme.com/"
            className="text-yellow-400 hover:underline"
          >
            Boostraptheme
          </a>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-6 text-lg">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-yellow-400 hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-yellow-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Terms of Use
          </a>
        </div>

      </div>
    </footer>
  );
}
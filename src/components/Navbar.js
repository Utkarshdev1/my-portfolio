import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="text-2xl font-bold tracking-tight text-white">
          Utkarsh<span className="text-green-500">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download="Utkarsh_Kumar_Resume.pdf"
            className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-2xl border-t border-white/10">
          <div className="flex flex-col px-6 py-8 gap-6 text-lg">
            <a
              href="#projects"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="text-gray-300 hover:text-white"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              download="Utkarsh_Kumar_Resume.pdf"
              className="mt-4 w-fit px-5 py-3 rounded-full bg-green-500 text-black font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

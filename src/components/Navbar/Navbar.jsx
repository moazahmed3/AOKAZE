import { useState } from "react";
import { IoMdList, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 ">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="Logo" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <a className="text-third hover:text-primary duration-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="text-third hover:text-primary duration-300"
                href="#tours"
              >
                Tours
              </a>
            </li>
            <li>
              <a
                className="text-third hover:text-primary duration-300"
                href="#destinations"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                className="text-third hover:text-primary duration-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-third hover:text-primary duration-300"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden lg:block btn-primary">Book Now</button>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white cursor-pointer"
          >
            {isOpen ? <IoMdClose size={35} /> : <IoMdList size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-secondary border-t border-white/10 flex flex-col">
          <li>
            <a
              onClick={closeMenu}
              className="block px-6 py-4 text-third hover:bg-white/10"
              href="#"
            >
              Home
            </a>
          </li>

          <li>
            <a
              onClick={closeMenu}
              className="block px-6 py-4 text-third hover:bg-white/10"
              href="#tours"
            >
              Tours
            </a>
          </li>

          <li>
            <a
              onClick={closeMenu}
              className="block px-6 py-4 text-third hover:bg-white/10"
              href="#destinations"
            >
              Destinations
            </a>
          </li>

          <li>
            <a
              onClick={closeMenu}
              className="block px-6 py-4 text-third hover:bg-white/10"
              href="#about"
            >
              About
            </a>
          </li>

          <li>
            <a
              onClick={closeMenu}
              className="block px-6 py-4 text-third hover:bg-white/10"
              href="#contact"
            >
              Contact
            </a>
          </li>

          <li className="p-6">
            <button className="btn-primary w-full">Book Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

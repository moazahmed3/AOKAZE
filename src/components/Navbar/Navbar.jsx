import { useEffect, useState } from "react";
import { IoMdList, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about", active: false },
  { label: "Destinations", href: "#destinations", active: false },
  { label: "Tours", href: "#tours", active: false },
  { label: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      style={{
        background: isScrolled
          ? "linear-gradient(180deg, rgb(78 78 78 / 62%) 0%, rgb(78 78 78 / 62%) 100%)"
          : "transparent",
      }}
      className="fixed top-0 left-0 right-0 backdrop-blur-sm    z-50 "
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="Logo" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`duration-300 hover:text-primary ${
                    link.active ? "text-primary" : "text-third"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
        className={`lg:hidden overflow-hidden transition-all duration-300  ${
          isOpen ? "h-dvh" : "max-h-0"
        }`}
      >
        <ul
          style={{
            background: "",
          }}
          className=" flex flex-col h-full bg-slate-800"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`block px-6 py-4 hover:bg-white/10 ${
                  link.active ? "text-primary" : "text-third"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="p-6">
            <button className="btn-primary w-full">Book Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { X, Menu } from "react-feather";
import { Link, NavLink } from "react-router";
import np from "../assets/np.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/formation", label: "Formation" },
    { path: "contact", label: "Contact" },
    { path: "apropos", label: "À Propos" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !document.getElementById("mobileMenu").contains(event.target) &&
        !document.getElementById("menuButton").contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      <nav className="fixed z-50 top-0 left-0 right-0 flex w-full h-[60px] bg-transparent backdrop-blur-md justify-between items-center shadow px-6 md:px-16">
        <Link to={"/"} className="pt-1">
          <img
            src={np}
            alt="Logo"
            className="w-[120px] h-[120px] md:w-[155px] md:h-[155px]"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-[40px] text-[18px] font-medium">
          {navLinks.map(({ path, label }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `inline-block text-center hover:tracking-[3px] transition-all duration-[0.3s] relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? "text-red-700" : " text-gray-400"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu Mobile Button */}
        <button
          id="menuButton"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-gray-400" />
          ) : (
            <Menu size={28} className="text-gray-400" />
          )}
        </button>
      </nav>

      {/* Menu Mobile */}
      <nav
        id="mobileMenu"
        className={`fixed top-0 right-0 h-auto w-2/3 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col items-center space-y-6 py-6 px-6 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden border-l border-gray-200`}
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <Link to={"/"} className="pt-1">
          <img src={np} alt="Logo" className="w-[150px] h-[150px]" />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <X size={28} />
        </button>
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-gray-900 hover:text-red-700 w-full text-center py-3 rounded-lg"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react"; // Importation des hooks React
import { X, Menu, User } from "react-feather"; // Importation des icônes
import { Link, NavLink } from "react-router"; // Importation des composants de navigation
import np from "../assets/np.png"; // Importation du logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/formation", label: "Formation" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
    { path: "/apropos", label: "À Propos" },
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
      {/* Barre de navigation */}
      <nav className="fixed top-0 left-0 right-0 flex w-full h-[60px] bg-transparent backdrop-blur-md justify-between items-center shadow px-6 md:px-16">
        {/* Logo aligné à gauche */}
        <Link to="/" className="pt-1">
          <img
            src={np}
            alt="Logo"
            className="w-[130px] h-[130px] md:w-[138px] md:h-[138px]"
          />
        </Link>

        {/* Navigation Desktop + Icône User */}
        <div className="hidden md:flex items-center gap-[30px] text-[17px] font-medium">
          {navLinks.map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `inline-block hover:tracking-[2px] transition-all duration-[0.3s] relative after:block after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-red-700 font-bold text-[18px]"
                    : "text-gray-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          {/* Icône User pour l'inscription */}
          <Link
            to="/login"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
          >
            <User size={24} className="text-gray-600" />
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
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
        className={`fixed  top-0 right-0 h-auto w-2/3 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col items-center space-y-6 py-6 px-6 z-60 rounded-b-md ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden border-gray-200`}
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.6)",
        }}
      >
        {/* Logo dans le menu mobile */}
        <Link to="/" className="-mt-5">
          <img src={np} alt="Logo" className="w-[110px] h-[110px] -mb-12 " />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <X size={28} />
        </button>

        {/* Liens du menu mobile */}
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className="text-base text-[18px] text-center font-medium text-gray-900 hover:text-red-700 w-full py-3 rounded-lg"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          >
            {label}
          </NavLink>
        ))}

        {/* Icône User dans le menu mobile */}
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 flex items-center justify-center"
        >
          <User size={28} className="text-gray-600" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;

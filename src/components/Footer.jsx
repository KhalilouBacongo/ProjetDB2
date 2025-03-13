import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import {
  FaHome,
  FaServicestack,
  FaChalkboardTeacher,
  FaPhoneAlt,
} from "react-icons/fa"; // Ajout des icônes pour les liens utiles

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Devise */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">DECIDE AND BUILD</h2>
          <p className="text-sm font-semibold text-gray-200">
            "Sublimer votre expérience avec une recherche inlassable de
            l'excellence et de la perfection."
          </p>
          {/* Devise remplacée */}
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold text-white">Liens utiles</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center hover:text-white transition duration-300"
              >
                <FaHome size={20} className="mr-2" />
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex items-center hover:text-white transition duration-300"
              >
                <FaServicestack size={20} className="mr-2" />
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/formation"
                className="flex items-center hover:text-white transition duration-300"
              >
                <FaChalkboardTeacher size={20} className="mr-2" />
                Formation
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center hover:text-white transition duration-300"
              >
                <FaPhoneAlt size={20} className="mr-2" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          {/* POUR LE BACK END ‼️⚠️*/}

          <h3 className="text-lg font-semibold text-white">Suivez-nous</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Informations légales */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Siège social : COCODY SIPIM4 – NCC : 2245335 K – RCCM :
          CI-ABJ-032022-B13-11575
        </p>
        <p>01 BP 352 Abidjan 01 – Tel : 0758626250 – 0505737010</p>
        <p>Capital social : 1 000 000 FCFA</p>
        <p>Centre des impôts : Cocody, Riviera 2</p>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Decide and Build. Tous droits réservés.
      </div>
    </footer>
  );
}

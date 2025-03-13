import React from "react";
import Lottie from "lottie-react"; // Pour animer le JSON
import gd from "../assets/grd.json";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Animation en arrière-plan */}
      <Lottie
        animationData={gd}
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenu de l'erreur */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold drop-shadow-lg">404</h1>
        <p className="text-2xl mt-4 drop-shadow-md">
          Oups ! La page que vous cherchez n'existe pas.
        </p>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }} // Zoom automatique
          transition={{ duration: 0.5, repeat: Infinity }} // Animation infinie toutes les 0.5s
          className="mt-6 inline-block"
        >
          <Link
            to="/"
            className="flex items-center space-x-4 bg-red-800 hover:bg-red-500 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            {/* Icône en forme d'étoile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white transition-all duration-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2c.414 0 .792.255.948.642l2.735 6.816 7.243.36c.443.022.823.292.95.722.126.43-.01.884-.35 1.19l-5.572 5.06 1.538 7.182c.092.432-.097.88-.475 1.13-.38.25-.86.274-1.26.062L12 19.12l-6.757 3.043c-.4.212-.88.188-1.26-.062-.378-.25-.567-.698-.475-1.13l1.538-7.182L.474 9.73c-.34-.306-.476-.76-.35-1.19.127-.43.507-.7.95-.722l7.243-.36L11.052 2.64c.156-.387.534-.642.948-.642z"
                clipRule="evenodd"
              />
            </svg>

            {/* Texte du bouton */}
            <span className="text-xl font-semibold">Retour à l'accueil</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;

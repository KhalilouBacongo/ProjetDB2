import React, { useState } from "react";
import { Link } from "react-router"; // Correction de l'import
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosCloudUpload } from "react-icons/io";
import NP1 from "../assets/NP1.png"; // Assurez-vous que le logo est bien dans ce chemin
import { InspectIcon } from "lucide-react";

const Inscription = () => {
  const [type, setType] = useState("password");

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      {/* Affichage du logo NP1 en haut de la page */}
      <img src={NP1} alt="Logo NP1" className="w-24 h-24 mb-6" />

      {/* Titre principal */}
      <h2 className="font-bold text-3xl text-center text-primary mb-4">
        Inscription
      </h2>

      {/* Texte descriptif */}
      <p className="text-lg text-gray-600 mb-6 text-center">
        Bienvenue, veuillez entrer vos informations.
      </p>

      {/* Formulaire d'inscription */}
      <div className="w-[80%] sm:w-[70%] md:w-[40%] lg:w-[45%] bg-white  p-2 rounded-lg shadow">
        <form className="m-auto w-[100%] sm:w-[90%] md:w-[70%] lg:w-[80%]  p-8 rounded-lg">
          {/* Zone d'upload de la photo de profil */}
          <div className="cursor-pointer h-[220px] w-[230px] b bg-violet-100 mx-auto rounded-full border-[4px] border-dotted border-violet-200 flex flex-col items-center justify-center mb-6">
            <label htmlFor="photo" className="cursor-pointer text-center">
              <IoIosCloudUpload className="text-5xl mx-auto text-gray-500" />
              <p className="text-gray-600 mt-2">Téléchargez votre photo</p>
            </label>
            <input type="file" className="hidden" id="photo" />
          </div>

          {/* Champ Nom Complet */}
          <div className="mb-4">
            <label
              htmlFor="Fname"
              className="font-medium text-sm text-gray-700"
            >
              Nom Complet
            </label>
            <input
              id="Fname"
              type="text"
              className="inputForm w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Entrez votre nom complet"
            />
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-medium text-sm text-gray-700"
            >
              Adresse Email
            </label>
            <input
              id="email"
              type="email"
              className="inputForm w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Champ Mot de passe */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-medium text-sm text-gray-700"
            >
              Mot de passe
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <input
                type={type}
                className="w-full focus:outline-none"
                placeholder="Entrez votre mot de passe"
              />
              <div className="cursor-pointer">
                {type === "password" ? (
                  <FaEye onClick={() => setType("text")} />
                ) : (
                  <FaEyeSlash onClick={() => setType("password")} />
                )}
              </div>
            </div>
          </div>

          {/* Champ Confirmation du mot de passe */}
          <div className="mb-6">
            <label
              htmlFor="Cpassword"
              className="font-medium text-sm text-gray-700"
            >
              Confirmer le mot de passe
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <input
                type={type}
                className="w-full focus:outline-none"
                placeholder="Confirmez votre mot de passe"
              />
              <div className="cursor-pointer">
                {type === "password" ? (
                  <FaEye onClick={() => setType("text")} />
                ) : (
                  <FaEyeSlash onClick={() => setType("password")} />
                )}
              </div>
            </div>
          </div>

          {/* Bouton d'inscription */}
          <input
            type="submit"
            className="bg-violet-400 text-white py-2 rounded-md w-full cursor-pointer font-semibold hover:bg-primary/90 transition duration-300"
            value="S'inscrire"
          />

          {/* Séparateur "Ou" */}
          <div className="flex items-center my-5">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-600">Ou</span>
            <hr className="flex-1" />
          </div>

          {/* Bouton d'inscription avec Google */}
          <button className="flex justify-center items-center w-full border-2 border-gray-300 rounded-md cursor-pointer gap-2 py-2 hover:bg-gray-100 transition duration-300">
            <FcGoogle className="text-lg" />
            <span className="font-medium">S'inscrire avec Google</span>
          </button>

          {/* Lien vers la connexion */}
          <p className="text-center mt-4 text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link className="font-semibold text-primary" to="/login">
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Inscription;

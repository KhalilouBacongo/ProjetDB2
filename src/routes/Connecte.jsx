import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import NP1 from "../assets/NP1.png"; // Assurez-vous que le logo NP1 est dans le bon chemin

const Connecte = () => {
  const [type, setType] = useState("password"); // Gestion de l'état pour afficher ou cacher le mot de passe

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10 ">
      {/* Affichage du logo NP1 en haut de la page */}
      <Link to={"/"}>
        <img src={NP1} alt="Logo NP1" className="w-24 h-24 mb-4" />
      </Link>
      {/* Titre principal de la page */}
      <h2 className="font-bold text-3xl text-center text-primary mb-5">
        Bienvenue
      </h2>

      {/* Sous-titre expliquant le but de la page */}
      <p className="text-lg text-gray-600 mb-7 text-center">
        Nous sommes heureux de vous revoir, veuillez entrer vos informations.
      </p>

      {/* Formulaire d'inscription */}
      <div className="w-[80%] sm:w-[70%] md:w-[40%] lg:w-[45%] bg-white  p-2 rounded-lg shadow">
        <form className="m-auto w-[100%] sm:w-[90%] md:w-[70%] lg:w-[80%]  p-8 rounded-lg ">
          {/* Champ de saisie pour l'email */}
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
              className="inputForm w-full h-[45px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Champ de saisie pour le mot de passe */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-medium text-sm text-gray-700"
            >
              Mot de passe
            </label>

            {/* Zone de saisie du mot de passe avec l'option pour afficher/masquer */}
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <input
                id="password"
                type={type} // Le type du champ change en fonction de l'état (text ou password)
                className="inputForm w-full h-[30px] p-3 border-none focus:outline-none "
                placeholder="Entrez votre mot de passe"
              />
              <div className="ml-2 cursor-pointer">
                {/* Bouton pour changer le type du mot de passe entre texte ou mot de passe */}
                {type === "password" ? (
                  <FaEye onClick={() => setType("text")} />
                ) : (
                  <FaEyeSlash onClick={() => setType("password")} />
                )}
              </div>
            </div>
          </div>

          {/* Lien pour la récupération du mot de passe oublié */}
          <Link
            to={"/forgot"}
            className="block text-right mt-2 mb-4 text-sm text-primary font-semibold"
          >
            Mot de passe oublié ?
          </Link>

          {/* Bouton de soumission du formulaire */}
          <input
            type="submit"
            className="bg-violet-400 text-white py-2 rounded-md w-full cursor-pointer font-semibold hover:bg-primary/90 transition duration-300"
            value="Se connecter"
          />

          {/* Séparateur avec la mention "Ou" au centre */}
          <div className="flex items-center my-5">
            <hr className="flex-1" />
            <span className="mx-4 text-sm text-gray-500">Ou</span>
            <hr className="flex-1" />
          </div>

          {/* Bouton pour se connecter avec Google */}
          <button className="flex justify-center items-center w-full border-2 border-gray-300 rounded-md py-2 gap-2 text-gray-700 font-medium hover:bg-gray-100 transition duration-300">
            <FcGoogle className="text-lg" />
            Se connecter avec Google
          </button>

          {/* Lien pour accéder à la page d'inscription */}
          <p className="text-center mt-4  text-gray-600">
            Vous n'avez pas de compte ?{" "}
            <Link className="font-semibold text-primary" to={"/inscription"}>
              Inscrivez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connecte;

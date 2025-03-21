import React from "react";
import NP1 from "../assets/NP1.png"; // Assurez-vous que le logo NP1 est dans le bon chemin

const Forgot = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      {/* Affichage du logo NP1 en haut de la page */}
      <img src={NP1} alt="Logo NP1" className="w-24 h-24 mb-6" />

      {/* Titre principal de la page */}
      <h2 className="font-bold text-3xl text-center text-primary mb-4">
        Réinitialiser le mot de passe
      </h2>

      {/* Sous-titre expliquant l'action */}
      <p className="text-lg text-gray-600 mb-6 text-center">
        Nous vous enverrons un email pour réinitialiser votre mot de passe.
      </p>

      {/* Formulaire de réinitialisation de mot de passe */}
      <div className="w-[80%] sm:w-[70%] md:w-[40%] lg:w-[45%] bg-white  p-2 rounded-lg shadow">
        <form className="m-auto w-[100%] sm:w-[90%] md:w-[70%] lg:w-[80%]  p-8 rounded-lg">
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
              className="inputForm w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Bouton de soumission pour réinitialiser le mot de passe */}
          <input
            type="submit"
            className="bg-violet-400 text-white py-2 rounded-md w-full cursor-pointer font-semibold hover:bg-primary/90 transition duration-300"
            value="Réinitialiser"
          />
        </form>
      </div>
    </div>
  );
};

export default Forgot;

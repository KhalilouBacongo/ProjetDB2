import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCloudUpload } from "react-icons/io";
import NP1 from "../assets/NP1.png"; // Assurez-vous que le logo est bien dans ce chemin

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
      {/* Logo */}
      <img src={NP1} alt="Logo" className="w-24 h-24 mb-6 animate-fadeIn" />

      {/* Titre */}
      <h2 className="font-bold text-3xl text-center text-primary mb-4 animate-slideDown">
        Mon Profil
      </h2>

      {/* Zone principale du profil */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white p-8 rounded-lg shadow-md animate-fadeIn">
        {/* Photo de profil */}
        <div className="relative mx-auto mb-6 flex flex-col items-center">
          <div className="cursor-pointer h-[150px] w-[150px] bg-gray-200 rounded-full border-4 border-dotted border-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <label htmlFor="photo" className="cursor-pointer text-center">
              <IoIosCloudUpload className="text-4xl text-gray-500" />
            </label>
            <input type="file" className="hidden" id="photo" />
          </div>
          <button
            className="flex items-center gap-2 text-gray-500 text-sm mt-2 hover:text-primary transition"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit />
            Modifier la photo
          </button>
        </div>

        {/* Informations du profil */}
        <form className="space-y-4">
          {[
            { label: "Nom Complet", value: "Jean Dupont" },
            { label: "Adresse Email", value: "jean.dupont@example.com" },
            { label: "Numéro de Téléphone", value: "+225 01 23 45 67 89" },
            { label: "Adresse", value: "Abidjan, Côte d'Ivoire" },
            { label: "Poste Occupé", value: "Développeur Web" },
          ].map(({ label, value }) => (
            <div key={label} className="mb-2">
              <label className="font-medium text-sm text-gray-700">
                {label}
              </label>
              <input
                type="text"
                className={`w-full p-3 border ${
                  isEditing ? "border-gray-300" : "border-transparent"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition`}
                disabled={!isEditing}
                value={value}
              />
            </div>
          ))}

          {/* Biographie */}
          <div>
            <label className="font-medium text-sm text-gray-700">
              Biographie
            </label>
            <textarea
              className={`w-full p-3 border ${
                isEditing ? "border-gray-300" : "border-transparent"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition`}
              disabled={!isEditing}
              rows="3"
            >
              Passionné par la technologie et l'innovation, j'aide les
              entreprises à se digitaliser avec des solutions modernes et
              performantes.
            </textarea>
          </div>

          {/* Bouton pour sauvegarder les modifications */}
          {isEditing && (
            <button
              type="submit"
              className="bg-primary text-white py-2 rounded-md w-full cursor-pointer font-semibold hover:bg-primary/90 transition duration-300"
            >
              Sauvegarder les modifications
            </button>
          )}
        </form>
      </div>

      {/* Citation et liens utiles */}
      <div className="text-center mt-6 w-[80%] sm:w-[50%] md:w-[40%]">
        <p className="italic text-gray-600">
          “Sublimer votre expérience avec une recherche inlassable de
          l'excellence et de la perfection.”
        </p>
        <h3 className="font-semibold text-lg text-primary mt-4">
          DECIDE AND BUILD
        </h3>
        <div className="mt-4 flex justify-center space-x-6">
          {["Accueil", "Services", "Formation", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-primary transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

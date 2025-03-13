import React from "react";
import {
  FaHandshake,
  FaRegAddressCard,
  FaBuilding,
  FaCogs,
  FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Apbanner from "../assets/Apbanner.jpg";
import Philosophie from "../assets/Philosophie.jpg";
import valeur from "../assets/valeur.jpg";
import Adsecition from "./section/Apsection";

const Apropos = () => {
  return (
    <>
      <div className="relative">
        <img
          src={Apbanner}
          alt="Banner"
          className="w-full h-[40vh] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 blur-sm"></div>
        <motion.h2
          className="text-3xl font-bold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            times: [0, 0.5, 1],
          }}
        >
          <h2 className=" text-[70px]">Découvrez notre histoire</h2>
        </motion.h2>
      </div>

      <div className="bg-gray-100 py-16 px-6 md:px-16 relative">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-6 text-lg text-gray-600 text-center">
            <span className="font-black">DECIDE AND BUILD(D&B)</span> a vu le
            jour en 2022, animée par une passion profonde pour l'innovation.
            Nous avons pour mission de réinventer l'avenir des entreprises en
            apportant des solutions novatrices dans les domaines des{" "}
            <span className="font-black">TIC</span>, du
            <span className="font-black"> BTP</span> et des services
            professionnels. Notre objectif est simple : soutenir les structures
            dans leurs besoins spécifiques et les guider vers un avenir plus
            brillant.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            En alliant expertise technique et savoir-faire terrain, nous avons
            constitué une équipe dynamique composée de spécialistes dédiés. Nos
            solutions sont toujours personnalisées, conçues pour répondre à vos
            défis uniques, quels que soient la taille et la complexité de votre
            projet.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Chez D&B, nous nous engageons à vous accompagner à chaque étape de
            votre développement, en identifiant précisément vos besoins et en
            vous offrant des réponses sur-mesure, conçues pour maximiser votre
            succès.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-8">
            {/* Bloc Philosophie */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative w-full md:w-1/2 lg:w-1/3 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Image de fond */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${Philosophie})` }}
              ></div>

              {/* Surcouche sombre */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Contenu texte */}
              <div className="relative z-10 text-white p-6 text-center">
                <FaHandshake className="text-4xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">Notre philosophie</h3>
                <p className="mt-2 text-lg">
                  Nous croyons fermement que la clé du succès réside dans la
                  qualité des services rendus et la recherche incessante de la
                  satisfaction client.
                </p>
              </div>
            </motion.div>

            {/* Bloc Valeurs */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative w-full md:w-1/2 lg:w-1/3 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Image de fond */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{ backgroundImage: `url(${valeur})` }}
              ></div>

              {/* Surcouche sombre */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Contenu texte */}
              <div className="relative z-10 text-white p-6 text-center">
                <FaRegAddressCard className="text-4xl text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">Nos valeurs</h3>
                <ul className="mt-2 text-lg list-disc list-inside">
                  <li>
                    <strong>Qualité</strong> : Nous plaçons la barre haute pour
                    chaque service.
                  </li>
                  <li>
                    <strong>Responsabilité</strong> : Nous assumons pleinement
                    nos engagements.
                  </li>
                  <li>
                    <strong>Écoute du client</strong> : Votre vision est notre
                    priorité.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Adsecition />

      <div className="bg-white py-16 px-6 md:px-16 shadow-xl rounded-lg">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Informations complémentaires
          </h3>
          <ul className="text-lg text-gray-600 list-disc list-inside space-y-6">
            <li className="transition-transform transform hover:scale-105 duration-[1s]">
              <strong className="text-blue-600">Registre de commerce</strong>:
              CI-ABJ-03-2022-B13-11575
            </li>
            <li className="transition-transform transform hover:scale-105 duration-[1s]">
              <strong className="text-blue-600">SARL</strong> au capital de
              1.000.000 FCFA
            </li>
            <li className="transition-transform transform hover:scale-105 duration-[1s]">
              <strong className="text-blue-600">
                Numéro compte contribuable
              </strong>
              : 2245335 K
            </li>
          </ul>
        </motion.section>
      </div>
    </>
  );
};

export default Apropos;

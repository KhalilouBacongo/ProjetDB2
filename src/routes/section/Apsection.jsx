import React from "react";
import {
  FaBrain,
  FaHardHat,
  FaWarehouse,
  FaChartLine,
  FaRobot,
  FaBuilding,
  FaProjectDiagram,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const expertiseData = [
  {
    icon: <FaBrain className="text-blue-500 text-3xl" />,
    title: "TIC",
    description:
      "Maîtrise des technologies avancées telles que l'analyse de données, l'intelligence artificielle et le machine learning pour transformer vos données en décisions stratégiques.",
  },
  {
    icon: <FaHardHat className="text-green-500 text-3xl" />,
    title: "BTP",
    description:
      "Des solutions novatrices pour le secteur du BTP, visant à améliorer la performance et la durabilité des projets de construction.",
  },
];

const realizationData = [
  {
    category: "Technologies de l'Information et de la Communication (TIC)",
    items: [
      {
        icon: <FaWarehouse className="text-purple-500 text-2xl" />,
        title: "Optimisation de la chaîne d'approvisionnement",
        description:
          "Développement d'une solution basée sur l'IA permettant d'améliorer la gestion des stocks et la prévision des besoins.",
      },
      {
        icon: <FaChartLine className="text-orange-500 text-2xl" />,
        title: "Analyse de données pour la finance",
        description:
          "Création d’un tableau de bord interactif pour aider les entreprises à mieux visualiser leurs indicateurs de performance.",
      },
      {
        icon: <FaRobot className="text-teal-500 text-2xl" />,
        title: "Automatisation des processus métier",
        description:
          "Déploiement d’un chatbot intelligent facilitant la gestion des relations clients et le support technique.",
      },
    ],
  },
  {
    category: "Bâtiment et Travaux Publics (BTP)",
    items: [
      {
        icon: <FaBuilding className="text-blue-500 text-2xl" />,
        title: "Construction durable",
        description:
          "Participation à la conception d’un bâtiment à haute efficacité énergétique intégrant des solutions intelligentes.",
      },
      {
        icon: <FaProjectDiagram className="text-red-500 text-2xl" />,
        title: "Gestion de projet avancée",
        description:
          "Développement d’une plateforme numérique permettant de suivre l’évolution des chantiers en temps réel.",
      },
      {
        icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
        title: "Sécurisation des infrastructures",
        description:
          "Implémentation d’un système de surveillance basé sur l’IoT pour prévenir les risques sur les sites de construction.",
      },
    ],
  },
];

const Adsection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 cursor-pointer"
      >
        Nos Expériences et Expertise
      </motion.h2>
      <p className="mt-4 text-lg text-gray-600">
        Grâce à une équipe pluridisciplinaire et une solide expérience, D&B se
        distingue dans divers secteurs.
      </p>

      {/* Domaines d'Expertise */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.6 } }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Nos Réalisations */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-semibold text-gray-800 mt-16 cursor-pointer"
      >
        Nos Réalisations
      </motion.h3>
      {realizationData.map((section, index) => (
        <div key={index} className="mt-8 text-left">
          <h4 className="text-2xl font-semibold text-gray-700 text-center">
            {section.category}
          </h4>
          <div className="mt-6 grid md:grid-cols-3 gap-8">
            {section.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.6 } }}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              >
                {item.icon}
                <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adsection;

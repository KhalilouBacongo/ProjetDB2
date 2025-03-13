import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/gradientF.json";
import FormationImage from "../assets/Formation.jpg";

const Formations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation du chargement des données
    const formationData = {
      id: 7,
      title: "Formation",
      description:
        "Offrir des programmes de formation adaptés aux besoins des entreprises.",
      image: FormationImage,
      details: {
        presentation:
          "Nous offrons des programmes de formation sur mesure pour accompagner le développement des compétences professionnelles.",
        fonctionnement:
          "Les formations allient théorie et pratique, animées par des experts dans leur domaine.",
        etapes: [
          "Identification des besoins en formation",
          "Mise en place d'un programme personnalisé",
          "Sessions de formation interactives",
          "Évaluation post-formation et suivi",
        ],
        opportunite:
          "Les professionnels peuvent acquérir de nouvelles compétences et améliorer leur performance au travail.",
        perspectives:
          "La formation continue est un levier majeur de compétitivité et d'innovation pour les entreprises.",
        objectif:
          "Permettre aux individus et organisations de rester à la pointe des évolutions sectorielles et technologiques.",
      },
    };

    setTimeout(() => {
      setData(formationData);
      setLoading(false);
    }, 1500); // Simulation du chargement
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mb-20 mt-30 bg-white">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ height: 250, width: 250 }}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Présentation */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.description}</p>
      </div>

      {/* Image et Détails */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={data.image}
          alt="Formation"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-gray-700 space-y-4">
          <h3 className="text-xl font-semibold">Présentation</h3>
          <p>{data.details.presentation}</p>
          <h3 className="text-xl font-semibold">Fonctionnement</h3>
          <p>{data.details.fonctionnement}</p>
        </div>
      </div>

      {/* Étapes */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Étapes</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {data.details.etapes.map((etape, index) => (
            <li key={index}>{etape}</li>
          ))}
        </ul>
      </div>

      {/* Informations complémentaires */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">Opportunités</h3>
          <p className="text-gray-700 mt-2">{data.details.opportunite}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">Perspectives</h3>
          <p className="text-gray-700 mt-2">{data.details.perspectives}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">Objectif</h3>
          <p className="text-gray-700 mt-2">{data.details.objectif}</p>
        </div>
      </div>
    </div>
  );
};

export default Formations;

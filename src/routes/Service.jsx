import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ServiceData } from "../Sdata";
import Lottie from "lottie-react"; // Importation de lottie-react
import animationData from "../assets/grd.json"; // Importation de ton fichier JSON de l'animation Lottie

const Service = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedService = ServiceData.find((res) => res.id === parseInt(id));
    setTimeout(() => {
      setData(selectedService);
      setLoading(false);
    }, 3000); // Simulation du chargement
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        {/* Utilisation de Lottie sans options complexes */}
        <Lottie
          animationData={animationData} // Passer l'animation directement
          loop={true} // L'animation tourne en boucle
          autoplay={true} // Autoplay activé
          style={{ height: 250, width: 250 }} // Taille de l'animation
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 opacity-0 animate-fadeIn">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700 mb-4">{data.description}</p>

        <img
          src={`/images/${data.image}`}
          alt={data.title}
          className="w-full h-[300px] object-cover rounded mb-6 opacity-0 animate-fadeIn"
        />

        <div className="mb-6 opacity-0 animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2">Présentation</h2>
          <p className="text-gray-600">{data.details.presentation}</p>
        </div>

        <div className="mb-6 opacity-0 animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2">Fonctionnement</h2>
          <p className="text-gray-600">{data.details.fonctionnement}</p>
        </div>

        <div className="mb-6 opacity-0 animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2">Étapes</h2>
          <ul className="list-disc list-inside text-gray-600">
            {data.details.etapes.map((etape, index) => (
              <li key={index}>{etape}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-3 opacity-0 animate-fadeIn">
          <div>
            <h2 className="text-xl font-semibold">Opportunités</h2>
            <p className="text-gray-600">{data.details.opportunite}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Perspectives</h2>
            <p className="text-gray-600">{data.details.perspectives}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Objectif</h2>
            <p className="text-gray-600">{data.details.objectif}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

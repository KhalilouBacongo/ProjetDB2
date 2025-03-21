import React from "react";
import SolutionsTIC from "../assets/SolutionsTIC.jpg";
import AuditStrategiques from "../assets/Auditstratégiques.jpg";
import ConseilIngenierie from "../assets/Conseiletingénierieinformatique.jpg";
import MarketingDigital from "../assets/Marketingdigital.jpg";
import SolutionsGeo from "../assets/Solutionsdegéolocalisation.jpg";
import FournitureMateriel from "../assets/FournitureMatériel.jpg";
import Formation from "../assets/Formation.jpg";
import ConseilFiscal from "../assets/ConseilFiscal.jpg";
import CreationEntreprise from "../assets/CreationEntreprise.jpg";
import ServicesFinanciers from "../assets/ServicesFinanciers.jpg";
import BTP from "../assets/BTP.jpg";
import Simmobilier from "../assets/Simmobilier.jpg";
import Commerce from "../assets/Commerce.jpg";
import ImportExport from "../assets/ImportExport.jpg";
import DiversPrestations from "../assets/DiversPrestations.jpg";

const Blogs = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Titre Principal */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          DECIDE & BUILD : L’Innovation au Service de Votre Croissance
        </h1>
        <p className="text-lg mt-2">
          Fondée en 2022, DECIDE & BUILD (D&B) accompagne les entreprises avec
          des solutions technologiques innovantes.
        </p>
      </div>

      {/* Introduction avec Image */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src={SolutionsTIC}
          alt="Innovation Technologique"
          className="md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2 text-lg p-6">
          Chez DECIDE & BUILD, nous aidons les entreprises à exploiter les
          technologies modernes pour améliorer leur compétitivité.
        </p>
      </div>

      {/* Nos Valeurs */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Nos Valeurs et Notre Philosophie
        </h2>
        <p className="text-lg mb-4">
          Nous suivons trois principes fondamentaux pour garantir des services
          de qualité :
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Qualité :</strong> Des prestations adaptées aux attentes de
            nos clients.
          </li>
          <li>
            <strong>Responsabilité :</strong> Une approche rigoureuse et
            professionnelle.
          </li>
          <li>
            <strong>Écoute du client :</strong> Comprendre et répondre aux
            besoins spécifiques.
          </li>
        </ul>
      </div>

      {/* Nos Services */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple de section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={AuditStrategiques}
              alt="Audit et Conseil"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Audit et Conseil</h3>
            <p className="text-gray-700">
              Nous évaluons et conseillons les entreprises pour optimiser leur
              fonctionnement et améliorer leur rentabilité.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={MarketingDigital}
              alt="Marketing Digital"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Marketing Digital</h3>
            <p className="text-gray-700">
              Développement de stratégies digitales pour maximiser la visibilité
              des marques en ligne.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={Formation}
              alt="Formation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Formation</h3>
            <p className="text-gray-700">
              Accompagnement des professionnels dans le développement de leurs
              compétences techniques et managériales.
            </p>
          </div>
        </div>
      </div>

      {/* Nos Réalisations */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Nos Réalisations
        </h2>
        <p className="text-lg text-center">
          Nous avons accompagné plusieurs entreprises dans la mise en place de
          solutions performantes et innovantes.
        </p>
      </div>

      {/* Pourquoi Nous Choisir */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Pourquoi Choisir DECIDE & BUILD ?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-lg md:w-1/2 p-6">
            Travailler avec nous, c'est bénéficier de notre expertise, d'un
            accompagnement personnalisé et de solutions adaptées à vos besoins
            spécifiques.
          </p>
          <img
            src={ConseilIngenierie}
            alt="Expertise D&B"
            className="md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

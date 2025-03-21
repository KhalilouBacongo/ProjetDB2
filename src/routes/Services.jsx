import React from "react";
import { motion } from "framer-motion";
import NP1 from "../assets/NP1.png";
import Sbanner from "../assets/Sbanner.mp4";
import {
  faLaptopCode,
  faChartLine,
  faCogs,
  faBullhorn,
  faMapMarkerAlt,
  faServer,
  faChalkboardTeacher,
  faCalculator,
  faBuilding,
  faBriefcase,
  faHardHat,
  faHome,
  faStore,
  faTruckLoading,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importation des images
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
import { Link, NavLink } from "react-router";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Solutions en TIC",
      description:
        "Mettre à la disposition des entreprises et toutes organisations des solutions innovantes en matière de TIC...",
      icon: faLaptopCode,
      image: SolutionsTIC,
    },
    {
      id: 2,

      title: "Audit et études stratégiques",
      description:
        "Assurer les prestations d’audit, de schémas directeurs et toutes études dans le domaine des TIC...",
      icon: faChartLine,
      image: AuditStrategiques,
    },
    {
      id: 3,

      title: "Conseil et ingénierie informatique",
      description:
        "Fournir des services d’études, de conseils et d’ingénierie informatiques et télécoms...",
      icon: faCogs,
      image: ConseilIngenierie,
    },
    {
      id: 4,
      title: "Marketing digital",
      description:
        "Fournir des services de marketing digital pour optimiser la présence en ligne.",
      icon: faBullhorn,
      image: MarketingDigital,
    },
    {
      id: 5,

      title: "Solutions de géolocalisation",
      description:
        "Délivrer des solutions de positionnement et géolocalisation.",
      icon: faMapMarkerAlt,
      image: SolutionsGeo,
    },
    {
      id: 6,

      title: "Fourniture de matériel informatique",
      description: "Fournir du matériel informatique et de télécommunication.",
      icon: faServer,
      image: FournitureMateriel,
    },
    {
      id: 7,

      title: "Formation",
      description:
        "Offrir des programmes de formation adaptés aux besoins des entreprises.",
      icon: faChalkboardTeacher,
      image: Formation,
    },
    {
      id: 8,

      title: "Conseil comptable et fiscal",
      description:
        "Faire du conseil, suivi comptable et fiscal pour les entreprises.",
      icon: faCalculator,
      image: ConseilFiscal,
    },
    {
      id: 9,

      title: "Création d’entreprises et organisations",
      description:
        "Offrir des services de création de société, ONG, Associations et divers.",
      icon: faBuilding,
      image: CreationEntreprise,
    },
    {
      id: 10,

      title: "Services financiers, commerciaux et industriels",
      description:
        "Fournir des prestations de services diverses et toutes opérations financières...",
      icon: faBriefcase,
      image: ServicesFinanciers,
    },
    {
      id: 11,

      title: "BTP",
      description: "Services et solutions dans le secteur du BTP.",
      icon: faHardHat,
      image: BTP,
    },
    {
      id: 12,

      title: "Immobilier",
      description:
        "Toutes activités immobilières et prestations de services dans l'immobilier.",
      icon: faHome,
      image: Simmobilier,
    },
    {
      id: 13,

      title: "Commerce général et divers",
      description: "Services dans le domaine du commerce général et divers.",
      icon: faStore,
      image: Commerce,
    },
    {
      id: 14,

      title: "Import-Export",
      description:
        "Services d'import-export pour faciliter les échanges commerciaux.",
      icon: faTruckLoading,
      image: ImportExport,
    },
    {
      id: 15,

      title: "Diverses prestations de services",
      description:
        "Fourniture de diverses prestations de services adaptées aux besoins des clients.",
      icon: faHandHoldingUsd,
      image: DiversPrestations,
    },
  ];

  return (
    <>
      <div className="w-full h-[40vh] object-cover relative">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute inset-0 object-cover h-full w-full opacity-70"
        >
          <source src={Sbanner} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.img
            src={NP1}
            alt="Logo de DECIDE AND BUILD"
            className="mx-auto w-[230px] h-auto opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 10 }}
          />
        </div>
      </div>

      <div className="bg-gray-100 -mt-[60px] py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to={
                  service.id === 7
                    ? "/formation"
                    : `/services/service/${service.id}`
                }
              >
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-64 flex flex-col justify-end overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  {/* Image de fond avec opacité et saturation */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-80 saturate-150 hover:opacity-100 hover:saturate-100"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  {/* Contenu lisible avec overlay centré */}
                  <div className="absolute left-1/2 top-1/2 w-[94%] h-[94%] bg-black/50 hover:bg-black/20 hover:text-white duration-800 flex flex-col justify-center items-center text-center p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-white hover:text-red-500 text-[35px] relative p-6 rounded-xl shadow-[0_5px_15px_rgba(127,29,29,0.8)] hover:shadow-[0_8px_20px_rgba(127,29,29,1)] transition-all duration-300 h-64 flex flex-col justify-end overflow-hidden object-cover "
                    />
                    <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-gray-50 drop-shadow-md">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

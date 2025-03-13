import React from "react";
import {
  FaTools,
  FaChartLine,
  FaLaptopCode,
  FaBuilding,
  FaGlobe,
  FaChalkboardTeacher,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Asection = () => {
  const handleMoreServices = () => {
    // Logique pour rediriger l'utilisateur vers la page des services
    window.location.href = "/services"; // Exemple de redirection
  };

  return (
    <>
      {/* Section Présentation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 py-16 px-6 md:px-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          DECIDE AND BUILD (D&B)
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Fondée en 2022, D&B est une entreprise passionnée par l'innovation
          dans les TICS, le BTP et les services professionnels. Nous vous
          accompagnons pour répondre à vos besoins avec des solutions sur-mesure
          et innovantes.
        </p>
      </motion.div>

      {/* Section Nos Services */}
      <div className="bg-gray-100 py-16 px-6 md:px-16">
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Nos Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600"
          >
            Découvrez comment nous pouvons vous aider à construire votre avenir.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={FaLaptopCode}
              title="Solutions TIC"
              description="Innovation en Big Data, IA, Data Analytics et plus encore."
            />
            <ServiceCard
              icon={FaTools}
              title="Conseil & Ingénierie"
              description="Études, audits et développement de plateformes adaptées."
            />
            <ServiceCard
              icon={FaBuilding}
              title="BTP & Immobilier"
              description="Prestations dans la construction et gestion immobilière."
            />
            <ServiceCard
              icon={FaGlobe}
              title="Import-Export & Commerce"
              description="Solutions pour le commerce général et international."
            />
            <ServiceCard
              icon={FaChalkboardTeacher}
              title="Formation & Accompagnement"
              description="Formations professionnelles et suivi d'entreprise."
            />

            {/* Bouton "En savoir plus" */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.1, 1], // Animation de zoom
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              whileHover={{ scale: 1.15 }} // Effet zoom plus fort au survol
              className=" p-6 rounded-xl  transition-all duration-300 text-center cursor-pointer flex flex-col justify-center items-center  -mt-[15px] h-[180px]"
              onClick={handleMoreServices}
            >
              <FaArrowRight className="text-blue-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">
                En savoir plus
              </h3>
              <p className="text-gray-600 mt-2">
                Découvrez tous nos services en détail.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section Philosophie & Valeurs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white py-16 px-6 md:px-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Notre Philosophie & Valeurs
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Nous nous engageons à offrir des prestations de qualité avec une
          écoute active et une responsabilité accrue.
        </p>
      </motion.div>

      {/* Section Témoignages */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600"
          >
            Découvrez les retours de nos clients satisfaits !
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="Jean Dupont"
              role="CEO, Entreprise X"
              feedback="Une expérience incroyable ! Leur expertise a transformé notre projet et nous a permis de dépasser nos objectifs."
            />
            <Testimonial
              name="Claire Martin"
              role="Responsable Marketing, Entreprise Y"
              feedback="Une équipe réactive et passionnée ! Ils ont su comprendre nos besoins et livrer une solution parfaitement adaptée."
            />
            <Testimonial
              name="Marc Lefèvre"
              role="Directeur Technique, Entreprise Z"
              feedback="Un travail exceptionnel qui a vraiment contribué à la croissance de notre entreprise. Très satisfait des résultats !"
            />
          </div>
        </section>
      </div>
    </>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center flex-1"
  >
    <Icon className="text-blue-500 text-5xl mx-auto mb-4" />
    <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </motion.div>
);

const Testimonial = ({ name, role, feedback }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
  >
    <FaStar className="text-yellow-400 text-4xl mx-auto mb-4" />
    <p className="text-lg text-gray-600">"{feedback}"</p>
    <h3 className="text-xl font-semibold text-gray-800 mt-4">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </motion.div>
);

export default Asection;

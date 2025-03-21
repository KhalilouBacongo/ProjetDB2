import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contactsection = () => {
  // États pour stocker les valeurs du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [objet, setObjet] = useState("");

  // Fonction pour envoyer l'email via EmailJS
  function envoiEmail(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérifier si tous les champs sont remplis
    if (!nom || !email || !message || !objet) {
      toast.error("Prenez votre temps pour bien remplir les champs !");
      return;
    }

    // Récupérer les identifiants depuis les variables d'environnement
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Vérifier si les variables sont bien chargées
    if (!serviceID || !templateId || !publicKey) {
      console.error(
        "Erreur : certaines variables d'environnement sont manquantes."
      );
      toast.error("Problème de configuration. Vérifiez votre fichier .env.");
      return;
    }

    // Paramètres du template EmailJS
    const templateParams = {
      nom: nom,
      email: email,
      objet: objet,
      message: message,
    };

    // Envoi de l'email via EmailJS
    emailjs
      .send(serviceID, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Votre Email a bien été transféré ✌️");

        // Réinitialiser les champs du formulaire après l'envoi
        setNom("");
        setEmail("");
        setMessage("");
        setObjet("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email :", error);
        toast.error("Veuillez réessayer 🔴");
      });
  }

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Introduction captivante */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Restons en Contact
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Une question ? Un projet en tête ? Nous sommes à votre écoute et prêts
          à vous accompagner pour concrétiser vos idées.
        </p>
      </motion.div>

      {/* POUR LE BACK END ‼️⚠️*/}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulaire de Contact */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-lg space-y-4"
          onSubmit={envoiEmail}
        >
          <input
            onChange={(e) => {
              setNom(e.target.value);
            }}
            value={nom}
            type="text"
            placeholder="Votre Nom"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Votre Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            onChange={(e) => {
              setObjet(e.target.value);
            }}
            value={objet}
            type="text"
            placeholder="Objet"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            rows="4"
            placeholder="Votre Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          ></textarea>

          {/* POUR LE BACK END ‼️⚠️*/}
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded-md hover:bg-gray-700 transition-all"
          >
            Envoyer
          </button>
        </motion.form>

        {/* Informations de Contact */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-lg space-y-6"
        >
          {/* Téléphone */}
          <div className="flex items-center  space-x-4">
            <a
              href="tel:+225 07 07 83 73 50" //ELEMENT À MODIFIÉ
              className="flex items-center space-x-4"
            >
              <FaPhone className="text-gray-600 text-3xl  hover:text-violet-900 transition-all duration-1000" />
              <span className="text-gray-600 text-[24px] hover:tracking-[0.5px] hover:text-violet-900 transition-all duration-1000">
                {/* ELEMENT À MODIFIÉ */}
                +225 07 07 83 73 50
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 hover:text-violet-900 transition-all duration-1000">
            <a
              href="mailto:contact@decideandbuild.com"
              className="flex items-center space-x-4"
            >
              <FaEnvelope className="text-gray-600 text-[24px] hover:text-violet-900 transition-all duration-1000" />
              <span className="text-gray-600 text-[22px] hover:tracking-[0.5px] hover:text-violet-900 transition-all duration-1000">
                contact@decideandbuild.com
              </span>
            </a>
          </div>

          {/* Adresse (Google Maps) */}
          <div className="flex items-center space-x-4 hover:text-violet-900 transition-all duration-1000">
            <a
              href="https://www.google.com/maps?q=Abidjan,+Côte+d'Ivoire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <FaMapMarkerAlt className="text-gray-600 text-3xl hover:text-violet-900 transition-all duration-1000" />
              <span className="text-gray-600 text-[24px] hover:tracking-[0.5px]  hover:text-violet-900 transition-all duration-1000">
                Abidjan, Côte d'Ivoire
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Localisation - Ajouter Google Map ici */}
      {/* <div className="mt-12">
           Ajouter ici l'iframe de Google Maps ou un composant de carte interactif.
         </div> */}
      <section>
        {/* Localisation - Ajouter Google Map ici */}

        {/* À MODIFIER JUSTE APRÈS */}

        <div className="mt-12">
          <h2 className="text-center text-2xl font-bold">Notre Localisation</h2>
          <div className="w-full mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326.85644735684406!2d-3.9980147026278843!3d5.3298375174895956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb9ab5568ab1%3A0xfa11ecbe866a1b72!2sBnetd%2C%20CIGN!5e0!3m2!1sfr!2sci!4v1741690959410!5m2!1sfr!2sci"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0 shadow-xl rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactsection;

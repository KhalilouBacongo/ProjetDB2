import React from "react";
import Slider from "react-slick"; // Librairie du carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "react-feather"; // Icônes pour les flèches
import { motion } from "framer-motion"; // Pour l'animation du texte

// Import des images du carrousel
import a from "../assets/car/1.jpg";
import b from "../assets/car/2.jpg";
import c from "../assets/car/3.jpg";
import d from "../assets/car/4.jpg";
import e from "../assets/car/5.jpg";
import f from "../assets/car/6.jpg";
import g from "../assets/car/7.jpg";
import h from "../assets/car/8.jpg";
import i from "../assets/car/9.jpg";
import j from "../assets/car/10.jpg";
import k from "../assets/car/11.jpg";
import l from "../assets/car/12.jpg";
import m from "../assets/car/13.jpg";
import n from "../assets/car/14.jpg";
import o from "../assets/car/15.jpg";
import p from "../assets/car/16.jpg";
import q from "../assets/car/17.jpg";
import s from "../assets/car/18.jpg";
import r from "../assets/car/19.jpg";
import t from "../assets/car/20.jpg";
import Contactsection from "./section/Contactsection";

// À NE PAS TOUCHER
// Flèche suivante
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} absolute right-3 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer`}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <ArrowRight
        size={24}
        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-50 text-white"
      />
    </div>
  );
};
// Flèche précédente
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} absolute left-3 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer`}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <ArrowLeft
        size={24}
        className="bg-white bg-opacity-30 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-50 text-white"
      />
    </div>
  );
};

const Contact = () => {
  // Liste des images
  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, r, t];

  // Configuration du Slider
  const settings = {
    dots: false, // Pas de points de navigation
    infinite: true,
    speed: 1000, // Transition sur 2000ms
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 6s entre chaque image
    nextArrow: <NextArrow />, // Flèche suivante
    prevArrow: <PrevArrow />, // Flèche précédente
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full h-[50vh] relative object-cover">
        {/* Overlay noir avec flou */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10"></div>

        {/* Texte animé qui apparaît après 30s */}
        <div
          className="absolute  inset-0 z-20 flex items-center justify-center"
          style={{
            animation: "fadeInOut 10s ease-in-out infinite",
            animationDelay: "30s",
          }}
        >
          <motion.h2
            className="text-[50px] text-white font-bold lex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Créez un lien durable
          </motion.h2>
        </div>

        {/* Carrousel d'images */}
        <Slider {...settings} className="h-[50vh]">
          {images.map((img, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[50vh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Définition de l'animation fadeInOut */}
        <style>
          {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
        </style>
      </section>
      <Contactsection />
    </>
  );
};

export default Contact;

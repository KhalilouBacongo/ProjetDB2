import React, { useEffect, useState } from "react";
import BGV from "../assets/BGV.mp4";
import Asection from "./section/Asection";
import Lottie from "lottie-react";
import Scroll from "../assets/Scroll.json";

const Acceuil = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [reappear, setReappear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 5000);
    const hideTimer = setTimeout(() => setVisible(false), 6000);
    const reappearTimer = setTimeout(() => {
      setVisible(true);
      setFadeOut(false);
      setReappear(true);
    }, 10000); // 30s après la disparition (6s + 30s = 36s)

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearTimeout(reappearTimer);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute inset-0 object-cover h-full w-full"
        >
          <source src={BGV} type="video/mp4" />
        </video>

        <div className="relative z-10 h-full flex items-center justify-center text-white bg-black/50 backdrop-blur-[2px]">
          {visible && (
            <div
              className={`text-4xl md:text-6xl font-bold transition-opacity duration-2000 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } text-center space-y-4 p-8`}
            >
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
                Bienvenue à <br />
                <br /> <span className=" ">DECIDE AND BUILD</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold animate-bounce">
                Laissez-vous guider
              </p>
            </div>
          )}
        </div>

        {/* Animation Lottie pour le scroll */}
        <div className="flex justify-center mt-4 absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10">
          <Lottie
            animationData={Scroll}
            loop={true}
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>

      <div>
        <Asection />
      </div>
    </>
  );
};

export default Acceuil;

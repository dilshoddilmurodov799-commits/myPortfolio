import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import myPic from "../assets/myPic.png"
import Particles from "./reactbits/Particles";
import SpecularButton from "./reactbits/SpectacularButton";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col lg:flex-row">
      {/* Prism Background */}
      <div className="absolute inset-0">
       <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      {/* MOBILE & TABLET LAYOUT (LG down) */}
      <div className="lg:hidden relative w-full h-full flex flex-col items-center justify-start z-20 pt-28 pb-10">
        {/* Mobile Image - Top */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-96 h-96 sm:w-[500px] sm:h-[500px]  overflow-hidden shadow-2xl flex-shrink-0 relative"
        >
          <img
            src={myPic}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Mobile Name - Overlapping Image */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center select-none pointer-events-none z-20 -mt-12"
        >
          <h1
            className="
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.08em]
              text-white
            "
            style={{
              fontSize: "clamp(4.5rem, 16vw, 8rem)",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div>{"Dilshod"}</div>
            <div>{"Dilmurodov"}</div>
          </h1>
        </motion.div>

        {/* Mobile Buttons - Stack Vertically */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex flex-col gap-3 w-full px-6 sm:px-12 flex-shrink-0 mt-auto mb-0"
        >
          <SpecularButton
            size="md"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full"
          >
            {t("hero.viewWork")}
          </SpecularButton>

          <SpecularButton
            size="md"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => {
              if ((window as any).navigateTo) {
                (window as any).navigateTo("/resume");
              }
            }}
            className="w-full"
          >
            {t("hero.downloadResume")}
          </SpecularButton>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center text-white/50 text-sm select-none pointer-events-none mt-auto mb-4"
        >
          Scroll ↓
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT (LG and up) */}
      <div className="hidden lg:flex relative w-full h-full">
        {/* Bottom Left Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="absolute left-8 md:left-12 lg:left-16 bottom-[20vw] z-30 flex gap-5"
        >
          <SpecularButton
            size="md"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.viewWork")}
          </SpecularButton>

          <SpecularButton
            size="md"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => {
              if ((window as any).navigateTo) {
                (window as any).navigateTo("/resume");
              }
            }}
          >
            {t("hero.downloadResume")}
          </SpecularButton>
        </motion.div>

        {/* Desktop Name - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            z-20
            p-8 md:p-12 lg:p-16
            select-none
            pointer-events-none
          "
        >
          <h1
          
            className="
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.08em]
              text-white
              whitespace-nowrap
            "
            style={{
              fontSize: "clamp(3rem, 9vw, 10rem)",
            }}
          >
            <div>{"Dilshod"}</div>
            <div>{"Dilmurodov"}</div>
          </h1>
        </motion.div>

        {/* Desktop Right Bottom Image */}
        <div className="absolute bottom-0 right-0 z-10" style={{ width: "40%", height: "100%", 
          background:
      "linear-gradient(90deg, #000000 0%, #1e1e1e 40%, #2e2e2e 68%, #3a3a3a 84%, #555555 100%)",
           }}>  
          <img
            src={myPic}
            alt="Profile"
            className="h-full w-full object-cover object-top"
            style={{marginTop: "64px", transform: "translateX(-10%)"}}
          />
        </div>
      </div>
    </section>
  );
}
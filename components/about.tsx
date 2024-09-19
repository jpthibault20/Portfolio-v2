"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Moi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="À propos"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Après avoir obtenu un bac+5 en{" "}
        <span className="font-medium">Énergie, Électricité et Automatisme</span>, j'ai décidé de poursuivre ma passion pour la programmation et l'électronique. J’ai complété ma formation en développant des solutions pour des{" "}
        <span className="font-medium">systèmes embarqués</span> et je me suis diversifié en créant des{" "}
        <span className="font-medium">applications web</span>.{" "}
        <span className="italic">Ce que je préfère dans la programmation</span>, c'est résoudre des problèmes complexes et voir les résultats concrets. Mes compétences incluent{" "}
        <span className="font-medium">Next.js, React Native, Expo</span>, ainsi que l'utilisation de plateformes comme{" "}
        <span className="font-medium">Espressif et Arduino</span> pour la conception de systèmes embarqués. Toujours curieux, je cherche constamment à apprendre de nouveaux concepts.
      </p>
      <br></br>
      <p>
        <span className="italic">Quand je ne code pas</span>, je pratique le sport, en particulier le{" "}
        <span className="font-medium">vélo</span> en compétition, et je fais de la{" "}
        <span className="font-medium">moto</span> sur circuit.
      </p>

    </motion.section>
  );
}

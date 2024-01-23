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
      Après avoir obtenu un bac+5 en {" "}
        <span className="font-medium">Energie, Electricité et Automatisme</span>, 
        j'ai décidé de poursuivre ma passion pour la programmation J’ai complété 
        ma formation dans le{" "}
        <span className="font-medium">développement de software Embarqué</span>.{" "}
        <span className="italic">Ce que je préfère dans la programmation</span>, c'est
        la résolution de problèmes.  J' <span className="underline">aime</span> {" "}
        le sentiment d'avoir enfin trouvé une solution à un problème. Mes compétences 
        de prédilection sont {" "}
        <span className="font-medium">
        Arduino et Expressif {" "}
        </span>
        mais je maitrise également Raspberry, Pic, C, C++ et Python. Je cherche toujours
         à apprendre de nouvelles technologies.
      </p>
      <br></br>
      <p>
        <span className="italic">Quand je ne code pas</span>, 
        j'aime pratiquer du sport, en particulier le {" "}
        <span className="font-medium">vélo</span>{" "}
        ou je suis compétiteur à mes heures perdu. Et je suis en 
        train dé d’apprendre à piloter une {" "} 
        <span className="font-medium">moto</span>{" "} sur circuit.
      </p>
    </motion.section>
  );
}

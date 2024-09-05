"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Nous");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="À propos"
    >
      <SectionHeading>À propos de nous</SectionHeading>
      <p className="mb-3">
        Notre entreprise propose des services personnalisés en développement web, IoT, et mobile. Nous maîtrisons les technologies modernes pour créer des applications performantes, sécurisées et évolutives. Grâce à notre expertise en UX/UI, nous assurons des interfaces intuitives et un design soigné. Nous intégrons également des solutions IoT innovantes pour connecter vos dispositifs. Chaque projet est développé sur mesure, selon vos besoins. Nos compétences couvrent la création de sites web, d’applications mobiles et d’outils connectés. </p>
      <br />
      <p>Nous restons à la pointe des dernières tendances technologiques pour garantir une expérience utilisateur optimale et des performances maximales.


      </p>
    </motion.section>
  );
}

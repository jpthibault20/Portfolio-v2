import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import robotAraignee from "@/public/robotAraignée.jpg";
import teeShirtConnecte from "@/public/teeShirtConnect.jpg";
import homeAssistant from "@/public/homeAssistant.png";
import reactNextjs from '@/public/reacNextjs.png'

export const links = [
  {
    name: "Acceuil",
    hash: "#Acceuil",
  },
  {
    name: "Moi",
    hash: "#À propos",
  },
  {
    name: "Projets",
    hash: "#Projets",
  },
  {
    name: "Compétences",
    hash: "#Compétences",
  },
  {
    name: "Expérience",
    hash: "#expérience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Robot araignée autonome",
    description:
      "Pour un projet de fin d'anée, j'ai réaliser un robot de type araignée completement autonome (pour se déplacer, scaner la pièce, retour a l'origine).",
    tags: ["C++", "Arduino", "imprimante 3d", "Fusion 360"],
    imageUrl: robotAraignee,
  },
  {
    title: "Tee-shirt connectée",
    description:
      "Tee shirt médicale dans le but de corriger une posture et apporter un confort suplémentaire ",
    tags: ["espressif", "C", "Routing PCB", "cordova", "HTML", "CSS", "JavaScript"],
    imageUrl: teeShirtConnecte
  },
  {
    title: "Composant domotique",
    description:
      "Réalisation de composants actioneur et capteur dans le but de la réalisation d'un système domotique complet (chauffage, lumière, température, présence, ...)",
    tags: ["Home assistant", "esphome", "espressif", "Fusion 360", "Raspberry", "impression 3D"],
    imageUrl: homeAssistant,
  },

  {
    title: "Portfolio",
    description:
      "Création d'un protfolio responsive",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: reactNextjs,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "C++",
  "Python",
  "MATLAB",
  "Git",
  "Arduino",
  "Espressif",
  "Raspberry",
] as const;

export const experiencesData = [
  {
    title: "Trafic signalisation",
    location: "Metz, fr",
    description:
      "Ingénieur dans le développement de panneaux lumineux (stage + job étudiant)",
    icon: React.createElement(CgWorkAlt),
    date: "05.2018 - 09.2018",
  },
  {
    title: "BTS SN",
    location: "Metz, fr",
    description:
      "J'ai obtenue mon BTS Système Numérique au therme des 2 ans de formation",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Master EEA",
    location: "Metz, fr",
    description:
      "Je suis rentré en licence, puis en master que j'ai validé avec succé, master EEA (Energie, Electronqiue, et Automatisme).",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Décathlon",
    location: "Metz, fr",
    description:
      "vendeur omnicomerce (job étudiant).",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "LTG-tech",
    location: "Metz, fr",
    description:
      "Alternance au sein de LTG-Tech (start-up) en tant qu'ingénieur puis emploie à temps complet.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
] as const;
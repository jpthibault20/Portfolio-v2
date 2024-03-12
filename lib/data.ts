import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import robotAraignee from "@/public/robotAraignée.jpg";
import teeShirtConnecte from "@/public/teeShirtConnect.jpg";
import homeAssistant from "@/public/homeAssistant.png";
import reactNextjs from '@/public/reacNextjs.png'
import dataloImage from '@/public/datalogger.jpg'

export const links = [
  {
    name: "Accueil",
    hash: "#Accueil",
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
    name: "Expériences",
    hash: "#expériences",
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
      "Pour un projet de fin d'année, j'ai réalisé un robot de type araignée complètement autonome (pour se déplacer, scanner la pièce, retour à l'origine).",
    tags: ["C++", "Arduino", "imprimante 3d", "Fusion 360"],
    imageUrl: robotAraignee,
  },
  {
    title: "Tee-shirt connectée",
    description:
      "Tee-shirt médical dans le but de corriger une posture et apporter un confort supplémentaire.",
    tags: ["espressif", "C", "Routing PCB", "cordova", "HTML", "CSS", "JavaScript"],
    imageUrl: teeShirtConnecte
  },
  {
    title: "Composants domotique",
    description:
      "Réalisation de composants actionneurs et capteurs dans le but de la réalisation d'un système domotique complet (chauffage, lumière, température, présence, ...).",
    tags: ["Home assistant", "esphome", "espressif", "Fusion 360", "Raspberry", "impression 3D"],
    imageUrl: homeAssistant,
  },
  {
    title: "Portfolio",
    description:
      "Création d'un protfolio responsive.",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: reactNextjs,
  },
  {
    title: "Enregistreur",
    description:
      "Réalisation d'un enregistreur autonome permettant la relève de nombreuses données pour un suivi en live des véhicules équipés.",
    tags: ["Espressif", "C", "NMEA2000", "freeRTOS", "PCB"],
    imageUrl: dataloImage,
  },
] as const;


export const skillsData = [
  "C",
  "C++",
  "HTML",
  "CSS",
  "Python",
  "MATLAB",
  "JavaScript",
  "freeRTOS",
  "Espressif",
  "Git",
  "Arduino",
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
      "J'ai obtenue mon BTS Système Numérique au terme des 2 ans de formation",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Master EEA",
    location: "Metz, fr",
    description:
      "Je suis rentré en licence, puis en master que j'ai validé avec succès, master EEA (Energie, Electronqiue, et Automatisme).",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Decathlon",
    location: "Metz, fr",
    description:
      "Vendeur omnicomerce (job étudiant).",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "LTG-tech",
    location: "Metz, fr",
    description:
      "Alternance au sein de LTG-Tech (start-up) en tant qu'ingénieur puis emploi à temps complet.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "JP-developpement",
    location: "Metz, fr",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - now",
  },
] as const;
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import robotAraignee from "@/public/robotAraignée.jpg";
import teeShirtConnecte from "@/public/teeShirtConnect.jpg";
import homeAssistant from "@/public/homeAssistant.png";
import dataloImage from '@/public/datalogger.jpg'
import dashboardAeroConnect from '@/public/dashboardAeroConnect.png'
import dasboardPulsePeak from '@/public/dashboardPulsePeak.png'

export const links = [
  {
    name: "Accueil",
    hash: "#Accueil",
  },
  {
    name: "Nous",
    hash: "#À propos",
  },
  {
    name: "Nos projets",
    hash: "#Projets",
  },
  {
    name: "Nos compétences",
    hash: "#Compétences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "SAAS planning pour ULM/AVION",
    description:
      "SAAS optimisant les rendez-vous instructeur-élève, le suivi des performances, la location de machines et le paiement intégré.",
    tags: ["React", "Strip", "NextAuth", "Prisma", "PostgreSQL", "Typescript", "Next.js", "Tailwind", "Hostinger", "Vercel"],
    imageUrl: dashboardAeroConnect,
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
    title: "PulsePeak",
    description:
      "Création d'une application mobile permettant d'accompagné des sportifs dans la réssite de leurs objectifs physiques.",
    tags: ["React Native", "Tailwind", "Typescript", "Supabase", "deep learning", "machine learning", "Expo", "stripe", "Prisma"],
    imageUrl: dasboardPulsePeak,
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
  "freeRTOS",
  "Espressif",
  "Arduino",
  "Raspberry",
  "Python",
  "React",
  "Next.js",
  "Tailwind",
  "Typescript",
  "JavaScript",
  "Stripe",
  "Prisma",
  "PostgreSQL",
  "NextAuth",
  "appwrite",
  "Supabase",
  "Expo",
  "deep learning",
  "machine learning",
  "Hostinger",
  "Vercel",
  "React Native",
  "MATLAB",
  "Git",
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
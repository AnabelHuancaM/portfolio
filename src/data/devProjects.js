import React from "../components/icons/react.astro";
import Html from "../components/icons/html.astro";
import Css from "../components/icons/css.astro";
import Tailwind from "../components/icons/tailwind.astro";
import Bootstrap from "../components/icons/bootstrap.astro";
import Astroicon from "../components/icons/astroicon.astro";
import Wordpress from "../components/icons/wordpress.astro";
import Angular from "../components/icons/angular.astro";
import FigmaIcon from "../components/icons/figma.astro";

export const TAGS = {
    ASTRO: {
        name: "Astro.js",
        class: "bg-[#d63ad67a] text-white",
        icon: Astroicon,
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "bg-[#6015b580] text-white",
        icon: Bootstrap,
    },
    CSS: {
        name: "CSS",
        class: "bg-[#1B779F] text-white",
        icon: Css,
    },
    HTML: {
        name: "HTML",
        class: "bg-[#e34f266e] text-white",
        icon: Html,
    },
    REACT: {
        name: "React.js",
        class: "bg-[#006c81] text-white",
        icon: React,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind,
    },
    FIGMA: {
        name: "Figma",
        class: "bg-[#003159] text-white",
        icon: FigmaIcon,
    },
    WORDPRESS: {
        name: "WordPress",
        class: "bg-[#08426A] text-white",
        icon: Wordpress,
    },
    ANGULAR: {
        name: "Angular",
        class: "bg-[#f40c5261] text-white font-semibold",
        icon: Angular,
    },
};

export const devProjects = [
    {
        title: "MyTravel",
        description:
            "Diseño y desarrollo de una plataforma web para explorar destinos turísticos, enfocada en organizar y presentar información de viaje de forma clara y accesible.",
        link: "https://web-my-travel.vercel.app/",
        github: "https://github.com/AnabelHuancaM/myTravel",
        image: "/projects/myTravel.webp",
        tags: [
            TAGS.HTML,
            TAGS.CSS,
            TAGS.BOOTSTRAP,
            TAGS.FIGMA,
            TAGS.REACT,
        ],
    },
    {
        title: "Aura Café & Bites",
        description:
            "Diseño y desarrollo de una website para una cafetería, enfocada en presentar su propuesta, productos y experiencia de marca mediante una interfaz visual e interactiva.",
        link: "https://aura-cafe-bites.vercel.app/",
        github: "https://github.com/AnabelHuancaM/auraCafe",
        image: "/projects/auraCafe.webp",
        tags: [
            TAGS.HTML,
            TAGS.CSS,
            TAGS.REACT,
            TAGS.TAILWIND,
            TAGS.FIGMA,
        ],
    },
];
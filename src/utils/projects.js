import game from '../assets/projects/2048.jpg'

import hero from "../assets/projects/hero.jpg"
import sports from "../assets/projects/sports.avif"
import xApp from "../assets/projects/xapp.jpg"


export const projects = [
    {
        title: "Hero App",
        subtitle: {
            pt: "Heroj aplikacija je tu da vam pruži znanje potrebno da bi savladali osnove prve pomoći.",
            en: "Hero app is here to provide you with the knowledge and guidance you need to confidently administer first aid."
        },
        git: "https://github.com/asmer085/Hero-App",
        path: "https://youtu.be/32LVcmwEJ_s",
        technologies: ["React", "Styled-Components", "MySQL", "Django"],
        img: hero
    },
    {
        title: "X app",
        subtitle: {
            pt: "Aplikacija koja olakšava upravljanje projektima. Nešto slično kao Jira",
            en: "An app that makes managing projects far more easier. Something like Jira.",
        },
        technologies: ["React", "PostreSQL", "Node.js"],
        path: "https://www.youtube.com/watch?v=jmM596b_cbA",
        git: "https://github.com/asmer085/X-project-React-Nodejs",
        img: xApp,
        isMobile: true
    },
    {
        title: "Sports App",
        subtitle: {
            pt: "Mobilna aplikacija gdje možete provjeriti historiju ili posljednje fudbalske rezultate.",
            en: "A mobile app where you can see the history or latest football results."
        },
        technologies: ["Kotlin", "TheSportsDB API"],
        path: null,
        git: "https://github.com/asmer085/SportsApp-AndroidStudio",
        img: sports,
    },
    {
        title: "2048 Game",
        subtitle: {
            pt: "Jednostavna 2048 igra razvijena u Javi",
            en: "Simple 2048 game built in Java"
        },
        technologies: ["Java Swing"],
        path: null,
        git: "https://github.com/asmer085/2048-game",
        img: game
    },
    
]
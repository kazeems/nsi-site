import { getPortfolio } from "../data/projects.js";
import { topNav, bottomNav, credits } from "../data/top-nav.js";

getPortfolio();
document.querySelector('.js-top-nav').innerHTML = topNav;
document.querySelector('.bottom-links').innerHTML = bottomNav;
document.querySelector('.credits').innerHTML = credits;



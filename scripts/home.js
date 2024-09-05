import { renderServices } from "../data/services.js";
import { shortIntro } from "../data/short-intro.js";
import { getPortfolio } from "../data/projects.js";
import { homeContentHTML } from "../data/homeContent.js";
import { topNav, bottomNav, credits } from "../data/top-nav.js";


document.querySelector('.main-content-space').innerHTML = homeContentHTML;
document.querySelector('.js-short-intro').innerHTML = shortIntro;
document.querySelector('.js-top-nav').innerHTML = topNav;
document.querySelector('.bottom-links').innerHTML = bottomNav;
document.querySelector('.credits').innerHTML = credits;


getPortfolio();
renderServices();





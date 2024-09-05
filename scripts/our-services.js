import { renderServices } from "../data/services.js";
import { topNav, bottomNav, credits } from "../data/top-nav.js";

document.querySelector('.js-top-nav').innerHTML = topNav;
document.querySelector('.bottom-links').innerHTML = bottomNav;
document.querySelector('.credits').innerHTML = credits;


renderServices();
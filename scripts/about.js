import { topNav, bottomNav, credits } from "../data/top-nav.js";
import { aboutContent } from "../data/short-intro.js";

const aboutHTML = `
  <div class="mb-5">
      <img class="img-fluid w-100 rounded mb-5" src=${aboutContent.imageUrl} alt="">
      <h2 class="text-uppercase mb-4">${aboutContent.title}</h2>
      ${aboutContent.body}
  </div>
`;

document.querySelector('.js-top-nav').innerHTML = topNav;
document.querySelector('.bottom-links').innerHTML = bottomNav;
document.querySelector('.credits').innerHTML = credits;
document.querySelector('.js-about').innerHTML = aboutHTML;


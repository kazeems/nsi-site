export const projects = [
  {
    projectName: 'Construction of 3 blocks of 3 bedrooms duplex',
    description: 'NAF Valley Estate Abuja, 2021.',
    imageUrl: `img/portfolio-1.jpg`,
    filterClass: 'construction'
  }, {
    projectName: 'Ongoing construction of 30 x one bedroom accommodation',
    description: 'NAF Base Enugu.',
    imageUrl: `img/portfolio-3.jpg`,
    filterClass: 'construction'
  }, {
    projectName: 'Construction of St. Augustine Catholic Church',
    description: 'NAF Base Makurdi.',
    imageUrl: `img/portfolio-2.jpg`,
    filterClass: 'construction'
  }
];

export function getPortfolio() {
  let portfolioHTML = '';


  projects.forEach((singleProject) => {
    portfolioHTML += `
      <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item">
        <div class="position-relative portfolio-box">
            <img class="img-fluid w-100" src="${singleProject.imageUrl}" alt="">
            <a class="portfolio-title shadow-sm" href="">
                <p class="h5 text-capitalize">${singleProject.projectName}</p>
                <span class="text-body"><i class="fa fa-map-marker-alt text-primary me-2"></i>${singleProject.description}</span>
            </a>
            <a class="portfolio-btn" href="${singleProject.imageUrl}" data-lightbox="portfolio">
                <i class="bi bi-plus text-white"></i>
            </a>
        </div>
      </div>`;
  });

  document.querySelector('.portfolio-container').innerHTML = portfolioHTML;
}
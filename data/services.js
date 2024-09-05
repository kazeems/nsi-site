export function renderServices() {
  let servicesHTML = '';

  services.forEach((service) => {
    servicesHTML += `
  <div class="col-lg-4 col-md-6">
  <div class="service-item bg-white d-flex flex-column align-items-center text-center">
        <img class="img-fluid" src="${service.imageSrc}" alt="">
        <div class="service-icon bg-white">
            ${service.centerIconElement}
        </div>
        <div class="px-4 pb-4">
            <h4 class="text-uppercase mb-3">${service.name}</h4>
            <p>${service.shortDescription}</p>
        </div>
    </div>
  </div>
  `
  });

  document.querySelector('.js-services').innerHTML = servicesHTML;
}

const services = [
  {
    id: 'service-1',
    imageSrc: 'img/service-1.jpg',
    centerIconElement: '<i class="fa fa-3x fa-building text-primary"></i>',
    name: 'Construction Works',
    shortDescription: '',
    longDescription: ''
  }, {
    id: 'service-2',
    imageSrc: 'img/service-2.jpg',
    centerIconElement: '<i class="fa fa-3x fa-ship text-primary"></i>',
    name: 'Export/Imports',
    shortDescription: '',
    longDescription: ''
  }, {
    id: 'service-3',
    imageSrc: 'img/service-3.jpg',
    centerIconElement: '<i class="fa fa-3x fa-tractor text-primary"></i>',
    name: 'Agro-Allied',
    shortDescription: '',
    longDescription: ''
  }, {
    id: 'service-4',
    imageSrc: 'img/service-4.jpg',
    centerIconElement: '<i class="fa fa-3x fa-shopping-cart text-primary"></i>',
    name: 'General Merchandise',
    shortDescription: '',
    longDescription: ''
  }
];
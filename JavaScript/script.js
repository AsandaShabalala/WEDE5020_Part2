// creating the image lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".lightBox-img");
//safe gaurd for other pages
if(images){
  images.forEach(image => {

    image.addEventListener('click',  e =>{
      lightbox.classList.add('active');
  
      const img = document.createElement('img');
      img.src = image.src;
      while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    })
  })

  lightbox.addEventListener('click', e => {

    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
  })
}

// FAQs 
const questions = document.querySelectorAll('.faq-button');
if(questions){
  questions.forEach(question => {

    question.addEventListener('click', e => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
    })
  })
}

// menu sidebar

const menuButton = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.sidebar');
const exitButton = document.querySelector('.exit-sidebar-button');

menuButton.addEventListener('click', () => {
    sidebar.classList.add('active');
});
sidebar.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  sidebar.classList.remove('active');
})
exitButton.addEventListener('click', e =>{
  sidebar.classList.remove('active');
})

//date and time
function updateDateTime(){
  const now = new Date();
  const option ={

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minutes: '2-digit',
    second: '2-digit',
  }

  document.getElementById('datetime').textContent= now.toLocaleDateString('en-US', option);
}
updateDateTime();

//Search feature on service page

const searchService = document.getElementById('searviceSearch');
//safe gaurd for other pages
if(searchService){
  searchService.addEventListener('keyup', e =>{
    let currentValue = e.target.value;
    let services = document.querySelectorAll('h3.title');

    services.forEach(service =>{
      if(service.textContent.toLowerCase().includes(currentValue.toLowerCase())){
        service.parentNode.parentNode.style.display = 'flex';
      }else{
        service.parentNode.parentNode.style.display = 'none';
      }
    });
  });
}
//service loading animation
const services = document.querySelectorAll('.service');
//safe gaurd for other pages
if(services){
  services.forEach(service =>{
    let randomAnimationDelay = Math.floor(Math.random() * 500);
    service.style.animation = `fadeIn 1s .${randomAnimationDelay}s ease forwards`;
  });
}

//Veiw more services 
const viewMore = document.getElementById('view-more-button');
const moreServices = document.querySelector('.more-services');

//if to safe gauerd so other webpages donot get errors
if (viewMore) {
  viewMore.addEventListener('click', e =>{
  const moreServices = document.querySelector('.more-services');

  moreServices.classList.toggle('active');
  if(moreServices.classList.contains('active')){
    viewMore.textContent = 'Hide Services';
  }
  else{
    viewMore.textContent = 'View All Services'
  }
});
}




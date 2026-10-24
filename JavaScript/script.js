// creating the image lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".lightBox-img");
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

// FAQs 
const questions = document.querySelectorAll('.faq-button');
questions.forEach(question => {

  question.addEventListener('click', e => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
  })
})

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

// form submit, imade this so they can be a pop up when the form is submitted and the page should
// not reload since that was kind of annoying me sir
function formSubmittedAlert(){

  event.preventDefault();
  alert('Form submitted successfully');
  event.target.reset();
}
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

// creating the image lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
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

// menu bar


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

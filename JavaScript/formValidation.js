// I felt like my one script was getting a little too long Sir so i created a separate file for form validation and submission of both the 
//contact form and service enquiry form

// Contact form validation
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

//getting elements of whether the page has the services form or contact form an i will use an if statement to run what ever is found
const contactForm = document.getElementById('contactForm');
const servicesForm = document.getElementById('servicesForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {

    //clear validation messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("surnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let valid = true;

    // Checking the name
    if (name.value.trim() === '') {
      document.getElementById('nameError').innerHTML =
        'Please enter your name';
      valid = false;
    }
    else if (name.value.trim().length < 4 || /[0-9]/.test(name.value)) {
      document.getElementById('nameError').innerHTML =
        'Name must be at least 4 characters and cannot contain numbers';
      valid = false;
    }

    // Checking the surname using the same logic as the name
    if (surname.value.trim() === '') {
      document.getElementById('surnameError').innerHTML =
        'Please enter your surname';
      valid = false;
    }
    else if (surname.value.trim().length < 4 || /[0-9]/.test(surname.value)) {
      document.getElementById('surnameError').innerHTML =
        'Surname must be at least 4 characters and cannot contain numbers';
      valid = false;
    }

    // Checking the email
    if (email.value.trim() === '') {
      document.getElementById('emailError').innerHTML =
        'Please enter your email';
      valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('emailError').innerHTML =
        'Please enter a valid email address';
      valid = false;
    }

    //checking the phone number if its empty or valid
    if (phone.value.trim() === "") {
    document.getElementById("phoneError").innerHTML =
      "Please enter your phone number";
    valid = false;
    }
    else if (!/^\+?[0-9]{10,15}$/.test(phone.value.trim())) {
      document.getElementById("phoneError").innerHTML =
        "Enter a valid phone number (10-15 digits).";
      valid = false;
      
    }

    if(message.value.trim() === ''){
      document.getElementById('messageError').innerHTML = "Please enter a mesaage"
      valid = false;
    }

    e.preventDefault();
    if (valid === false) {
      return;     //if validation fails the must stop here 
    }

    //checking if the form got submitted successfully and providing accurate user feedback
    const result = document.getElementById('result');
    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        result.textContent = 'Your enquiry has been submitted successfully!';
        result.style.color = 'green';
        contactForm.reset();
      } else {
        result.textContent = 'Sorry, your enquiry could not be submitted. Please try again.';
        result.style.color = 'red';
      }
    })
    .catch(error => {
      result.textContent = 'Something went wrong. Please try again later.';
      result.style.color = 'red';
    });

  });
}

// Services form validation
if (servicesForm){
  servicesForm.addEventListener('submit', (e) => {

    //clear validation messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("surnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let valid = true;

    // Checking the name
    if (name.value.trim() === '') {
      document.getElementById('nameError').innerHTML =
        'Please enter your name';
      valid = false;
    }
    else if (name.value.trim().length < 4 || /[0-9]/.test(name.value)) {
      document.getElementById('nameError').innerHTML =
        'Name must be at least 4 characters and cannot contain numbers';
      valid = false;
    }

    // Checking the surname using the same logic as the name
    if (surname.value.trim() === '') {
      document.getElementById('surnameError').innerHTML =
        'Please enter your surname';
      valid = false;
    }
    else if (surname.value.trim().length < 4 || /[0-9]/.test(surname.value)) {
      document.getElementById('surnameError').innerHTML =
        'Surname must be at least 4 characters and cannot contain numbers';
      valid = false;
    }

    // Checking the email
    if (email.value.trim() === '') {
      document.getElementById('emailError').innerHTML =
        'Please enter your email';
      valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('emailError').innerHTML =
        'Please enter a valid email address';
      valid = false;
    }

    //checking the phone number if its empty or valid
    if (phone.value.trim() === "") {
    document.getElementById("phoneError").innerHTML =
      "Please enter your phone number";
    valid = false;
    }
    else if (!/^\+?[0-9]{10,15}$/.test(phone.value.trim())) {
      document.getElementById("phoneError").innerHTML =
        "Enter a valid phone number (10-15 digits).";
      valid = false;
      
    }

    if(message.value.trim() === ''){
      document.getElementById('messageError').innerHTML = "Please enter a mesaage"
      valid = false;
    }

    e.preventDefault();
    if (valid === false) {
      return;     //if validation fails the must stop here 
    }

    //checking if the form got submitted successfully and providing accurate user feedback
    const result = document.getElementById('result');
    fetch(servicesForm.action, {
      method: 'POST',
      body: new FormData(servicesForm)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        result.textContent = 'Your enquiry has been submitted successfully!';
        result.style.color = 'green';
        servicesForm.reset();
      } else {
        result.textContent = 'Sorry, your enquiry could not be submitted. Please try again.';
        result.style.color = 'red';
      }
    })
    .catch(error => {
      result.textContent = 'Something went wrong. Please try again later.';
      result.style.color = 'red';
    });
  });
  
}
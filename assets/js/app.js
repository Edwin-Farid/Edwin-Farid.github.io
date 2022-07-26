// toggle navigation menu and icons
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// remove active class from and icon on link click
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
}

document.addEventListener('click', removeActiveLinkClass);

// toggle theme and store selection within local storage
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme','active');
    }else{
        localStorage.removeItem('darkTheme');
    }
};

themeToggleButton.addEventListener('click', toggleTheme);

// scroll reveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.main-title',{origin:'top'});
sr.reveal('.scroll-reveal-left',{origin:'left'});
sr.reveal('.scroll-reveal-right',{origin:'right'});
sr.reveal('.tech-stack-item',{interval: 250});
sr.reveal('.section-title, .section-subtitle-container',{
    origin: 'top',
    interval: 250});
sr.reveal('.portfolio-card',{interval: 500});
sr.reveal('.form-container, .footer',{
    origin: 'top'});

// form
const scriptURL = "https://script.google.com/macros/s/AKfycbwwav2Cf-5OmRp1-EwpJev4fpFS7wKTiEaPVThnUlwOcQQxIobzm1zVE_4xlWJrHwP5GQ/exec";
const form = document.forms["berkahit-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit
  // tampilan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
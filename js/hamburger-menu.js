const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector(".header__menu");
const burgerBtn = document.querySelector(".burger-btn");

// burgerBtn.addEventListener("click", hideShow);

// if (ipad.matches) {
//    burgerButton.addEventListener('click', hideShow);
// } else {
//    ipad.addListener(validation);
// }

ipad.addListener(validation);
validation(ipad);


function validation(event) {
   if (event.matches) {
      burgerBtn.addEventListener("click", hideShow);
   } else {
      burgerBtn.removeEventListener("click", hideShow);
   }
}

function hideShow() {

   if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
   }
   else {
      menu.classList.add("is-active");
   }
   
}






// const link1 = document.querySelector("li");
// const link1 = document.querySelector("#portafolio");
// const link2 = document.querySelector("#eventos");
// const link3 = document.querySelector("#trabajemos");

// console.log(burgerBtn);



// link1.addEventListener("click", hideShow);
// link2.addEventListener("click", hideShow);
// link3.addEventListener("click", hideShow);




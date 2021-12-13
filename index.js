// Getting Elements 

const ShowBtn = document.querySelector(".icon");
const ShowBtn1 = document.querySelector(".icon1");
const ShowBtn2 = document.querySelector(".icon2");
const Description = document.querySelector(".firstQuestion");
const Description1 = document.querySelector(".secondQuestion");
const Description2 = document.querySelector(".thirdQuestion");

ShowBtn.addEventListener("click", function () {

    Description.classList.toggle("HideDiscription");
});
ShowBtn1.addEventListener("click", function () {

    Description1.classList.toggle("HideDiscription");
});
ShowBtn2.addEventListener("click", function () {

    Description2.classList.toggle("HideDiscription");
});


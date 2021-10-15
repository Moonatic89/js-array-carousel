//Array

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//#region Init Variables

//buttons
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
let carouselIndex = 0;

//showcase
let showcaseImage = document.querySelector(".showcase>.imgContainer");
let showcaseTitle = document.querySelector(".showcaseDesc>h1");
let showcaseText = document.querySelector(".showcaseDesc>.text");

console.log(showcaseImage);
//#endregion

//Add event listeners
btnPlus.addEventListener("click", indexPlus); ///Change function
btnMinus.addEventListener("click", indexMinus); ///Change function

//Function indexPlus

function indexPlus() {

    //Increment index by 1
    carouselIndex += 1;

    //BONUS check if index is > 4 
    if (carouselIndex > 4) {
        carouselIndex = 0
    }

    showcaseUpdate();

    debugConsoleLog(carouselIndex);
}

function indexMinus() {
    //Increment index by 1
    carouselIndex -= 1;

    //BONUS check if index is > 4 
    if (carouselIndex < 0) {
        carouselIndex = 4
    }

    showcaseUpdate();

    debugConsoleLog(carouselIndex);
}

function showcaseUpdate() {
    showcaseImage.innerHTML = `<img src="./asset/${items[carouselIndex]}" alt=""></img>`;
    showcaseTitle
    showcaseText
}




//This is only for debug purposes
function debugConsoleLog(intToCheck) {
    console.log(intToCheck);
}
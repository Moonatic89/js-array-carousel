
//#region Base Array

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

//#endregion

//#region Init Variables

//buttons
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
let carouselIndex = 0;

//showcase
let showcaseImage = document.querySelector(".showcase>.imgContainer");
let showcaseTitle = document.querySelector(".showcaseDesc>h1");
let showcaseText = document.querySelector(".showcaseDesc>.text");

//#endregion

//Add event listeners
btnPlus.addEventListener("click", indexMinus); ///Change function
btnMinus.addEventListener("click", indexPlus); ///Change function

//Function indexPlus

function indexPlus() {

    //Increment index by 1
    carouselIndex += 1;

    //This recalls the main update function, that updates everything
    mainUpdate();
}

function indexMinus() {

    //Increment index by 1
    carouselIndex -= 1;

    //This recalls the main update function, that updates everything
    mainUpdate();
}

function mainUpdate() {

    indexControl();
    showcaseUpdate();
    listUpdate();
}


//BONUS endless cycle
function indexControl() {

    if (carouselIndex > 4) {
        carouselIndex = 0

    } else if (carouselIndex < 0) {
        carouselIndex = 4
    }
}

function showcaseUpdate() {
    showcaseImage.innerHTML = `<img src="./asset/${items[carouselIndex]}" alt=""></img>`;
    showcaseTitle.innerHTML = title[carouselIndex];
    showcaseText.innerHTML = text[carouselIndex];
}

function listUpdate() {
    let listItem0 = document.getElementById("item0");
    let listItem1 = document.getElementById("item1");
    let listItem2 = document.getElementById("item2");
    let listItem3 = document.getElementById("item3");
    let listItem4 = document.getElementById("item4");
    let listItem = document.getElementById(`item${carouselIndex}`);

    listItem0.classList.add("overlay");
    listItem0.classList.remove("customBord");
    listItem1.classList.add("overlay");
    listItem1.classList.remove("customBord");
    listItem2.classList.add("overlay");
    listItem2.classList.remove("customBord");
    listItem3.classList.add("overlay");
    listItem3.classList.remove("customBord");
    listItem4.classList.add("overlay");
    listItem4.classList.remove("customBord");

    listItem.classList.add("customBord");
    listItem.classList.remove("overlay");
}



//This is only for debug purposes, that's why i didnt used a void function
function debugConsoleLog(intToCheck) {
    console.log(intToCheck);
}
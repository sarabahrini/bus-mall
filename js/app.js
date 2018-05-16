'use strict';



var allPictures = []; // global variable  
var cantBeThis = []; // global variable 
var object1 = [];
var object2 = [];
var object3 = [];

//linking js to html
var imgEl1 = document.getElementById('image-1');
var imgEl2 = document.getElementById('image-2');
var imgEl3 = document.getElementById('image-3');
var sectionEl = document.getElementById('clickerBox');
var resultList = document.getElementById('voteResult');

var pic1Index = 0;
var pic2Index = 0;
var pic3Index = 0;

var checkTotalClicks = 0;

// global object with general this properties
function Picture(src, name) {
    this.picName = name;
    this.url = src;

    this.clicked = 0;
    allPictures.push(this);
}


//adding an eventListener
imgEl1.addEventListener('click', wasClicked1)
imgEl2.addEventListener('click', wasClicked2)
imgEl3.addEventListener('click', wasClicked3)

//eventHandler 
function wasClicked1() { // once we reach the total 25 clicks show the result

    object1.clicked++;
    checkTotalClicks++;
    if (checkTotalClicks = 25) {
        showResults();
    }

    chooseNewImg();

};


//eventHandler 
function wasClicked2() { // once we reach the total 25 clicks show the result

    object2.clicked++;
    checkTotalClicks++;
    if (checkTotalClicks = 25) {
        showResults();
    }

    chooseNewImg();
};



//eventHandler 
function wasClicked3() { // once we reach the total 25 clicks show the result

    object3.clicked++;
    checkTotalClicks++;
if(checkTotalClicks=25){
    showResults(); 
}

chooseNewImg();

};


new Picture("img/bag.jpg", "bag");
new Picture("img/banana.jpg", "banana");
new Picture("img/bathroom.jpg", "bathroom");
new Picture("img/boots.jpg", "boots");
new Picture("img/breakfast.jpg", "breakfast");
new Picture("img/bubblegum.jpg", "bubblegum");
new Picture("img/chair.jpg", "chair");
new Picture("img/cthulhu.jpg", "cthulhu");
new Picture("img/dog-duck.jpg", "bag");
new Picture("img/dragon.jpg", "dragon");
new Picture("img/pen.jpg", "pen");
new Picture("img/pet-sweep.jpg", "pet-sweep");
new Picture("img/scissors.jpg", "scissors");
new Picture("img/sweep.png", "sweep");
new Picture("img/shark.jpg", "shark");
new Picture("img/tauntaun.jpg", "tauntaun");
new Picture("img/unicorn.jpg", "unicorn");
new Picture("img/usb.gif", "usb");
new Picture("img/water-can.jpg", "water-can");
new Picture("img/wine-glass.jpg", "wine-glass");




function chooseNewImg() {  // pick a random picture from allPictures array // avoid duplication

    do {
        var index = Math.floor(Math.random() * 20);
        object1 = allPictures[index];
    }
    while (cantBeThis.includes(object1))
    cantBeThis.push(object1);
    imgEl1.src = object1.url;


    do {
        var index = Math.floor(Math.random() * 20);
        object2 = allPictures[index];
    }
    while (cantBeThis.includes(object2))
    cantBeThis.push(object2);
    imgEl2.src = object2.url;


    do {
        var index = Math.floor(Math.random() * 20);
        object3 = allPictures[index];
    }
    while (cantBeThis.includes(object3))
    cantBeThis.push(object3);
    imgEl3.src = object3.url;
}

chooseNewImg();


function showResults() {


};

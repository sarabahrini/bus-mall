'use strict';



var allPictures = []; // global variable  

//elements to be displayed 
var imgEl1 = document.getElementById('bag');
var imgEl2 = document.getElementById('banana');
var imgEl3 = document.getElementById('bathroom');

var pic1Index = 0;
var pic2Index = 0;
var pic3Index = 0;


// global object with general this properties
function Picture(name, src){
this.picName = name;
this.url = src;
this.clicked = 0;
allPictures.push(this);
}


imgEl1.addEventListener('click', function(){
    this.clicked++;
    var randomIndex = Math.floor((Math.random() * allPictures.length));
    imgEl1.src = allPictures[randomIndex].url;
});

// imgEl2.addEventListener('click', function(){
//     this.clicked++;
//     var randomIndex = Math.floor((Math.random() * allPictures.length));
//     imgEl2.src = allPictures[randomIndex].url;
// });

// imgEl3.addEventListener('click', function(){
//     this.clicked++;
//     var randomIndex = Math.floor((Math.random() * allPictures.length));
//     imgEl3.src = allPictures[randomIndex].url;
// });


new Picture("img/bag.jpg","bag");
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
new Picture("img/shark.jpg", "shark");
new Picture("img/sweep.png", "sweep");
new Picture("img/shark.jpg", "shark");
new Picture("img/tauntaun.jpg", "tauntaun");
new Picture("img/unicorn.jpg", "unicorn");
new Picture("img/usb.gif", "usb");
new Picture("img/water-can.jpg", "water-can");
new Picture("img/wine-glass.jpg", "wine-glass");

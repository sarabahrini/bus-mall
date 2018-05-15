'use strict';



var allPictures = []; // global variable  

//elements to be displayed 
var imgEl1 = document.getElementById('image-1');
var imgEl2 = document.getElementById('image-2');
var imgEl3 = document.getElementById('image-3');

var pic1Index = 0;
var pic2Index = 0;
var pict3Index = 0;


// global object with general this properties
function Picture(src,name){
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


// //Helper functions
// //================new pictures ================
// function chooseNewPicture() {
//     checkTotalClicks();

//     var previous1 = picIndex1; // 0
//     var previous2 = picIndex1; // 1
//     var previous3 = picIndex1; // 2

//     do{
//         pic2Index = Math.floor(Math.random() * allPictures.length);
//       } while (previous1 === pic1Index || previous2 === pic1Index || previous3 === pic1Index)
// }


// //==============================
// function renderResult(){
//     for(var i in allPictures){
//         var newLiEl = document.createElement('li');
//         newLiEl.textContent = allPictures[i].name+ ' clicked : ' + allPictures[i].clicked + 'Times';
//         resultUl.appendChild(newLiEl);
//     }
// }
// renderResults();


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

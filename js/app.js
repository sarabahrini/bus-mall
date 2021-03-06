'use strict';

var allPictures = []; // global variable  
var object1 = [];
var object2 = [];
var object3 = [];


//linking js to html
var imgEl1 = document.getElementById('0');
var imgEl2 = document.getElementById('1');
var imgEl3 = document.getElementById('2');
var sectionEl = document.getElementById('clickerBox');
var resultList = document.getElementById('voteResult');

// setting up a counter for number of clicks for each picture
var pic1Index = 0;
var pic2Index = 1;
var pic3Index = 2;

var checkTotalClicks = 0;

// Arrays to hold data for the chart
var votes = [];
var titles = [];

// global object with general this properties
function Picture(src, name) {
    this.name = name;
    this.url = src;
    this.clicked = 0;
    allPictures.push(this);
};

if(localStorage.allPictures){
    allPictures=JSON.parse(localStorage.getItem('allPictures'));
} else {

  console.log("local storage test");


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

}


//Event Listeners
//this is to make sure we are only counting the clicks ON THE PICTURES ONLY
sectionEl.addEventListener('click', sectionCallback);


function sectionCallback(event) {
    totalClicks();
// console.log(allPictures[event.target.id]);
    if (event.target.id) {
        // console.log(allPictures);
        checkTotalClicks++;
        allPictures[event.target.id].clicked++;
        // allPictures[event.target.id].clicked++;

        chooseNewImg();
    } else {
        alert('click on an image');
    }
}

//to create result list in our page we do this 
function renderResults() {
    for (var i in allPictures) {
        var newLiEl = document.createElement('li');
        newLiEl.textContent = allPictures[i].name + ' clicked : ' + allPictures[i].clicked + ' Times';
        resultList.appendChild(newLiEl);
    }
}

function totalClicks() {
    // console.log(checkTotalClicks)
    if (checkTotalClicks === 25) {
        drawChart();
        localStorage.setItem('allPictures', JSON.stringify(allPictures));
        renderResults();
        sectionEl.removeEventListener('click', sectionCallback);
    }
}

function updateChartArrays() {
    for (var i = 0; i < allPictures.length; i++) {
        console.log(allPictures);
      titles[i] = allPictures[i].name;
      votes[i] = allPictures[i].clicked;
    }
  }

  function vote(thisPicture){
    for(var i = 0; i < allPictures.length; i++){
      if(thisPicture === allPictures[i].clicked){
          allPictures[i].votes++; 
          updateChartArrays();
      }
    }
}

 document.getElementById('clickerBox').addEventListener('click',function(event){
     if(event.target.id !== 'clickerBox') {
        vote(event.target.id);
     }
 });


// function chooseNewImg() {  // pick a random picture from allPictures array // avoid duplication



function chooseNewImg() {  // pick a random picture from allPictures array // avoid duplication
console.log(cantBeThis)
var cantBeThis = [pic1Index,pic2Index,pic3Index];
console.log(cantBeThis)

    do{
        pic1Index = Math.floor(Math.random() * allPictures.length);
      } while (cantBeThis.includes(pic1Index));
      cantBeThis.push(pic1Index);
    
      do{
        pic2Index = Math.floor(Math.random() * allPictures.length);
      } while (cantBeThis.includes(pic2Index));
      cantBeThis.push(pic2Index);
    
      do {
        pic3Index = Math.floor(Math.random() * allPictures.length);
      } while (cantBeThis.includes(pic3Index));


    // object1 = allPictures[pic1Index];
    imgEl1.src = allPictures[pic1Index].url;
    imgEl1.id = pic1Index

    
    // object2 = allPictures[pic2Index];
    imgEl2.src = allPictures[pic2Index].url;
    imgEl2.id = pic2Index;

    
    // object3 = allPictures[pic3Index];
    imgEl3.src = allPictures[pic3Index].url;
    imgEl3.id = pic3Index;
}
 // Chart Stuff

 function drawChart() {
 updateChartArrays();
 var data = {
    labels: titles, // titles array we declared earlier
    datasets: [{
        label:'Bus-Mall Results',
        data: votes, // votes array we declared earlier
        backgroundColor: [
          'bisque',
          'darkgray',
          'burlywood',
          'lightblue',
          'navy'
        ],
        hoverBackgroundColor: [
          'darkgreen',
          'darkgreen',
          'darkgreen',
          'darkgreen',
          'darkgreen'
        ]
      }]
  };
  
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx,{
      type: 'bar',
      data: data,
      options: {
        legend: {
          labels: {
            fontColor: 'darkgreen',
            fontSize: 18
          }
        },
        responsive: false,
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1.0
          }
        }]
      }
    });
  }

// chooseNewImg();

// function showResults() {


// };
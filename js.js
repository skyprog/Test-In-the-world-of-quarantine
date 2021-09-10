const pandemicStartMap = "XX0X10010X000X010X0";
let pandemicEndMap = "";

const x = "X";
const zero = "0";
const one = "1";

let total = 0;
let infected = 0;
let percentage = 0;

const box = document.querySelector(".box-container");
const box2 = document.querySelector(".box-container2");
const total_num = document.querySelector(".total");
const infected_num = document.querySelector(".infected");
const percentage_num = document.querySelector(".percentage");
let colorsForMap = ""; 
let box1_box2;
let chooseMap;

//pandemicStartMap

function Maps(chooseMap, box1_box2){
  for (let i = 0; i < chooseMap.length; i++) {
    if (chooseMap[i] == x) {
      boxForMap('blue_ocean-x', box1_box2);
    } else if (chooseMap[i] == zero) {
      boxForMap("green_uninfected-0", box1_box2);
    } else if (chooseMap[i] == one) {
      boxForMap("red_infected-1", box1_box2);
    }
  }
  function boxForMap(colorsForMap, box1_box2) {
      let div = document.createElement('div');
      div.className = colorsForMap;
      box1_box2.append(div);
  }
}

Maps(pandemicStartMap, box);

//pandemicEndMap

for (let i = 0; i < 1; i++) {
  pandemicEndMap = pandemicStartMap.split("01").join("11").split("10").join("11");
}

Maps(pandemicEndMap, box2);

for (let i = 0; i < pandemicEndMap.length; i++) {
  if (pandemicEndMap[i] == zero) {
    total = total + 1;
  } else if (pandemicEndMap[i] == one) {
    total = total + 1;
    infected = infected + 1;
  }
}

percentage = infected / total * 100;

total_num.innerHTML = 'Total: ' + total;
infected_num.innerHTML = 'Infected: ' + infected;
percentage_num.innerHTML = 'Percentage: ' + percentage + '%';
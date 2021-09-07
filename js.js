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
const total_num = document.querySelector(".total_num");
const infected_num = document.querySelector(".infected");
const percentage_num = document.querySelector(".percentage");

//pandemicStartMap

for (let i = 0; i < pandemicStartMap.length; i++) {
  if (pandemicStartMap[i] == x) {
    let div = document.createElement('div');
    div.className = "blue_ocean-x";
    box.append(div);

  } else if (pandemicStartMap[i] == zero) {
    let div = document.createElement('div');
    div.className = "green_uninfected-0";
    box.append(div);

  } else if (pandemicStartMap[i] == one) {
    let div = document.createElement('div');
    div.className = "red_infected-1";
    box.append(div);
  }
}

//pandemicEndMap

for (let i = 0; i < 1; i++) {
  pandemicEndMap = pandemicStartMap.split("01").join("11")
  pandemicEndMap = pandemicEndMap.split("10").join("11")
}

for (let i = 0; i < pandemicEndMap.length; i++) {
  if (pandemicEndMap[i] == x) {
    let div = document.createElement('div');
    div.className = "blue_ocean-x";
    box2.append(div);

  } else if (pandemicEndMap[i] == zero) {
    let div = document.createElement('div');
    div.className = "green_uninfected-0";
    box2.append(div);

  } else if (pandemicEndMap[i] == one) {
    let div = document.createElement('div');
    div.className = "red_infected-1";
    box2.append(div);
  }
}

for (var i = 0; i < pandemicEndMap.length; i++) {
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

// import data from "./data.json" assert { type: "json" };

// let chartBars = document.querySelector(".section__charts__week");

// let values = [];

// data.forEach((element) => {
//   values.push(element.amount);
//   chartBars.innerHTML += `
//           <div class="section__charts__week__bar">
//             <div div class="section__charts__week__bar__label" >$${element.amount}</div >
//                 <div class="section__charts__week__bar__day">${element.day}</div>
//         </div >`;
// });

// let maxHeightBar = 200;
// let maxValue = Math.max(...values);

// let bars = document.querySelectorAll(".section__charts__week__bar");

// bars = [...bars];

// bars.forEach((bar) => {
//   let currentValue = parseFloat(bar.childNodes[1].innerText.slice(1));
//   let currentHeight = (currentValue * maxHeightBar) / maxValue;
//   bar.style.height = `${currentHeight}px`;
//   if (currentValue == maxValue) {
//     bar.style.backgroundColor = "hsl(186, 34%, 60%)";
//   }

//   bar.addEventListener("mouseover", (event) => {
//     if (event.target.clasName == "section__charts__week__bar__day") {
//       let labelElement = event.target.childNodes[1];
//       labelElement.style.display = "block";
//     }
//   });
//   bar.addEventListener("mouseout", (event) => {
//     if (event.target.clasName == "section__charts__week__bar__day") {
//       let labelElement = event.target.childNodes[1];
//       labelElement.style.display = "none";
//     }
//   });
// });

import data from "./data.json" assert { type: "json" };

let chartBarsContainer = document.querySelector(".section__charts__week");
let maxBarHeight = 25;

let values = [];

data.forEach((element) => {
  values.push(element.amount);
  chartBarsContainer.innerHTML += `
          <div class="section__charts__week__bar">
            <div div class="section__charts__week__bar__label" >$${element.amount}</div >
                <div class="section__charts__week__bar__day">${element.day}</div>
        </div >`;
});

let maxValue = Math.max(...values);

let bars = document.querySelectorAll(".section__charts__week__bar");
bars = [...bars];

bars.forEach((bar) => {
  let actualExpense = bar.childNodes[1].innerText;
  let actualExpenseNumber = parseFloat(actualExpense.slice(1));

  if (maxValue == actualExpenseNumber) {
    bar.style.backgroundColor = "hsl(186, 34%, 60%)";
  }

  let alturaActual = (actualExpenseNumber * maxBarHeight) / maxValue;

  bar.style.height = `${alturaActual}vh`;

  bar.addEventListener("mouseover", (event) => {
    if (event.target.className != "section__charts__week__bar__day") {
      let labelElement = event.target.childNodes[1];
      labelElement.style.display = "block";
    }
  });
  bar.addEventListener("mouseout", (event) => {
    if (event.target.className != "section__charts__week__bar__day") {
      let labelElement = event.target.childNodes[1];
      labelElement.style.display = "none";
    }
  });
});

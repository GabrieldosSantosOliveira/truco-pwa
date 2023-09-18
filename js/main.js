// window.onload = () => {
//   "use strict";
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("./sw.js");
//   }
// };
let time_one = 0;
let time_two = 0;
let pontosOne = 0;
let pontosTwo = 0;
let nomeTimeOne = "";
let nomeTimeTwo = "";
const view = () => {
  document.getElementById("time_one").innerHTML = nomeTimeOne ;
  document.getElementById("pontos_one").innerHTML = time_one;
  document.getElementById("time_two").innerHTML =  nomeTimeTwo ;
  document.getElementById("pontos_two").innerHTML = time_two;

}
const addName = (time) => {
  if (time === "time_one") {
    nomeTimeOne = document.getElementById("name_one").value;
    console.log(nomeTimeOne)
  } else {
    nomeTimeTwo = document.getElementById("name_two").value;
  }
}
const addOne = (time) => {
  if (time === "time_one") {
    time_one++;
  } else {
    time_two++;
  }
  view()
}
const addThree = (time) => {
  if (time === "time_one") {
    time_one += 3;
  } else {
    time_two += 3;
  }
  view()
}
const addSix = (time) => {
  if (time === "time_one") {

    time_one += 6;
  } else {
    time_two += 6;
  }
  view()
}
const addTwelve = (time) => {
  if (time === "time_one") {
    time_one += 12;
  } else {
    time_two += 12;
  } view()
}
const reset = () => {
  time_one = 0;
  time_two = 0;
  view()
}
const Vencedor = (time, func) => {
  if (time === "time_one") {
    if (time_one >= 12) {
      pontosOne++;
      document.getElementById("pontos_one").innerHTML =  pontosOne;

      alert("Time 1 Venceu!")
    } else {
      func("time_one")
    }
  } else {
    if (time_two >= 12) {
      pontosTwo++;
      document.getElementById("pontos_two").innerHTML =  pontosTwo;
      alert("Time 2 Venceu!")
    } else {
      func('time_two')
    }
  }
}

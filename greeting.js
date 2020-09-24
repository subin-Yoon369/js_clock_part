/*const subinInfo = {
  name: "subin",
  age: "30",
  gender: "woman",
  homeTown: "Gwangju",
  favorite: "eatting snack",
  somedayBuyList: "computer",
  hobby: ["pray", "watching twitch", "watching youtube"],
  favFood: [
    { name: "pizza", fatty: "true" },
    { name: "snack", fatty: "true" },
  ],
};

console.log(subinInfo.favFood[0]);
console.log(subinInfo.hobby[1]);

function sayHello(potato, pizza) {
  return `Hello ${potato} you are ${pizza} years old`;
}

const greetSubin = sayHello("subin", 30);
console.log(greetSubin);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, a) {
    return a * a;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);

const minus = calculator.minus(47, 25);
console.log(minus);

const multiple = calculator.multiple(12, 12);
console.log(multiple);

const divide = calculator.divide(24, 6);
console.log(divide);

const square = calculator.square(8, 8);
console.log(square);

console.log(plus, minus, multiple, divide, square);

if (10 === 5) {
  console.log("lalala");
} else if (10 === "10") {
  console.log("hahahah");
} else {
  console.log("goooooooood");
}

if (12 * 2 > 6 * 2 && 10 === 10) {
  console.log("you did a good job");
} else {
  console.log("try again");
}

if (5 * 7 < 6 * 2 || 4 === 4) {
  console.log("amazing");
} else {
  console.log("nice");
}*/

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Yo!! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();

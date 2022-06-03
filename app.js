function Submit() {
  let newText = document.getElementById("InputName").value;
  let newAmount = parseInt(document.getElementById("InputAmount").value);
  Counter();
  Display(newAmount);
  ListCreator(newText, newAmount);
}

let total = 0;
let hasPayed = 0;
const lista = document.querySelector("#payList");
const result = document.getElementById("result");
const divided = document.getElementById("division");

function Counter() {
  hasPayed++;
}

function Display(amount) {
  total += amount;
  result.textContent = "$" + total;
  const divisionResult = total / hasPayed;
  divided.textContent = "$" + divisionResult.toFixed(2);
}

function ListCreator(name, amount) {
  let li = document.createElement("li");
  li.textContent = name + ": $" + amount;
  lista.appendChild(li);
}

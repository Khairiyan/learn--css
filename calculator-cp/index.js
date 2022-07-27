let saveOperator = "";
let stringTampilan = "";

//handle when the number is pressed. It renders the number into #input element
function number(number) {
  // TODO: answer here
  stringTampilan += number;
  document.getElementById("input").value = stringTampilan;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {

  // TODO: answer here
  if (operator === ".") {
    stringTampilan += operator;
    document.getElementById("input").value = stringTampilan;
  } else if (operator == "AC") {
    stringTampilan = "";
    document.getElementById("input").value = stringTampilan;
  } else if (operator == "Del") {
    stringTampilan = stringTampilan.slice(0, -1);
    document.getElementById("input").value = stringTampilan;
  } else {
    saveOperator = operator;
    stringTampilan += operator;
    document.getElementById("input").value = stringTampilan;
  }
}


//handle when = button is pressed. It renders the result into #input element
function calculate() {
  // TODO: answer here
  let angka1 = 0;
  let angka2 = 0;
  if (saveOperator === "+") {
    arrNum = stringTampilan.split("+");
    angka1 = parseFloat(arrNum[0]);
    angka2 = parseFloat(arrNum[1]);
    stringTampilan = angka1 + angka2;
    document.getElementById("input").value = stringTampilan;
  } else if (saveOperator === "-") {
    arrNum = stringTampilan.split("-");
    stringTampilan = parseFloat(arrNum[0]) - parseFloat(arrNum[1]);
    document.getElementById("input").value = stringTampilan;
  } else if (saveOperator === "*") {
    arrNum = stringTampilan.split("*");
    stringTampilan = parseFloat(arrNum[0]) * parseFloat(arrNum[1]);
    document.getElementById("input").value = stringTampilan;
  } else if (saveOperator === "/") {
    arrNum = stringTampilan.split("/");
    stringTampilan = parseFloat(arrNum[0]) / parseFloat(arrNum[1]);
    document.getElementById("input").value = stringTampilan;
  }
}

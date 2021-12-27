let arrNum = new Array();
let arrOpe = new Array();
let i = 0;
let result = 0.0;

// input
function play(n) {
  document.getElementById('record').innerText += n;
  if (parseInt(n) >= 0 && parseInt(n) < 10) {
    document.getElementById('result').innerText += n;
  }
  else {
    arrOpe[i] = n;
    arrNum[i] = document.getElementById('result').innerText;
    document.getElementById('result').innerText = "";
    i++;
  }
}
document.getElementById('equal').onclick = function () {
  // calculate
  result = parseInt(arrNum[0]); 
  arrNum[i] = document.getElementById('result').innerText;
  for (i = 0; i < arrOpe.length; i++) {
    if (arrOpe[i] == '+') {
      result += parseInt(arrNum[i + 1]);
    }
    if (arrOpe[i] == '-') {
      result -= parseInt(arrNum[i + 1]);
    }
    if (arrOpe[i] == '*') {
      result *= parseInt(arrNum[i + 1]);
    }
    if (arrOpe[i] == '/') {
      result /= parseInt(arrNum[i + 1]);
    }
  }
  // print
  document.getElementById('result').innerText = result;
  i = 0;
}
// reset
document.getElementById('reset').onclick = function () {
  document.getElementById('result').innerText = "";
  document.getElementById('record').innerText = "";
  result = 0.0;
  arrNum.splice(0, arrNum.length);
  arrOpe.splice(0, arrOpe.length);
  i = 0;
}

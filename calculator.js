let arr = new Array();
let i = 0;
let middle;
let number1 = "";
let number2 = "";
let result = 0.0;

function play(n) {
  if(n != "equal") {
    arr[i] = n;
    i++;
    if(n == "+" || n == "-" || n == "*" || n == "/") {
      document.getElementById('result').innerText = "";
    }
    else {
      document.getElementById('result').innerText += n;
    }
  }
}

document.getElementById('equal').onclick = function() {
  if(arr.indexOf('+') >= 0) {
    middle = arr.indexOf('+');
  }
  if(arr.indexOf('-') >= 0) {
    middle = arr.indexOf('-');
  }
  if(arr.indexOf('*') >= 0) {
    middle = arr.indexOf('*');
  }
  if(arr.indexOf('/') >= 0) {
    middle = arr.indexOf('/');
  }

  for(n = 0; n < middle; n++) {
    number1 += arr[n];
  }
  for(n = middle+1; n < i; n++){
    number2 += arr[n];
  }

  if(arr[middle] == "+") {
    result = parseFloat(number1) + parseFloat(number2);
  }
  if(arr[middle] == "-") {
    result = parseFloat(number1) - parseFloat(number2);
  }
  if(arr[middle] == "*") {
    result = parseFloat(number1) * parseFloat(number2);
  }
  if(arr[middle] == "/") {
    result = parseFloat(number1) / parseFloat(number2);
  }
  document.getElementById('result').innerText = result;
  console.log(number1+arr[middle]+number2+"="+result);
  number1 = result;
  number2 = "";
  arr.splice(0,arr.length);
  i = 0;
}

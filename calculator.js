
function init(){
  alert('hola bebe')
}

function addValue(){
  var result = document.getElementById("result")
  console.log(result);
  var one = document.getElementById("one");
  one.onclick = function(e) {
    result.textContent = result.textContent + "1";
  }
}

function addValue(number){
  var result = document.getElementById("result");
  var one = document.getElementById(number);
  return result.textContent = result.textContent + number;
}

function reset(){
  var result = document.getElementById("result");
  return result.textContent = "";
}

function calculate(){
  var res = 0;
  var result = document.getElementById("result");
  var splitedResult = result.textContent.trim().split(/(\+|\-|\*|\/)/g);
  console.log('splited', splitedResult)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  splitedResult.reduce((acc, el, index) => {
    //res = resolve(acc, el);
    console.log('previo',acc, el, splitedResult[index + 1])
    res = resolve(acc, el, splitedResult[index + 1])
    console.log('final',acc, el, splitedResult[index + 1])
  })
  console.log('res',res)
  return result.textContent = res;
}

function resolveBis(a,b){
  switch(operator){
    case '+':
      result = parseFloat(a) + parseFloat(b);
      break;
    case '-':
      result = parseFloat(a) - parseFloat(b);
      break;
    case '*':
      result = parseFloat(a) * parseFloat(b);
      break;
    case '/':
      result = parseFloat(a) / parseFloat(b);
      break;      
  }
  console.log('result', result);
  return result;
}

function resolve(a,operator,b){
  switch(operator){
    case '+':
      result = parseFloat(a) + parseFloat(b);
      break;
    case '-':
      result = parseFloat(a) - parseFloat(b);
      break;
    case '*':
      result = parseFloat(a) * parseFloat(b);
      break;
    case '/':
      result = parseFloat(a) / parseFloat(b);
      break;      
  }
  console.log('result', result);
  return result;
}

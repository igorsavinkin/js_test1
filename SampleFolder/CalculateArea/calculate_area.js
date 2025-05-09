let length;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById('length').value);
  width = parseFloat(document.getElementById('width').value);
  let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function countTotal() {
  let sum = parseFloat(document.getElementById('grocery1').value);
  sum = sum + parseFloat(document.getElementById('grocery2').value); 
  sum = sum + parseFloat(document.getElementById('grocery3').value);
  document.getElementById('sum').innerText = `The total groceries' cost is: ${sum}`;
}
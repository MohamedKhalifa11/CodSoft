let result = document.getElementById('result');

function appendChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = '';
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    alert('Invalid expression!');
  }
}
let lastKey = "";
let string = "";

document.addEventListener("keydown", (event) => {
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0" ||
    event.key == "/" ||
    event.key == "*" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "."
  ) {
    dis(event.key);
  }

  // console.log(event.key);

  if (event.key == "Enter" || event.key == "=") {
    solve();
  }

  if (event.key == "c" || event.key == "C") {
    clearScreen();
  }

  if (event.key == "Backspace" || event.key == "Delete") {
    backspace();
  }
});

// Function that display value
function dis(val) {
  document.getElementById("screen").innerHTML += val;
  string = document.getElementById("screen").innerHTML;
  lastKey = string.charAt(string.length - 1);
}

// Function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("screen").innerHTML;
  let y = eval(x);
  document.getElementById("screen").innerHTML = y;
  string = document.getElementById("screen").innerHTML;
}

// Function that clear the screen
function clearScreen() {
  document.getElementById("screen").innerHTML = "";
}

function backspace() {
  let newString = string.slice(0, -1);
  string = newString;
  document.getElementById("screen").innerHTML = string;
}

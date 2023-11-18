var input = document.getElementById("Name");
var input1 = document.getElementById("email");
var input2 = document.getElementById("number");

var btn = document.getElementById("btn");

btn.addEventListener("click", handleclick);
function handleclick(e) {
  if (input.value === "") {
    if (input.className.includes("success")) {
      input.classList.remove("success");
    }
    input.classList.add("fail");
  } else {
    if (input.className.includes("fail")) {
      input.classList.remove("fail");
    }
    input.classList.add("success");
  }

  if (input1.value === "") {
    if (input1.className.includes("success")) {
      input1.classList.remove("success");
    }
    input1.classList.add("fail");
  } else {
    if (input1.className.includes("fail")) {
      input1.classList.remove("fail");
    }
    input1.classList.add("success");
  }

  if (input2.value === "") {
    if (input2.className.includes("success")) {
      input2.classList.remove("success");
    }
    input2.classList.add("fail");
  } else {
    if (input2.className.includes("fail")) {
      input2.classList.remove("fail");
    }
    input2.classList.add("success");
  }
}

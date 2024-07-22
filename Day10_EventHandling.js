// Day 10: Event Handling

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".paragraph").textContent = "New paragraph! ";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.querySelector("img").addEventListener("dblclick", function () {
  this.style.display = this.style.display === "none" ? "block" : "none";
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.querySelector("p").addEventListener("mouseover", function () {
  this.style.backgroundColor = "blue";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

document.querySelector("p").addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.querySelector(".inputfield").addEventListener("keydown", function (e) {
  console.log(e.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.querySelector(".input1").addEventListener("keyup", function () {
  document.querySelector(".div2").textContent = this.value;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = new FormData(this);
  formData.forEach((value, key) => {
    console.log(key + ": " + value);
  });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.querySelector(".dropdown").addEventListener("change", function () {
  document.querySelector(".p4").textContent = this.value;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.querySelector("#list").addEventListener("click", (e) => {
  e.target.tagName === "LI" ? console.log(e.target.textContent) : undefined;
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.querySelector(".addbtn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Newly born boy! ";
  document.querySelector(".ul2").appendChild(li);
});

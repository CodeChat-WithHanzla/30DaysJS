// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("element").textContent = "Software engg.";

// Task 2: Select an HTML element by its class and change its background color.

document.getElementsByClassName(".element2")[0].style.backgroundColor =
  "purple";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement("div");
div.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
document.querySelector("body").appendChild(div);

// Task 4: Create a new li element and add it to an existing ul list.
const li = document.createElement("li");
li.innerHTML = "<h1>New Li Created! </h1>";
document.querySelector("ul").appendChild(li);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
document.querySelector(".element3").remove();

// Task 6: Remove the last child of a specific HTML element.
document.querySelector("ul").lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://images.pexels.com/photos/15378172/pexels-photo-15378172/free-photo-of-landmark-81-skyscraper-towering-over-buildings-in-saigon-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

// Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector(".element4").classList.add("text-center");
document.querySelector(".element4").classList.remove("text-center");

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const p = document
  .querySelector("p")
  .addEventListener("click", () => (p.innerHTML = "New Paragraph"));

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.querySelector(".element5").addEventListener("mouseover", () => {
  document.querySelector(".element5").style.borderColor = "blue";
});

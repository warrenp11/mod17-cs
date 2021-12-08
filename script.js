// Option 1:
// Code Example Using a data-* Attribute
const buttonEl = document.getElementById("my-button");

const clickHandler = function () {
  let count = parseInt(this.getAttribute("data-count"));
  count++;

  this.setAttribute("data-count", count);
  this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener("click", clickHandler);

// Option 2:
// Code Example Using a Closure
const buttonEl = document.getElementById("my-button");

const clickHandler = function () {
  let count = 0;

  return function () {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener("click", clickHandler());

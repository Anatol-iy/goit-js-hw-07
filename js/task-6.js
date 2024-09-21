function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    input: document.querySelector("#controls input"),
    createBtn: document.querySelector("button[data-create]"),
    destroyBtn: document.querySelector("button[data-destroy]"),
    boxesContainer: document.querySelector("#boxes"),
  };

  refs.createBtn.addEventListener("click", () => {
    const amount = Number(refs.input.value);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert("Please enter a number between 1 and 100");
      return;
    }

    createBoxes(amount);
    refs.input.value = ""; 
  });

  refs.destroyBtn.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10; 
      const box = document.createElement("div");
      box.className = "box";
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
    refs.boxesContainer.innerHTML = ""; 
    refs.boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    refs.boxesContainer.innerHTML = ""; 
  }


});

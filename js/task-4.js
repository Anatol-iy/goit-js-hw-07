
function handleSubmit(event) {
  event.preventDefault(); 
  const form = event.currentTarget; 
  const formObject = {};ъ
  let allFilled = true;

  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];

    if (element.tagName === "INPUT" && element.type !== "submit") {
      if (element.value.trim() === "") {
        allFilled = false;
      }
      formObject[element.name] = element.value.trim();
    }
  }

  if (!allFilled) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formObject); 
  form.reset();
}


document.querySelector(".login-form").addEventListener("submit", handleSubmit);

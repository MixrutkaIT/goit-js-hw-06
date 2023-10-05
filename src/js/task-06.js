const elemInput = document.getElementById("validation-input");
elemInput.addEventListener('blur', () => {
      const inputText = elemInput.value;
      const dataLength = Number(elemInput.getAttribute("data-length"));

      if (inputText.length === dataLength) {
        elemInput.classList.remove("invalid");
        elemInput.classList.add("valid");
      } else {
        elemInput.classList.remove("valid");
        elemInput.classList.add("invalid");
      }
    });
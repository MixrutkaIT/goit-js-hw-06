const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); 
      const formData = new FormData(loginForm);
      const userData = {};

      formData.forEach((value, key) => {
        userData[key] = value;
      });

      if (userData.email && userData.password) {
        console.log(userData);
        loginForm.reset();
      } else {
        alert('Всі поля повинні бути заповнені');
      }
    });
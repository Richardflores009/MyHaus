const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-login");
    const password = document.querySelector("#password-input-login");
  
    fetch("/api/landlord-routes/login", {
      method: "post",
      body: JSON.stringify({
        email = email.value,
        password = password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/landlord-dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector(".form-wrapper")
    .addEventListener("submit", loginFormHandler);
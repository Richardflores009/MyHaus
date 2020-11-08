const loginLandlord = async function(event) {
    event.preventDefault();
    const email = document.querySelector("#email");
    console.log('hellooooooo??', email)
    const password = document.querySelector("#password");
  if (email && password) {
    fetch("/api/landlord/login", {
      method: "post",
      body: JSON.stringify({
        email = email.value,
        password = password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/");
      })
      .catch(err => console.log(err));
  }
    
  };
  
  document
    .querySelector("#landlordSubmit")
    .addEventListener("submit", loginLandlord);
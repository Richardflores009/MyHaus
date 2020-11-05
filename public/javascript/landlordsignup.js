const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const llemailEl = document.querySelector("#llemail-input-signup");
    const llpasswordEl = document.querySelector("#llpassword-input-signup");
    const llfirstNameEl = document.querySelector("#llfirstname-input-signup");
    const lllastNameEl = document.querySelector("#lllastname-input-signup");
    
  
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        llemail: llemailEl.value,
        llpassword: llpasswordEl.value,
        llfirstname: llfirstNameEl.value,
        lllastname: lllastNameEl.value,
       
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);

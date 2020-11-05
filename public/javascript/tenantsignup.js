const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector("#email-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
    const firstNameEl = document.querySelector("#firstname-input-signup");
    const lastNameEl = document.querySelector("#lastname-input-signup");
    const tenantPetEl = document.querySelector("#tenantPet");
    const invitationEl = document.querySelector("#invitation");
  
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
        firstname: firstNameEl.value,
        lastname: lastNameEl.value,
        tenantPet: tenantPetEl.value,
        invitation: invitationEl.value
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

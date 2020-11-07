const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const firstNameEl = document.querySelector("#firstname-input-signup");
  const lastNameEl = document.querySelector("#lastname-input-signup");
  const tenantPetEl = document.querySelector("#tenantPet");
  const invitationEl = document.querySelector("#invitation");

  const tenantPetyes = document.querySelector("#tenantpetyes");
  const tenantPetno = document.querySelector("#tenantpetno");

  //     let tenantPet;
  //     if (tenantPetyes.checked === true) {
  //       tenantPet = true

  //      } else if (tenantPetno.checked === true) {
  // tenantPet = false;

  //      }
  if (emailEl.value && passwordEl.value && firstNameEl.value && lastNameEl.value && invitationEl.value) {
    if (tenantPetyes.checked || tenantPetno.checked) {
      fetch("/api/tenant", {
          method: "post",
          body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
            firstname: firstNameEl.value,
            lastname: lastNameEl.value,
            tenantPet: tenantPetyes.checked,
            invitation: invitationEl.value
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function () {
          document.location.replace("/dashboard");
        })
        .catch(err => console.log(err));
    };
  }
}
// in the html we need to put this in the onclick tenantpetyes runs tenantpetonlickyes 
const tenantpetcheckboxyes = () => {
  tenantPetno.checked = false;
}
// in the html we need to put this in the onlick tenantpetno runs tenantpetonclick no
const tenantpetcheckboxno = () => {
  tenantPetyes.checked = false;
}



document
  .querySelector(".form-wrapper")
  .addEventListener("submit", signupFormHandler);
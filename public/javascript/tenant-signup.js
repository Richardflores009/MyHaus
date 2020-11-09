

const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const firstNameEl = document.querySelector("#firstname-input-signup");
  const lastNameEl = document.querySelector("#lastname-input-signup");
  const tenantPetEl = document.querySelector("#tenantPet");
  const invitationEl = document.querySelector("#invitation");

  const tenantPetyes = document.querySelector("#petYes");
  const tenantPetno = document.querySelector("#petNo");

  //     let tenantPet;
  //     if (tenantPetyes.checked === true) {
  //       tenantPet = true

  //      } else if (tenantPetno.checked === true) {
  // tenantPet = false;

  //      }
  if (tenantPetyes.checked = true, emailEl.value && passwordEl.value && firstNameEl.value && lastNameEl.value && invitationEl.value) {
    
      fetch("/api/tenant", {
          method: "post",
          body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
            first_name: firstNameEl.value,
            last_name: lastNameEl.value,
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(async function() {
          pet = tenantPetno.checked
          tenant_id = 1
          await fetch(`/api/property/edit/${invitationEl.value}`, {
            method: "put",
            body: JSON.stringify({
              tenant_id,
              pet
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
        })
        .then(function () {
          document.location.replace('/tenant');
        })
        .catch(err => console.log(err));
  
  }
}

const signupPropertyAssignment = async function(event) {
  event.preventDefault()

  const idProperty = document.querySelector("#invitation").value;
  console.log('propertyid',idProperty)
  const tenant_id = 18
  if (idProperty.value) {
    
      fetch(`/api/property/edit/${idProperty}`, {
          method: "put",
          body: JSON.stringify({
            tenant_id
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function () {
          document.location.replace('/tenant');
        })
        .catch(err => console.log(err));
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
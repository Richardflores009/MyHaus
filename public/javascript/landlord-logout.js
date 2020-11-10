function logout() {
  fetch("/api/landlord-routes/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/login");
    })
    .catch(err => console.log(err));
}

document.querySelector("#landlordlogout").addEventListener("click", logout);

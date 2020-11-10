function logout() {
  
    fetch("/api/tenant/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/tenant-login");
      })
      .catch(err => console.log(err));
  }
  
  document.querySelector("#tenantlogout").addEventListener("click", logout);
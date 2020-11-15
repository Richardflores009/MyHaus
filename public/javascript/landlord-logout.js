// LANDLORD LOGOUT

async function landlordLogout() {
  
  const response = await fetch("/api/landlord/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
      document.location.replace("/");
      console.log("landlord logout");
    } else 
    alert(response.statusText);
}

// Logout Button
document.querySelector("#landlordlogout").addEventListener("click", landlordLogout);
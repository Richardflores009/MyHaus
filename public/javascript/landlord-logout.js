async function landlordLogout() {
  console.log("logout");
  const response = await fetch("/api/landlord/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  });
  if (response.ok) {
      document.location.replace("/login");
      console.log("landlord logout");
    } else 
    alert(response.statusText);
}


document.querySelector("#landlordlogout").addEventListener("click", landlordLogout);
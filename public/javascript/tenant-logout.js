// TENANT LOGOUT

async function tenantLogout() {
    const response = await fetch("/api/tenant/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.replace("/tenant/login");
        console.log("tenant logout");
      } else 
      alert(response.statusText);
};

// Logout Button
document.querySelector("#landlordlogout").addEventListener("click", tenantLogout);

// TENANT EDITS INFORMATION ON TENANT DASHBOARD

async function editTenantHandler(event) {
    event.preventDefault();

    const tenantName = document.querySelector('').value;
    const tenantEmail = document.querySelector('').value;
    const tenantId = document.querySelector('').value;
    
    const response = await fetch(`/api/tenant/${tenantId}`, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName,
            tenantEmail
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('');
        } else {
        alert(response.statusText);
        }
};

// REMINDER: Connect with Handlebars
// Submit Button
document.querySelector('').addEventListener('submit', editTenantHandler);
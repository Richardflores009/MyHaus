// TENANT EDITS INFORMATION ON TENANT DASHBOARD

async function editTenantHandler(event) {
    event.preventDefault();

    const propertyId = document.querySelector('').value;
    const tenantName = document.querySelector('').value;
    

    // NOTE: Will need to add Promise.all
    // Update on Landlord Dashboard
    await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Update on Tenant Dashboard
    await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName
        })
    })
    document.location.replace('/dashboard');
};

// Submit Button
document.querySelector('').addEventListener('submit', editTenantHandler);
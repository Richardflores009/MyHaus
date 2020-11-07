// TENANT EDITS INFORMATION ON TENANT DASHBOARD

async function editTenantHandler(event) {
    event.preventDefault();

    const propertyId = document.querySelector('').value;
    const tenantName = document.querySelector('').value;
    
    // Update Info in Database
    await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

// Submit Button
document.querySelector('').addEventListener('submit', editTenantHandler);
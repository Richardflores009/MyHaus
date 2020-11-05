// EDIT TENANT/PROPERTY BY LANDLORD ON LANDLORD DASHBOARD

async function editPropertyHandler(event) {
    event.preventDefault();

    const propertyId = document.querySelector('').value;
    const tenantName = document.querySelector('').value;
    const complexName = document.querySelector('').value;
    const unitNumber = document.querySelector('').value;
    const rentAmount = document.querySelector('').value;

    // NOTE: Will need to add Promise.all
    // Update on Landlord Dashboard
    await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName,
            complexName,
            unitNumber,
            rentAmount
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
document.querySelector('').addEventListener('submit', editPropertyHandler);
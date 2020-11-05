// LANDLORD CREATES NEW PROPERTY ON LANDLORD DASHBOARD

async function newPropertyHandler(event) {
    event.preventDefault();

    const tenantName = document.querySelector('').value;
    const complexName = document.querySelector('').value;
    const unitNumber = document.querySelector('').value;
    const rentAmount = document.querySelector('').value;

    const response = await fetch(``, {
        method: 'POST',
        body: JSON.stringify({
            tenantName,
            complexName,
            unitNumber,
            rentAmount
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// Submit Button Handler
document.querySelector('').addEventListener('submit', newFormHandler);
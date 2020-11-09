// LANDLORD CAN EDIT OR DELETE PROPERTY INFO

async function editPropertyHandler(event) {
    event.preventDefault();

    // REMINDER: Connect with Handlebars
    const propertyId = document.querySelector('').value;
    const complexName = document.querySelector('').value;
    const unitNumber = document.querySelector('').value;
    const rentAmount = document.querySelector('').value;

    const response = await fetch(`/api/property/${propertyId}`, {
        method: 'PUT',
        body: JSON.stringify({
            propertyId,
            complexName,
            unitNumber,
            rentAmount
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
}

async function deletePropertyHandler(event) {
    event.preventDefault();

    // REMINDER: Connect with Handlebars
    const propertyId = document.querySelector('').value;

    const response = await fetch(`/api/property/${propertyId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
// Edit Property Button
document.querySelector('').addEventListener('click', editPropertyHandler);

// Delete Property Button
document.querySelector('').addEventListener('click', deletePropertyHandler);
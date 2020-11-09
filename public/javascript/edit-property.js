// LANDLORD DELETES PROPERTY FROM DASHBOARD

async function deletePropertyHandler(event) {
    event.preventDefault();

    const propertyId = document.querySelector('').value;

    const response = await fetch(``, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// Delete Button
document.querySelector('').addEventListener('click', deletePropertyHandler);
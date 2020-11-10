// EDIT TENANT BY LANDLORD

async function editPropertyHandler(event) {
    event.preventDefault();

    // REMINDER: Connect with handlebars
    const tenantName = document.querySelector('').value;
    const tenantId = document.querySelector('').value;

    const response = await fetch(`/api/tenant/${tenantId}`, {
        method: 'PUT',
        body: JSON.stringify({
            tenantName
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
document.querySelector('').addEventListener('submit', editPropertyHandler);
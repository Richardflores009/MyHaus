// LANDLORD CREATES NEW PROPERTY ON LANDLORD DASHBOARD

async function newPropertyHandler(event) {
    event.preventDefault();

    const address = document.querySelector('#addAddress').value;
    const complex = document.querySelector('#addComplex').value;
    const unit = document.querySelector('#addUnitNumber').value;
    const rents = document.querySelector('#addRent').value;
    const landlord_id = document.querySelector('input[name="landlord-id"]').value
    const rent = parseInt(rents)
   
        const response = await fetch(`/api/property`, {
            method: 'POST',
            body: JSON.stringify({
                address,
                complex,
                unit,
                rent,
                landlord_id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    
}

// Submit Button Handler
document.querySelector('.form').addEventListener('submit', newPropertyHandler);
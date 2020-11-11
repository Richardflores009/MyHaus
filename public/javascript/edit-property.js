// LANDLORD CREATES NEW PROPERTY ON LANDLORD DASHBOARD
const property_id = document.querySelector('input[name="property-id"]').value
const deletePropertyId = document.querySelector('button[name="delete"]').value
const submitPropertyId = document.querySelector('button[name="submit"]').value

async function newPropertyHandler(event) {
    event.preventDefault();
    const address = document.querySelector('#updateAddress').value;
    const complex = document.querySelector('#updateComplex').value;
    const unit = document.querySelector('#updateUnitNumber').value;
    const rents = document.querySelector('#updateRent').value;
    const landlord_id = document.querySelector('input[name="landlord-id"]').value
    const rent = parseInt(rents)
    console.dir('lolololol', submitPropertyId)

        const response = await fetch(`/api/property/${submitPropertyId}`, {
            method: 'PUT',
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

async function deletePost() {
    await fetch(`/api/property/${deletePropertyId}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/');
  };

// Submit Button Handler
document.querySelector('.form-property').addEventListener('submit', newPropertyHandler);
document.querySelector('#delete-btn').addEventListener('click', deletePost);
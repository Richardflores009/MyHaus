// LANDLORD CREATES NEW PROPERTY ON LANDLORD DASHBOARD


async function newPropertyHandler(event) {
    // event.preventDefault();


    const property_id = document.querySelector('#propId').value
    const address = document.querySelector('#updateAddress').value;
    alert(address)
    const complex = document.querySelector('#updateComplex').value;
    const unit = document.querySelector('#updateUnitNumber').value;
    const rents = document.querySelector('#updateRent').value;
    const landlord_id = document.querySelector('input[name="landlord-id"]').value
    const rent = parseInt(rents)


        const response = await fetch(`/api/property/${property_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                address,
                complex,
                unit,
                rent
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
    const property_id = document.querySelector('#propId').value
    console.log('haha', property_id)

    await fetch(`/api/property/${property_id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/');
  };

// Submit Button Handler
document.querySelector('#form-update').addEventListener('submit', newPropertyHandler);
document.querySelector('#delete-btn').addEventListener('click', deletePost);

async function newPropertyHandler(id) {



    const complex = document.querySelector('#updateComplex').value;
    const unit = document.querySelector('#updateUnitNumber').value;
    const rents = document.querySelector('#updateRent').value;
    const rent = parseInt(rents)


        const response = await fetch(`/api/property/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
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

async function deletePost(click, id) {

    await fetch(`/api/property/${id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/');
  };

// Submit Button Handler


// JAVASCRIPT FOR TENANTS POSTING A MAINTENANCE OR PET REQUEST

// Submit Maintenance Request
async function maintenanceSubmit(landlord_id, tenant_id) {
  
    const title = document.querySelector('#addTitle').value;
    const description = document.querySelector('#addBody').value;
    // const landlord_id = document.querySelector('input[name="landlord-id"]').value;
    // const tenant_id = document.querySelector('input[name="tenant-id"]').value
  
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        landlord_id,
        tenant_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/tenant');
      console.log("maintenance request submitted");
      closeModal();
    } else {
      alert(response.statusText);
      closeModal();
    }

};

// Submit Pet Request
async function petSubmit(event) {
  event.preventDefault();
  
    const description = document.querySelector('input[name="pet"]').value;
  
    const response = await fetch(`/api/pet`, {
      method: 'POST',
      body: JSON.stringify({
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/tenant');
      console.log("pet update submitted");
      closeModal();
    } else {
      alert(response.statusText);
      closeModal();
    }

};

async function deletePost(id) {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/post');
};



// Event Listener for Pet Update Submit Button
// document.querySelector("#pet-submit-button").addEventListener("click", petSubmit);
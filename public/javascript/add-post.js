// JAVASCRIPT FOR TENANTS POSTING A MAINTENANCE OR PET REQUEST

// Submit Maintenance Request
async function maintenanceSubmit(event) {
  event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const description = document.querySelector('input[name="maintenanceDescription"]').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/post');
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
      document.location.replace('/pet');
      console.log("pet update submitted");
      closeModal();
    } else {
      alert(response.statusText);
      closeModal();
    }

};

// Event Listener for Maintenance Request Submit Button
document.querySelector("#maintenance-submit-button").addEventListener("click", maintenanceSubmit);

// Event Listener for Pet Update Submit Button
document.querySelector("#pet-submit-button").addEventListener("click", petSubmit);
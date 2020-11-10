// JAVASCRIPT FOR TENANTS POSTING A MAINTENANCE REQUEST

// Display Maintenance Request Modal
function displayMaintenanceModal() {
  console.log("displayMaintenanceModelFunction")
};

// Input and Submit Maintenance Request
async function newRequestHandler(event) {
    event.preventDefault();
  
    // REMINDER: Connect with Tenant Handlebars (Modal or Maintenance Request Form Page)
    const title = document.querySelector('').value;
    const postBody = document.querySelector('').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        postBody
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/tenant');
    } else {
      alert(response.statusText);
    }
  }
  // Event Listener for Maintenance Begin Request Button
  //document.querySelector('#maintenance-begin-request').addEventListener('click', displayMaintenanceModal);

  // REMINDER: Add Event Listener for Maintenance Request Submit Button
  //document.querySelector('#').addEventListener('click', newRequestHandler);
async function newFormHandler(event) {
    event.preventDefault();
  
    // Connect with Tenant Handlebars
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
      document.location.replace('/message');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('').addEventListener('submit', newFormHandler);
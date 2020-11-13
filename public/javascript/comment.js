// TENANTS AND LANDLORDS CAN COMMENT ON MAINTENANCE REQUEST POSTS

async function commentFormHandler(event) {
    event.preventDefault();
  
    // REMINDER: Connect with Handlebars
    const comment_text = document.querySelector('').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
}
  // REMINDER: CONNECT WITH HANDLEBARS
  document.querySelector('').addEventListener('submit', commentFormHandler);
  
  
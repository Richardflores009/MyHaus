// TENANT CAN EDIT OR DELETE MAINTENANCE REQUEST POST

const idPost = document.querySelector('input[name="post-id"]').value;

async function editPost(event) {
  event.preventDefault();

  // REMINDER: Connect with Handlebars
  const title = document.querySelector('').value;
  const postBody = document.querySelector('').value;

  const response = await fetch(`/api/post/${idPost}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      postBody
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

async function deletePost() {
  await fetch(`/api/post/${idPost}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// REMINDER: CONNECT WITH HANDLEBARS
document.querySelector('').addEventListener('submit', editPost);
document.querySelector('').addEventListener('click', deletePost);

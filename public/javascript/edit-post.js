<<<<<<< HEAD
=======
// TENANT CAN EDIT OR DELETE MAINTENANCE REQUEST POST

>>>>>>> feature/handlebars
const idPost = document.querySelector('input[name="post-id"]').value;

async function editPost(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body"]').value;

  await fetch(`/api/post/${idPost}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

async function deletePost() {
  await fetch(`/api/post/${idPost}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form').addEventListener('submit', editPost);
document.querySelector('#delete-btn').addEventListener('click', deletePost);

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

//1. get the container element where you want to add the new elements

function displayPost(posts){
    const postsContainer = document.getElementById('posts-container')
    for(const post of posts){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    console.log(post);
    postDiv.innerHTML = `
    <h4>User-${post.userId}</h4>
    <h5>Post:${post.title}</h5>
    <p>Post Desctiption: ${post.body}</p>
    `;
    postsContainer.appendChild(postDiv);
  }
}
   
loadPosts();

function deletePost(){
    
}
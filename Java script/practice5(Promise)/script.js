function getPostById(id){
  const result = {
    id,
    name: '',
    post: [] 
  }
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(users =>{
    const foundUser = users.find(user => user.id===id);
    result.name = foundUser.name;
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(data => data.json())
    .then(posts => {
      result.post = posts.filter(post => post.userId === id)
      console.log(result);
    })
  }
    )
}

getPostById(3);
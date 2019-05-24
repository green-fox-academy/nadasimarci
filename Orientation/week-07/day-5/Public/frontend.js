let postsReq = new XMLHttpRequest();
 postsReq.open(‘GET’, ’http://localhost:3000/posts', true);
 postsReq.send();
 postsReq.onload()= (data) => {
 }
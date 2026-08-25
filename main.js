let posts = [];

let postContainer = document.getElementsByClassName("posts");

let postName = document.getElementById("name");

let postMessage = document.getElementById("message");

// * button - click - adds posts with name and message.
let postButton = document.getElementById("submit").addEventListener("click", function () {
  let newPost = { message: postMessage.value, name: postName.value };
  if (newPost.message === "" || newPost.Name === "") {
    console.log("Need to type entry");
  } else {
    posts.push(newPost);
  }
  postName.value = "";
  postMessage.value = "";
  render();
});
//we need to call postButton ?
function render() {
  // 1. clear the container
  postContainer[0].innerHTML = "";
  // 2. loop over posts
  posts.forEach((post) => {
    postContainer[0].insertAdjacentHTML("beforeend", ` ${post.name} <br> ${post.message} <hr></hr>`);
  });
  // 3. for each one, build its HTML and insert it
}

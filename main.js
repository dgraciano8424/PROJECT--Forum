let posts = [];

let postContainer = document.getElementsByClassName("posts");

let postName = document.getElementById("name");

let postMessage = document.getElementById("message");

let upVote = document.createElement("button");

// * let upVotebutton = upVote.addEventListener("click");

// * button - click - adds posts with name and message.
let postButton = document.getElementById("submit").addEventListener("click", function () {
  let newPost = { message: postMessage.value, name: postName.value, vote: 0 };

  if (newPost.message === "" || newPost.name === "") {
    console.log("Need to type entry");
  } else {
    posts.push(newPost);
  }

  postName.value = "";

  postMessage.value = "";

  render();
});

function render() {
  postContainer[0].innerHTML = "";

  posts.forEach((post) => {
    postContainer[0].insertAdjacentHTML("beforeend", ` ${post.name} <br> ${post.message} vote: <br>   <hr></hr>`);
    document.createElement(
      upVote,
      addEventListener("click", () => {})
    );
    // * postContainer[0].appendChild(upVote);
  });
}

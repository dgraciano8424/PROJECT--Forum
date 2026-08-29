let posts = [];

let postContainer = document.getElementsByClassName("posts");

let postName = document.getElementById("name");

let postMessage = document.getElementById("message");

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

// * render function that empties page then repost everything with any new post added.
function render() {
  postContainer[0].innerHTML = "";

  posts.forEach((post, index) => {
    let downVoteBtn = document.createElement("button");

    downVoteBtn.addEventListener("click", () => {
      post.vote -= 1;
    });

    let upVoteBtn = document.createElement("button");

    upVoteBtn.addEventListener("click", () => {
      post.vote += 1;
    });

    postContainer[0].insertAdjacentHTML("beforeend", ` ${post.name} <br> ${post.message} <br> vote:  <br>   `);
    let wrapper = document.createElement("div");

    let hr = document.createElement("hr");

    wrapper.append(downVoteBtn, " ", upVoteBtn);

    wrapper.append(hr);

    postContainer[0].appendChild(wrapper);
  });
}

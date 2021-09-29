const subButton = document.querySelector("#submit");
const commentInput = document.querySelector("#text-content");
let arr = [];
takeElements();

subButton.addEventListener("click",addTweet);

// Save all tweets
function takeElements(){
    const tweets = document.querySelector("#tweets");
    var children = tweets.children;
    for(let i = 0 ; i<children.length ; i++){
        arr.push(children[i].innerText);
    }
}

// Display the tweets
function addTweet(e){
    e.preventDefault();

    document.querySelector("#tweets").remove();

    const newList = document.createElement("div");
    newList.setAttribute("id","tweets");

    for(let i = 0 ; i<arr.length ; i++){
        const newTweet = document.createElement("div");
        newTweet.classList.add("tweet");
        newTweet.innerText = arr[i];
        newList.append(newTweet);
    }

    const newTweet = document.createElement("div");
    newTweet.classList.add("tweet");
    newTweet.innerText = commentInput.value;
    newList.append(newTweet);
    arr.push(commentInput.value);

    document.querySelector(".right-side").append(newList);
    commentInput.value = "";
}
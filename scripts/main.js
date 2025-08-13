const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tom.jpg") {
    myImage.setAttribute("src", "images/tom-2.jpg");
  } else {
    myImage.setAttribute("src", "images/tom.jpg");
  }
};

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");
let myName;

function setUserName() {
  myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
}

function refreshHeading() {
  let storedName = localStorage.getItem("name");
  if (!storedName || storedName === "null") {
    myHeading.textContent = "Zhijing Xin's Website";
  } else {
    myHeading.textContent = `Zhijing Xin's Site, ${storedName}`;
  }
}

myButton.onclick = function () {
  setUserName();
  refreshHeading();
};

if (!myName) {
}

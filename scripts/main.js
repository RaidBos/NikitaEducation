var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ethereum-logo2.png') {
      myImage.setAttribute ('src','images/ethereum-logo3.png');
    } else {
      myImage.setAttribute ('src','images/ethereum-logo2.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ethereum is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ethereum is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }    
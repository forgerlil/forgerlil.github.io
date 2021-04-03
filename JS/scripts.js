let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../Images/rahanye.jpg') {
      myImage.setAttribute('src','../Images/joreshava-hall.jpg');
    } else {
      myImage.setAttribute('src','../Images/rahanye.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the home of the Joreshavas, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the home of the Joreshavas, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
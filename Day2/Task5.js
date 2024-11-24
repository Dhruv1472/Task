const firebaseConfig = {
  apiKey: "AIzaSyAhqumvkmHBqxu0h2GM9RAAcswzCSHL51s",
  authDomain: "form-data-b089e.firebaseapp.com",
  databaseURL: "https://form-data-b089e-default-rtdb.firebaseio.com",
  projectId: "form-data-b089e",
  storageBucket: "form-data-b089e.firebasestorage.app",
  messagingSenderId: "519924767101",
  appId: "1:519924767101:web:3a13ad7d2ea48e46935414",
  measurementId: "G-6KEBTL2PFN",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var uname = getElementVal("uname");
  var pass = getElementVal("pass");
  var gender = getElementVal("gender");
  var menu = getElementVal("menu");

  saveMessages(uname, pass, gender, menu);

  document.getElementById("contactForm").reset();
}
console.log(uname, pass, gender, menu);

const saveMessages = (uname, pass, gender, menu) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    uname: uname,
    pass: pass,
    gender: gender,
    menu: menu,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

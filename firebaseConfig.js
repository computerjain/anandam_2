
const firebaseConfig = {
  apiKey: "AIzaSyBjOeGvU6EXI16vUC_GwYaxMJNzPSHH-XI",
    authDomain: "intern-5d9ae.firebaseapp.com",
    databaseURL: "https://intern-5d9ae-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "intern-5d9ae",
    storageBucket: "intern-5d9ae.appspot.com",
    messagingSenderId: "225455341113",
    appId: "1:225455341113:web:a561cd8db4b54d6378d7e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// "contactForm" is id given in a form tag
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit",submitForm); 

function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var Subject = getElementVal("subject");
    var Text = getElementVal("message");

    saveMessages(name, emailid, Subject , Text );
    //enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, Subject , Text) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid: emailid,
        Subject: Subject,
        Text : Text,
    });
};



const getElementVal = (id) => {
    return document.getElementById(id).value;
};
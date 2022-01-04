import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtUF6PEnYJEuUj9ejJKKj_GG-LE9usxL8",
  authDomain: "project-5-9feef.firebaseapp.com",
  projectId: "project-5-9feef",
  storageBucket: "project-5-9feef.appspot.com",
  messagingSenderId: "192639294029",
  appId: "1:192639294029:web:98d85386a080fc0a871a04",
  measurementId: "G-TL9YVFJ010",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.getElementById("contact-form").addEventListener("submit", submitForm);

const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validatePhoneNumber = (phoneNumber) => {
  return rePhone.test(phoneNumber);
};

const validateEmail = (email) => {
  return re.test(email);
};

async function submitForm(e) {
  e.preventDefault();

  var firstName = document.getElementById("ime").value;
  var lastName = document.getElementById("prezime").value;
  var mobileNumber = document.getElementById("mobitel").value;
  var email = document.getElementById("email").value;
  var question = document.getElementById("pitanje").value;

  if (
    firstName.length === 0 ||
    lastName.length === 0 ||
    email.length === 0 ||
    question.length === 0
  ) {
    return console.log("Error field not input");
  }

  if (validatePhoneNumber(mobileNumber) === false)
    return console.log("Phone number not valid.");

  if (validateEmail(email) === false) {
    return console.log("Email not valid");
  }

  await addDoc(collection(db, "questions"), {
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    email: email,
    question: question,
  });

  console.log("Success");
}

const getInputValue = (id) => {
  document.getElementById(id).value;
};

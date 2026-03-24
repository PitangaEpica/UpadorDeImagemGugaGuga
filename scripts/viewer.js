const displays = document.getElementById("selectDisplays");
const fullImage = document.getElementById("fullImage");
const overlay = document.getElementById("overlay");
const mainDisplay = document.getElementById("mainDisplay");
const deleteButton = document.getElementById("delete");
const closeButton = document.getElementById("close");
let currentKey = null;

import { db } from "./firebaseConfig.js";
import {
  ref,
  push,
  set,
  get,
  child,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const imagesRef = ref(db, "images");

onValue(imagesRef, (snapshot) => {
  displays.innerHTML = "";

  const data = snapshot.val();

  for (const key in data) {
    const url = data[key].url;

    createImageButton(url, key);
  }
});

function createImageButton(url, key) {
  const button = document.createElement("button");
  button.className = "imgButton";

  const img = document.createElement("img");
  img.src = url;

  button.appendChild(img);

  button.addEventListener("click", () => {
    openImage(url, key);
  });

  displays.appendChild(button);
}

function openImage(url, key) {
  fullImage.src = url;
  currentKey = key;
  console.log(currentKey)

  overlay.style.display = "block";
  mainDisplay.style.display = "flex";
}

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  mainDisplay.style.display = "none";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
  mainDisplay.style.display = "none";
});

deleteButton.addEventListener("click",()=>{
    const deleteRef = child(imagesRef, currentKey)
    remove (deleteRef)
      overlay.style.display = "none";
   mainDisplay.style.display = "none";
});
document.getElementById("changeTab").addEventListener('click',()=>{
    window.location.href = 'index.html'
})
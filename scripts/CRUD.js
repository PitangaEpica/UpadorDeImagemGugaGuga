import { db } from "./firebaseConfig.js";
import {
  ref,
  push,
  set,
  get,
  child,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const imagesRef = ref(db, "images");

//Export
export async function addImage(imgUrl){
    const newImageRef = push(imagesRef);
    set(newImageRef, {url: imgUrl});
}



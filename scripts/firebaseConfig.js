import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCfCu0Te3qSu2QPF8KdLSGvsWuzQElsFh0",
  authDomain: "upador-de-imagens.firebaseapp.com",
  projectId: "upador-de-imagens",
  storageBucket: "upador-de-imagens.firebasestorage.app",
  messagingSenderId: "229937851381",
  appId: "1:229937851381:web:105e2f02fc430d792fcebc",
  measurementId: "G-9TBW7XZQYK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);

export { storage, db };

let input = document.getElementById("fileInput");
let uploadButton = document.getElementById("uploadButton");
let image = document.getElementById("image");
let image2 = document.getElementById("image2");
let preview = document.getElementById("preview");
let btnPassword = document.getElementById("btnPassword");

import { addImage } from "./CRUD.js";

uploadButton.addEventListener("click", () => {
  let file = input.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      image2.src = e.target.result;
      document.getElementById("promptSenha").style.display = "flex";
      document.getElementById("overlay").style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    uploadButton.textContent = "Nenhuma imagem selecionada";
    uploadButton.style.color = "rgb(230, 40, 40)";
    setTimeout(() => {
      uploadButton.textContent = "Subir Imagem";
      uploadButton.style.color = "White";
    }, 1000);
  }
});

btnPassword.addEventListener('click', () => {
  let file = input.files[0];
  if (file&&document.getElementById("passInput").value == "Marios") {
    let reader = new FileReader();
    reader.onload = (e) => {
      image.src = e.target.result;
      addImage(e.target.result);
      document.getElementById("promptSenha").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
    reader.readAsDataURL(file);
    input.value = "";
  } else if(document.getElementById("passInput").value ==""){
    alert("Insira uma senha");
  }
  else{
    alert("Senha Incorreta")
  }
});
document.getElementById("overlay").addEventListener('click', ()=>{
  document.getElementById("promptSenha").style.display = "none";
  document.getElementById("overlay").style.display = "none";
})


input.addEventListener("change", () => {
  let file = input.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("changeTab").addEventListener("click", () => {
  window.location.href = "password.html";
});

let input = document.getElementById("fileInput");
let uploadButton = document.getElementById("uploadButton");
let image = document.getElementById("image");
let preview = document.getElementById("preview");

uploadButton.addEventListener("click", () => {
  let file = input.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      image.src = e.target.result;
      preview.src = "";
    };
    reader.readAsDataURL(file);
  }
});

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


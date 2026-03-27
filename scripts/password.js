const input = document.getElementById("passwordInput")
const button = document.getElementById("submitPassword")

button.addEventListener('click', ()=>{
    if(input.value === "Luigis"){
        window.location.href = 'viewer.html'
    }
    else if(input.value == ""){
        alert("Insira uma senha")
    }
    else{
        alert("Senha incorreta")
    }
})
document.getElementById("changeTab").addEventListener('click',()=>{
    window.location.href = 'index.html'
})
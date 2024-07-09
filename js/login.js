let email = document.getElementById("email");
let password = document.getElementById("password");
let sendBtn = document.querySelector(".send");

let error = document.querySelector(".error");


sendBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(localStorage.getItem("usersData")) {
        let users = JSON.parse(localStorage.getItem("usersData"));
        let userFound = users.some((user)=>{
            return user.email === email.value.trim() && user.password === password.value;
        });
        
        if(userFound){
            window.location.href = "home.html";
        }else{
            error.classList.replace("hidden", "block");
        }
    }else{
        window.location.href = "index.html";
    }

})
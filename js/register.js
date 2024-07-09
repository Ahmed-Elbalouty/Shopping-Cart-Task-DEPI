let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sendBtn = document.querySelector(".send");


let users;
if(localStorage.getItem("usersData")){
    users = JSON.parse(localStorage.getItem("usersData"));
}else{
    users = [];
}


sendBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(firstName.value.trim() !== "" && lastName.value.trim() !== "" && email.value.trim() !== "" && password.value.length > 7 && password.value.length < 21){
        checkIfUserExist  = users.some((user)=> user.email === email.value);
        if(checkIfUserExist){
            alert("This Email Is Exist In System")
        }else{
            let user = {
                firstName : firstName.value.trim(),
                lastName : lastName.value.trim(),
                email : email.value.trim(),
                password : password.value    
            }
            users.push(user);
            localStorage.setItem("usersData", JSON.stringify(users));
            window.location.href = "login.html";
            
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            password.value = "";
        } 
    }else{
        alert("Please Fill Data");
    }


})
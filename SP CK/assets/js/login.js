var username = document.getElementById("username");
var pass = document.getElementById("password");

var listUsers = JSON.parse(localStorage.getItem("users")) || [];

function loginSM(e){
    e.preventDefault();
    if(username.value.trim().length == 0|| pass.value.trim().length == 0){
        alert('Vui long dien vo cho trong');
    }
    else{
        let checkUser = false;
        for(let i in listUsers){
            if(listUsers[i].username.trim() == username.value.trim() && listUsers[i].pw.trim() == pass.value.trim()){
                checkUser = true;
                break;
            }
        }
        if(checkUser){
            alert("Success")
        }
        else{
            alert("Ban sai tai khoan hoac mat khau");
        }
    }
    
}

document.getElementById("btn-submit").addEventListener("click",function(e){
    loginSM(e);  
    
})

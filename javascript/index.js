// Press Login

let loginContent = document.querySelector(".login-content");
let openLogin = document.querySelector(".openLogin  ");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

openLogin.addEventListener("click", function(){
    loginContent.classList.remove("hide-login");
    blurBg.classList.remove("hide-blur");
});

closeModal.addEventListener( "click" ,function() {
    loginContent.classList.add("hide-login");
    blurBg.classList.add("hide-blur");
});









// enter username and  password

document.getElementById('submit').addEventListener('click', function(event){

        event.preventDefault(); // Prevent the form from submitting
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        login(username, password);

    }

);

function login(username, password){

    if(username == "John" && password == "Tolentino1552"){
        console.log("Correct Username!");
        console.log("Correct Password!");   
    }else{
        document.getElementById("error").style.display="inline";
    }
    

}
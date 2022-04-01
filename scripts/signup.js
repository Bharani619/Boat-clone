document.querySelector("form").addEventListener('submit',signup);
let userDataBase = JSON.parse(localStorage.getItem("userStack"))||[];

function signup(event){
    event.preventDefault();

    let firstname = document.getElementById("name").value;
    let lastname  = document.getElementById("lastname").value;
    let email = document.getElementById("Email").value;
    let pass = document.getElementById("pass").value;
    
    if(firstname===""||lastname===""||email===""||pass===""){
        alert("Fill the Details")
    }
    else{

          const userData = {
                    Firstname:firstname,
                    Lastname:lastname,
                    Email:email,
                    password:pass,
          }
          let userArr = [];
          userArr.push(firstname);
          userDataBase.push(userData);

          localStorage.setItem("userStack",JSON.stringify(userDataBase));
          localStorage.setItem("name",JSON.stringify(userArr));
          alert("signup success");
          window.location.href="login.html";
    }

}
let registeredId = JSON.parse(localStorage.getItem("userStack"))||[];
document.querySelector("form").addEventListener('submit',login);

function login(event) {
    event.preventDefault();

  let Email = document.getElementById("Email").value;
  let password = document.getElementById("pass").value;

  let flag = false;

  for(let i=0; i<registeredId.length; i++) {

     if(registeredId[i].Email===Email && registeredId[i].password===password) {

        flag=true;
     }
  }
 
  let userArr=[];
  if(flag===true){
     
      userArr.push(Email);
      localStorage.setItem("email",JSON.stringify(userArr));

      alert("Login success")
      window.location.href="index.html";
  }
  else{
      alert("Wrong Credentials");
  }

}
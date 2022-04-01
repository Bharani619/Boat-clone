 let cart = localStorage.getItem("cart");
    if(!cart) {
        cart = [];
        localStorage.setItem("cart",JSON.stringify(cart));
        refreshCartCount(cart)
    }
    else{
        cart = JSON.parse(cart);
        refreshCartCount(cart)

    }
      

function retriveData(data){
    return data;
}

let total = cart.reduce(function (acc, curr) {
  return acc + curr.price;
}, 0);  

function refreshCartCount(data) {
    let cartCount = document.querySelector(".cart-count");
    cartCount.textContent = `Your Cart (${data.length} items)`;
    localStorage.setItem('Count',JSON.stringify(data.length));
  }
  
function appendData(data,parent1) {

    parent1.innerHTML="";

   data.forEach((el,index)=> {

     const {image,description,price}=el;

     let div = document.createElement("div");
     div.setAttribute("class","mainCard");

     let imgdiv = document.createElement("div");
     imgdiv.setAttribute("class","ImgCard");

     let contDiv = document.createElement("div");
     contDiv.setAttribute("class","contentCard");

     let priceDiv = document.createElement("div");
     priceDiv.setAttribute("class","priceDiv");

     let deleteDiv = document.createElement("div");
     deleteDiv.setAttribute("class","deleteCard");

     let Img = document.createElement('img');
     Img.src=image;
     
     let title = document.createElement("p");
     title.textContent=description;

     let Price = document.createElement("p");
     Price.innerText="Rs"+price;

     let remove = document.createElement("i");
     remove.innerHTML='<i class="far fa-trash-alt"></i>'
     remove.onclick=()=>{
         deleteTask(data,parent1,index);
     }
    

     imgdiv.append(Img);
     priceDiv.append(Price)
     contDiv.append(title,priceDiv);
     deleteDiv.append(remove);

     div.append(imgdiv,contDiv,deleteDiv);
     parent1.append(div);

   })
}


function deleteTask(data,parent1,index){
data.splice(index,1);
localStorage.setItem("cart",JSON.stringify(data));
refreshCartCount(data);
let totalCount = data.reduce(function (acc, curr) {
  return acc + curr.price;
}, 0);
totalDisplay(totalCount);
appendData(data,parent1);
}


function totalDisplay(total) {
  let totalDisplay = document.querySelector(".total-price");
  totalDisplay.innerText = "Rs."+ total;
  localStorage.setItem("total",JSON.stringify(total));
}
totalDisplay(total);

let totalamount = document.querySelector(".total-price");
totalamount.innerHTML="Rs."+ total;

document.querySelector(".apply-btn").addEventListener("click",applyCoupon)

  function applyCoupon(){
    
    let coupon = document.querySelector("#promoInput").value;

    if(coupon=="masai30"){
      total=total-(total*30)/100;
      total.toFixed(2);
      localStorage.setItem("total",JSON.stringify(total));

      totalamount.innerHTML= "Rs."+total
      console.log("applied")
    }
    localStorage.setItem("total",JSON.stringify(total));
  }


export {retriveData,appendData};


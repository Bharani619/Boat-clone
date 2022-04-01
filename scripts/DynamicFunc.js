
let cart = localStorage.getItem("cart");
if(!cart) {
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
    refreshCartCount(cart)
 
}
else{
    cart = JSON.parse(cart);

}

document.querySelector("#sort-lh-sort-hl").addEventListener("change",sort);

function sort() {
 
    let selected = document.getElementById("sort-lh-sort-hl").value;
    if(selected==="low"){
        cart.sort(function(a,b) {

         return Number(a.price) - Number(b.price)

        });
    }
    if(selected==="high"){
        cart.sort(function(a,b) {
            return Number(b.price) - Number(a.price);
        })
    }

    // renderData(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
    renderData(cart);
   
}

function getData(data){

    return data;
}


const renderData = (data,parent)=> {

    console.log("sorted:",data);

    parent.innerHTML=""

    data.forEach((el)=> {

      const {description,image,price,striked} = el
      
      let div =document.createElement("div");
      div.setAttribute("class","mainDiv")

      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("class","imgDiv");
      imgDiv.onclick=()=>{
        localStorage.setItem("single-elem",JSON.stringify(el));
        window.location.href='description.html'
    }

      let contentDiv = document.createElement("div");
      contentDiv.setAttribute("class","contentDiv")
      
      let colorDiv = document.createElement("div");
      colorDiv.setAttribute("class","colorDiv")

      let ratingcontainer = document.createElement("div");
      ratingcontainer.setAttribute("class","ratingDiv");

      let costDiv = document.createElement("div");
      costDiv.setAttribute("class","costDiv");
      
      let Image = document.createElement("img");
      Image.src = image;
      Image.setAttribute("width","100%");
      Image.setAttribute("height","100%");
      
      let title = document.createElement("p");
      title.setAttribute('class','titleDiv');
      title.textContent=description;

      let Price = document.createElement("p");
      Price.setAttribute("class","priceDiv")
      Price.textContent="Rs."+price;

      let strikedOff = document.createElement("p");
      strikedOff.setAttribute("class","striked")
      strikedOff.textContent="Rs."+striked;

      let rating1 = document.createElement("i");
      rating1.innerHTML=`<i class="fas fa-star"></i>`
      
      let rating2 = document.createElement("i");
      rating2.innerHTML=`<i class="fas fa-star"></i>`
      
      let rating3 = document.createElement("i");
      rating3.innerHTML=`<i class="fas fa-star"></i>`

      let rating4 = document.createElement("i");
      rating4.innerHTML=`<i class="fas fa-star"></i>`

      let color = document.createElement("i");
      color.setAttribute("class","color");
      color.innerHTML=`<i class="fas fa-circle"></i>`

      let color1 = document.createElement("i");
      color1.setAttribute("class","color1");
      color1.innerHTML=`<i class="fas fa-circle"></i>`

      let color2 = document.createElement("i");
      color2.setAttribute("class","color2");
      color2.innerHTML=`<i class="fas fa-circle"></i>`

      let color3 = document.createElement("i");
      color3.setAttribute("class","color3");
      color3.innerHTML=`<i class="fas fa-circle"></i>`

      let cartBtn = document.createElement("button");
      cartBtn.setAttribute("class","cartBtn");
      cartBtn.textContent="Add to Cart"
      cartBtn.onclick= ()=>{
          addtocart(el)
      }
      
      costDiv.append(Price,strikedOff);
      colorDiv.append(color,color1,color2,color3);
      ratingcontainer.append(rating1,rating2,rating3,rating4);
      imgDiv.append(Image);
      contentDiv.append(ratingcontainer,title,costDiv,colorDiv,cartBtn);
      div.append(imgDiv,contentDiv);
      parent.append(div)

    })

    function addtocart(el){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        alert("Added to cart")
        cart.push(el);
        localStorage.setItem("cart",JSON.stringify(cart));
        refreshCartCount(cart);
        // window.location.href=""
      
        // renderData(cart)
        }
}


function refreshCartCount(data) {
    let cartCount = document.querySelector(".cart-count");
    cartCount.textContent = `Your Cart (${data.length} items)`;
    localStorage.setItem('Count',JSON.stringify(data.length));
  }




export {getData,renderData};
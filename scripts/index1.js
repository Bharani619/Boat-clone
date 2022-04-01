// let cart = localStorage.getItem("cart");
// if(!cart) {
//     cart = [];
//     localStorage.setItem("cart",JSON.stringify(cart));
//     refreshCartCount(cart)

// }
// else{
//     cart = JSON.parse(cart);
//     refreshCartCount(cart)

// }



function productData(data){
    return data;
}


const showData = (data,parent)=> {

    data.forEach((el)=> {
   
         let div =document.createElement("div");
         div.setAttribute("class","swiper-slide");
   
         let imgDiv = document.createElement("div");
         imgDiv.setAttribute("class","imgDiv")
         imgDiv.onclick=()=>{
             localStorage.setItem("single-elem",JSON.stringify(el));
             window.location.href='description.html'
         }
   
         let contentDiv = document.createElement("div");
         contentDiv.setAttribute("class","contentDiv")

         let highDiv1 = document.createElement("div");
         highDiv1.setAttribute("class","highDiv");

         let highDiv2 = document.createElement("div");
         highDiv2.setAttribute("class","highDiv");

         let highDiv3 = document.createElement("div");
         highDiv3.setAttribute("class","highDiv");

         let ratingcontainer = document.createElement("div");
         ratingcontainer.setAttribute("class","ratingDiv");
         
         let Image = document.createElement("img");
         Image.src = el.image;
         Image.setAttribute("width","100%");
         Image.setAttribute("height","100%");
         
         let title = document.createElement("p");
         title.setAttribute('class','titleDiv');
         title.textContent=el.description;
   
         let Price = document.createElement("p");
         Price.setAttribute("class","priceDiv")
         Price.textContent="Rs."+el.price;

         let rating1 = document.createElement("i");
         rating1.innerHTML=`<i class="fas fa-star"></i>`
         
         let rating2 = document.createElement("i");
         rating2.innerHTML=`<i class="fas fa-star"></i>`
         
         let rating3 = document.createElement("i");
         rating3.innerHTML=`<i class="fas fa-star"></i>`

         let rating4 = document.createElement("i");
         rating4.innerHTML=`<i class="fas fa-star"></i>`

         
         let icons = document.createElement("i");
         icons.setAttribute("class","icons");
         icons.innerHTML=`<i class="fas fa-square-full"></i>`

         let icons1 = document.createElement("i");
         icons1.setAttribute("class","icons");
         icons1.innerHTML=`<i class="fas fa-square-full"></i>`

         let icons2 = document.createElement("i");
         icons2.setAttribute("class","icons");
         icons2.innerHTML=`<i class="fas fa-square-full"></i>`

         let high1 = document.createElement("p");
         high1.innerHTML=el.highlight1;
         
         let high2 = document.createElement("p");
         high2.textContent=el.highlight2;

         let high3 = document.createElement("p");
         high3.textContent=el.highlight3;

         let cartBtn = document.createElement("button");
         cartBtn.setAttribute("class","cartBtn");
         cartBtn.textContent="Add to Cart";
         cartBtn.onclick=()=>{
             addtocart(el,data)
         }
         
         ratingcontainer.append(rating1,rating2,rating3,rating4);
         highDiv1.append(icons,high1)
         highDiv2.append(icons1,high2);
         highDiv3.append(icons2,high3);
         imgDiv.append(Image);
         contentDiv.append(ratingcontainer,title,Price,highDiv1,highDiv2,highDiv3,cartBtn);
         div.append(imgDiv,contentDiv);
         parent.append(div);
   
    })
    function addtocart(el,data){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        alert('Added to cart')
        cart.push(el);
        localStorage.setItem("cart",JSON.stringify(cart));
        refreshCartCount(data);
     
        }
   
   }

   function refreshCartCount(data) {
    let cartCount = document.querySelector(".cart-count");
    cartCount.textContent = `Your Cart (${data.length} items)`;
    // localStorage.setItem('Count',JSON.stringify(data.length));
  }
 
 

   export {productData,showData};
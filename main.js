$(document).ready(function() {
    
    $("body").css("background-color", "Cyan");
 
    //Below is code which hides each list item when clicked on 
});
$(document).ready(function (){
   
        $( "#salutation" ).selectmenu();
          
});
 $(document).ready(function() {
   setInterval(animateele, 4000);
    setInterval(changecolors, 4000);
  
   function animateele() {
  
       $("p").animate({right: '500px'}, 1000).animate({left: '500px'}, 1000);
       $("h1").slideUp(2000).slideDown(2000);
     }
     animateele();
   var counter = 0;
   function changecolors() {
           var colors = ["yellow", "black", "orange", "pink"];
          
           if (counter < colors.length) {
               $("header").css("background-color", colors[counter], 1000);
               counter++;
           } else {
               counter = 0;
           }
       }
       changecolors();
  
   });
    //Below is code which fades in and outs  when clicked on and has a stop button to hault animation
    $(document).ready(function(){
        $("button").click(function(){
          
          $("#standings").fadeToggle(3000);
        });
      
      });


let saveItem = [];
// sessionStorage.setItem("itemSaved", JSON.stringify(saveItem));



//object iemes
function objectItems(name, cost, img, article, ) {
  this.cartItems = {
      name: name,
      cost: cost
  };
  this.img = img;
  this.article = article
 

}

//add items to cart//
//display function//
function addItems(name,price,img,article,){ 
 
   let item = new objectItems(name,price,img,article,);
   
   saveItem.push(item);
   alert("Number of items:"+ saveItem.length);
   sessionStorage.setItem("itemSaved", JSON.stringify(saveItem));
  
   }
   
   

 // Get saved data from sessionStorage
let cartList = document.getElementById("Items");
let getData = JSON.parse(sessionStorage.getItem("itemSaved"))||0;

console.log(sessionStorage.getItem("itemSaved"))
  for (let i = 0; i < getData.length;  i++) {
   
    
    let liElement = document.createElement("li");
    
    liElement.innerHTML = ("<li class='list-inline-item'><h4>" + ""+ getData[i].cartItems.name +""+ "</h4><p>" + 'R'+ getData[i].cartItems.cost + "" + " </p><img alt=''height='200' width='200' class='img-thumbnail' src='" + (getData[i].img) + "'><br>"  + "</li>");
  
    cartList.append(liElement);

   
}

   

    





//store item in session 
//read to items in session storage 
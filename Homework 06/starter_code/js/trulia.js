

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation


//********* */ MY NAVIGATION CODE (NOT GOOD PRACTICE TO DO IT THIS WAY) ************


const navMenuButton = document.querySelector('.trulia-nav-toggle');
const expandNavMenu = document.createElement('div');//create a new menu container for hamburger menu on expand
const expandNavMenuUl = document.createElement('ul'); // create a ul

let navItem = document.querySelectorAll(".trulia-nav-mobilehide .trulia-nav-item"); // select all nav items 



 function toggleNav(){

   expandNavMenu.classList.add("mobile-menu");
   expandNavMenu.classList.toggle('trulia-menu-active'); // toggle the menu
   expandNavMenuUl.classList.toggle('trulia-menu-active-ul'); // add class to the ul
   
   //navItem.classList.toggle('trulia-menu-active-item'); // add class to the ul
  


     if (expandNavMenu.classList.contains('trulia-menu-active')){
       console.log("on");
       document.querySelector(".trulia-nav").append(expandNavMenu);
       document.querySelector(".trulia-menu-active").append(expandNavMenuUl); // add ul to the menu
      

       for (let i = 0; i < navItem.length; i++){
        let newNavItem = navItem[i].cloneNode(true);
         document.querySelector(".trulia-menu-active-ul").append(newNavItem);
         console.log("adding item" + i);
     }  

     } else {
       console.log("off");
       document.querySelector(".mobile-menu ul").innerHTML = "";
       document.querySelector(".mobile-menu ul").remove();
       document.querySelector(".mobile-menu").remove();
       


     
    }
    

 }

 navMenuButton.addEventListener('click', function(){
   toggleNav();
});


//************ Correct solution code ****************************************** */

// function navToggle(e){
  
//   let expandNavMenu = document.querySelectorAll('.trulia-nav > nav ul');

//   for (let i = 0; i < expandNavMenu.length; i++){
//     expandNavMenu[i].classList.toggle('trulia-nav-mobilehide');
//   }
// }

// document.addEventListener('click', function(){
//   navToggle();
// });




// Loop through all the cards
console.log(truliaCards);

for (i=0; i < truliaCards.length;i++){

  truliaCards[i].addEventListener('click',function(){

    //console.log("clicked card " + truliaCards[i].innerHTML);

    for (n=0; n < truliaCards.length;n++){
      truliaCards[n].classList.remove('trulia-featured-grid-item');

      console.log("card "+ n + " clicked");

    }

    this.classList.toggle('trulia-featured-grid-item');

  })

}
    
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



  });  




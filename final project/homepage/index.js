const menuButton = document.querySelector('#menu-button');
const menuExpand = document.querySelector('.main-menu');
const leftToggle = document.querySelector('.main-nav-left');
const rightToggle = document.querySelector('.main-nav-right');

// Toggle the navigation menu
function toggleNav() {

    menuExpand.classList.toggle('main-menu-stretch');
    leftToggle.classList.toggle('menu-toggle');
    rightToggle.classList.toggle('menu-toggle');

    if (menuButton.querySelector('span').innerHTML == "menu"){

    menuButton.querySelector('span').innerHTML = "close";

    } else if (menuButton.querySelector('span').innerHTML == "close"){
        
        menuButton.querySelector('span').innerHTML = "menu";

    }
}

// trigger menu after click
menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});




// ************************ Add product varieties ***************************




function addVarieties(){

    let variety = productDataObject['data'];
    let productVarieties = document.querySelectorAll(".varieties-section .product-column");

    console.log(variety[0]['images'][0]['image']);

    for (i=0; i < productVarieties.length; i++){

    // Set product image  

    let productImage = productVarieties[i].querySelector(".product-image");
    productImage.setAttribute("src", variety[i]['images'][0]['image']);
    productImage.setAttribute("alt", variety[i]['images'][0]['image']);

    // Set product name (for all name instances)

    productVarieties[i].querySelectorAll(".product-name").forEach(function(element){

        element.innerText = variety[i]['name'];

    });

    // Set product price 

    productVarieties[i].querySelector(".product-price").innerText =  "From " + variety[i]['price'];

    // Set product description  

    productVarieties[i].querySelector(".product-description").innerHTML = variety[i]['description'];

    // Set button ID

    productVarieties[i].querySelector(".button").setAttribute("id",variety[i]['id']);
    console.log(productVarieties[i].querySelector(".button"));

    // Set product tagline  

    console.log(variety[i]['custom_fields'][0]['value']);


    let tagWords = variety[i]['custom_fields'][0]['value'].split(" ");

    for (h=0;h < tagWords.length; h++){

        productVarieties[i].querySelector(".product-tagline").innerHTML +=`<li>${tagWords[h]}</li>`; 

    }

    

    let ingredients = variety[i]['custom_fields'][1]['value']

    for (g=0; g < ingredients.length; g++){

        let thisIngredient = productVarieties[i].querySelector(".product-ingredients");

        thisIngredient.innerHTML +=`<li>${variety[i]['custom_fields'][1]['value'][g]}</li>`;


    }

    

    
}

}




// ***************** WHEN THE HTML IS LOADED *********************

document.addEventListener('DOMContentLoaded', function() {

  addVarieties();
});

// ***************** PASS BUTTON ID TO URL *********************

let buttonId = document.querySelectorAll('.varieties-section .button');

for (i=0;i<buttonId.length;i++){

    buttonId[i].addEventListener('click', function(){

        console.log(this.id);
        this.attr('id', (_, v) => `${v}?my-string`);

    });
}





//***********************    Variety switcher *************/

let toggleVariety = document.querySelectorAll(".underline-button");
let productOverview = document.querySelectorAll(".product-content-overview");
let productDetails = document.querySelectorAll(".product-details");


for(let i=0;i<toggleVariety.length;i++){//cycle product cards

    let overview = productOverview[i];//overview section of selected product
    let details = productDetails[i];//details section of selected product
    
    toggleVariety[i].addEventListener("click",function(e){//add listener for each product toggle

        e.preventDefault();
        // console.log(overview);
        console.log(details);

        if (overview.classList.contains("translate-down-two")){ // 2nd interaction:if the user has toggled once - overview hidden, details shown

            overview.classList.add("translate-neutral");//move overview into view
            details.classList.add("translate-up-two");//move details out of view

            overview.addEventListener("transitionend", function(g){//after the transition, remove all classes, return to default

                overview.classList.remove("translate-down-two");
                overview.classList.remove("translate-neutral");

                if (details.classList.contains("translate-up-two")){
                    details.classList.remove("translate-up-two");
                    details.classList.remove("translate-up-one"); 
                }
                
            });

        }

        if (!overview.classList.contains("translate-up-one") && !overview.classList.contains("translate-down-two") && !overview.classList.contains("translate-neutral")){//1st interaction: overview shown, details hidden

            overview.classList.add("translate-up-one");//move overview out of view
            details.classList.add("translate-up-one");//move details into view

            overview.addEventListener("transitionend", function(g){//after the transition, move overview to bottom
                overview.classList.add("translate-down-two");
                overview.classList.remove("translate-up-one");
            });

        }

    });
    



}


      

        
        




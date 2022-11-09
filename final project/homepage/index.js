// function showValue(animal){

// let thisProduct = productData[animal];

// console.log(thisProduct[0].variants[0].option_values[1]);

// }

// document.addEventListener('DOMContentLoaded', function(event) {

// showValue("Chicken");

// });



// Selection of HTML objects
const menuButton = document.querySelector('#menu-button');
const leftToggle = document.querySelector('.main-nav-left');
const rightToggle = document.querySelector('.main-nav-right');

// Defining a function
function toggleNav() {

    leftToggle.classList.toggle('menu-toggle');
    rightToggle.classList.toggle('menu-toggle');

    if (menuButton.querySelector('span').innerHTML == "menu"){

    menuButton.querySelector('span').innerHTML = "close";

    } else if (menuButton.querySelector('span').innerHTML == "close"){
        
        menuButton.querySelector('span').innerHTML = "menu";

    }
}

// Calling the function after click event occurs
menuButton.addEventListener('click', function() {
    toggleNav();
});


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

    productVarieties[i].querySelector(".product-price").innerText = variety[i]['price'];

    // Set product description  

    productVarieties[i].querySelector(".product-description").innerHTML = variety[i]['description'];

    // Set product tagline  

    console.log(variety[i]['custom_fields'][0]['value']);

    productVarieties[i].querySelector(".product-tagline").innerText = variety[i]['custom_fields'][0]['value'];

    let ingredients = variety[i]['custom_fields'][1]['value']

    for (g=0; g < ingredients.length; g++){

        let thisIngredient = productVarieties[i].querySelector(".product-ingredients");
        thisIngredient.innerHTML += "<li>" + variety[i]['custom_fields'][1]['value'][g] + "</li>";

    }

    

    
}

}




// ***************** WHEN THE HTML IS LOADED *********************

document.addEventListener('DOMContentLoaded', function() {

  addVarieties();
});



function showValue(animal){

let thisProduct = productData[animal];

console.log(thisProduct[0].variants[0].option_values[1]);

}

document.addEventListener('DOMContentLoaded', function(event) {

showValue("Chicken");

});



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



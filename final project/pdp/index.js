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


function addProductData(){
    let productData = productDataObject['data'][parseInt(localStorage.getItem("item")) - 1];
    console.log(productData.images[0].image);

    document.querySelector(".product-name").innerText = productData.name;

    document.querySelector(".product-description").innerHTML = productData.description;

    document.querySelector(".product-images .image-large").setAttribute("src",productData.images[0].image);
    document.querySelector(".product-images .image-large").setAttribute("alt",productData.images[0].alt);

            // Add the thumbnails
    var thumbHTML = "";

    for(var i=0;i<productData.images.length;i++){

        thumbHTML +=
            "<a href=\""+productData.images[i].image+"\"><img class=\"image-thumbnail\" src=\""+productData.images[i].thumb+"\" alt=\""+productData.images[i].alt+"\"/></a>";
            console.log("something is happening!");

    }

    document.querySelector(".image-thumbnails").innerHTML = thumbHTML;

    //Click through thumbnails
    let imageThumbnails = document.querySelectorAll(".image-thumbnails > a");

    for(let i=0;i<imageThumbnails.length;i++){

        imageThumbnails[i].addEventListener("click",function(e){
            e.preventDefault();
            document.querySelector(".product-images .image-large").setAttribute("src",this.getAttribute("href")); 
            document.querySelector(".product-images .image-large").setAttribute("alt",this.querySelector("img").getAttribute("alt"));
        });
    }
    

}

document.addEventListener('DOMContentLoaded', function() {
    console.log(localStorage.getItem("item"));
    addProductData();
  });



// function addVarieties(){

//     let variety = productDataObject['data'];
//     let productVarieties = document.querySelectorAll(".varieties-section .product-column");

//     console.log(variety[0]['images'][0]['image']);

//     for (i=0; i < productVarieties.length; i++){

//     // Set product image  

//     let productImage = productVarieties[i].querySelector(".product-image");
//     productImage.setAttribute("src", variety[i]['images'][0]['image']);
//     productImage.setAttribute("alt", variety[i]['images'][0]['image']);

//     // Set product name (for all name instances)

//     productVarieties[i].querySelectorAll(".product-name").forEach(function(element){

//         element.innerText = variety[i]['name'];

//     });

//     // Set product price 

//     productVarieties[i].querySelector(".product-price").innerText =  "From " + variety[i]['price'];

//     // Set product description  

//     productVarieties[i].querySelector(".product-description").innerHTML = variety[i]['description'];

//     // Set product tagline  

//     console.log(variety[i]['custom_fields'][0]['value']);


//     let tagWords = variety[i]['custom_fields'][0]['value'].split(" ");

//     for (h=0;h < tagWords.length; h++){

//         productVarieties[i].querySelector(".product-tagline").innerHTML +=`<li>${tagWords[h]}</li>`; 

//     }

    

//     let ingredients = variety[i]['custom_fields'][1]['value']

//     for (g=0; g < ingredients.length; g++){

//         let thisIngredient = productVarieties[i].querySelector(".product-ingredients");

//         thisIngredient.innerHTML +=`<li>${variety[i]['custom_fields'][1]['value'][g]}</li>`;


//     }

    

    
// }

// }




// ***************** WHEN THE HTML IS LOADED *********************





      

        
        




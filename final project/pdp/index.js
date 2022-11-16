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




// ************************ Add product data ***************************


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

    //add variant options
    let variantsHTML = document.querySelector(".product-variants-content");
    let variants = productData.variants[0].option_values;

    for (i=0;i<variants.length;i++){

        variantsHTML.innerHTML += "<div class=\"product-variant\" id=\"" + i + "\">" + "<div class=\"variant-name\">" + 
        "<h4>" + variants[i].label + "</h4>" +
        "<p>" + variants[i].description +  "</p></div>" +
        "<div class=\"variant-counter\"><a href=\"#\"class=\"variant-counter-icon remove-product\"><span class=\"material-symbols-outlined\">remove</span></a> </div><div class=\"variant-counter\"><p>0</p></div><div class=\"variant-counter\"><a href=\"#\" class=\"variant-counter-icon add-product\"><span class=\"material-symbols-outlined\">add</span></a></div></div>";
        
    }

    //********************* Price calculator ****************


let variantEvent = document.querySelectorAll(".product-variant");
let totalPrice = 0;


for (g=0;g<variantEvent.length;g++){

    
    let addProduct = variantEvent[g].querySelector(".add-product");
    let removeProduct = variantEvent[g].querySelector(".remove-product");
    let variantCounter = variantEvent[g].querySelector(".variant-counter p");
    console.log(variantEvent[g]);

    if (variantEvent[g].id == g){
        console.log(g);
        let countQuant = 0;
        addProduct.addEventListener('click', function(e){

             e.preventDefault();
             countQuant++;
             totalPrice = totalPrice + productData.price;
             document.querySelector("#subscribe-price h3").innerHTML = "$" + (totalPrice*0.9).toFixed(2);
             document.querySelector("#one-time-price h3").innerHTML = "$" + totalPrice.toFixed(2);
             variantCounter.innerText = countQuant;
   
                    if (totalPrice <= 0){
                        totalPrice = 0;
                        document.querySelector("#subscribe-price h3").innerHTML = "$0.00";
                        document.querySelector("#one-time-price h3").innerHTML = "$0.00";
                    }
         });    
            
        removeProduct.addEventListener('click', function(e){
            
            if (countQuant > 0){
            e.preventDefault();
            countQuant--;
            totalPrice = totalPrice - productData.price;
            document.querySelector("#subscribe-price h3").innerHTML = "$" + (totalPrice*0.9).toFixed(2);
            document.querySelector("#one-time-price h3").innerHTML = "$" + totalPrice.toFixed(2);
            variantCounter.innerText = countQuant;

                    if (totalPrice <= 0){
                        totalPrice = 0;
                        document.querySelector("#subscribe-price h3").innerHTML = "$0.00";
                        document.querySelector("#one-time-price h3").innerHTML = "$0.00";
                    }
                }
         });

    }

    


   
}

}






document.addEventListener('DOMContentLoaded', function() {
    // console.log(localStorage.getItem("item"));
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





      

        
        




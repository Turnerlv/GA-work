
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);

     console.log(a);
     console.log(b);
     let countNum = 0;
 
     // Add comparison logic

    // are they not numbers?
    if(isNaN(a) || isNaN(b)){
      comparison = "N/A";
    }

     // is a more than b?
     // greater than
    else if( a > b ){
      comparison = ">";
    }

     //is b more than a?
     //less than
    else if( a < b ){
      comparison = "<";
    }

    else {
      comparison = "=";
    }
    
    while (comparison == "N/A" && countNum <=5){
      console.log(countNum);
      countNum = countNum + 1;
    }

    

    
 
     document.querySelector('#comparison').innerText = comparison;
   };
 
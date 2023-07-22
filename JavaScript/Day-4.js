/* 
comparsion OPerator 
*/


// console.log(10 == "10") ;  // True comapre vlaye only
// console.log(-100 == "-100") // True we cmopare claue only 


// console.log(10 != "10"); // Flase
// console.log(10 === "10") // false comapre vlaue + type
// console.log(10  !== "10") //True  Compre Vlaye +type

// console.log(10 >  20 );
// console.log(10 >= 20 );

// console.log(10 <  20) ;
// console.log(10 <= 10) ;


/* 
Logical OPerator
! NOT
&& AND
|| OR
*/

/* 
Control Flow
if 
if else
else
if  () 
{
    // 
}
*/

let price = 100 ; 
let discount = false ;
let discountAmount = 30 ;
let country = "JO"

if  (discount === true) 
{    
     price  -=  discountAmount ; 
}else if(country === "JsO"){
    price -= discountAmount
}else if (country === "Syria"){
    price -= 50
}
else
{
    price -= 10 ; 
}
console.log(price);

/* 
Condintal (Ternary) Operator
Condition ? if True : If False 
*/
let theName  = "Ahmed" ; 
let theGender = "Male" ; 
let theAge = 30 ; 

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

theAge <20 ? console.log(20) : theAge > 20 && theAge < 60  ? console.log("20 to 60") : theAge > 60 ? console.log("Largeer thnat 60") : console.log("Unkwon");

// Var  
   // redeclare yes 
   // acess berfore declare (undifind)
   // varible scope drama (to window object)

// let
   //redeclare no
   // acess berfore declare (Error)
   // varible scope drama (global not in window object )
//const 
   // redeclare no 
   // acess berfore declare  (Error)
   // varible scope drama (global not in window object )

// any vraible created by var will be inside window object 



/* 
 String Syntax and charcter Escape sequnce 
 \ Escape + line contioue 
 \n 
*/

// console.log(' "Elzero"  web school')
// console.log(" 'Elzero'  web school")

// console.log("Mohammad Qeis \"Obeidat\" ")
// console.log("Hamazeh Qeis \\Obeidat")

// console.log("lined \
// continou \
// obeidat")
// console.log("Elzero \n WEb \n Scool ")


/*
concat 
*/

// let a =  "We love";
// let b =  "Jacascript";
// document.write(a +" "+ b)
// console.log(a ,b)

/* 
Template Literals (Template Strings)
*/
// let a = "Mohammad" ;
// let b = "Qeis" ;
// let c = "Abed-Alkareem" ;
// let d = "Obeidat" ;

// console.log(`${a} ${b} 
// ${c} ${d}`);

// console.log(`${a} "${b}"
// ${c} ${d}`);

// console.log(`${100 * 500} ${b} 
// ${c} ${d}`);

// let title = "Mohammad" ;
// let desc = "Obeidat" ; 
// let markup = `
//   <div class=card">
//       <div class="child">
//       <h2> ${title}</h2>
//       <p> ${desc} </p>
//       </div>
//   </div>
// `;

// document.write(markup);



let Chalange_Title = "Elzero " ,
     Chalange_Desc = "Elazero Web School" ,
     Chalange_Date=  "25/10" ,
     Chalange_Div = `<div> 
         <h3> ${Chalange_Title}<h3>
         <p> ${Chalange_Desc}</p>
         <span> ${Chalange_Date} </span>
     </div>`;
document.write(Chalange_Div.repeat(4))     


 

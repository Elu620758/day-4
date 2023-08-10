//IIFE Function
// IIFE function will call itself no matter what at the start of the application lifecycle.
// please kindly unblock and check the below code

// (()=>{
//     for(let i = 0; i<=100; i++){
//         // console.log(i)
//         if(i % 2 != 0){
//             console.log(i)
//         }

//     }
// })()

//================================================================================

//Anonymous  Function
//a function without name is called anonymous function 

let oddNum = function(){

    for(let i = 0; i<=100; i++){
        // console.log(i)
        if(i % 2 != 0){
            console.log(i)
        }

}}
oddNum()
// ================================================================================


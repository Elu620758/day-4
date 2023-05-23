
//using anonymous function
// please kindly unblock and check the below code


// let addfunction = ()=>{
//     let num = [1,2,3,4,5,32,12,32,55];
//     sum = 0;

//     for(let i = 0; i<num.length; i++){
    
//     sum = sum+num[i];
    
//     }
    
//     console.log(sum)

// }

// addfunction();

//============================================================================================

//using IIFE function

(()=>{
    let num = [1,2,3,4,5,32,12,32,55];
    sum = 0;

    for(let i = 0; i<num.length; i++){
    
    sum = sum+num[i];
    
    }
    
    console.log(sum)

})()
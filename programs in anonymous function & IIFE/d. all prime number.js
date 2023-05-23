
// using anonymous function, using arrow function
// please kindly unblock and check the below code

/* let primenumbers = ()=>{

    let myarray = [1,2,4,5,2,6,7,8,4,2,6,3,78,5,2,4]
        
                let primenumbers = [];
                value = 0;
                for(let i = 1; i<=myarray.length; i++){
                if (i%i == 0 && i%2 != 0)
                    {   
                         primenumbers.push(myarray[i])
                    }

                console.log(primenumbers)

                }
    
    }
    
    primenumbers() */

    // ==========================================================================================================================================

    //using IIFE function

    (()=>{
        let myarray = [1,2,4,5,2,6,7,8,4,2,6,3,78,5,2,4];

        let primenumbers = [];
       
        for(let i = 0; i<myarray.length; i++){
        if (myarray[i]%myarray[i] == 0 && myarray[i]%2 != 0)
            {   
              primenumbers.push(myarray[i])
            }
        
       
        console.log(primenumbers)

        } 


})()
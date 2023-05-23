

let Rotate = ()=>{

    let arr = [1,2,4,1,4,2,1,4];

    let k = 3
    
    for(let i = 0; i< k; i++){
    
    arr.unshift(arr.pop());
    console.log(arr);
    
    }
}

Rotate()
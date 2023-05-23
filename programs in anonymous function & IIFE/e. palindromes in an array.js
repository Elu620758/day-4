


let array = ["111", "2154", "457", "552", "888", "alaala", "657", "959", "malayalam"];


//using IIFE function with the help of arrow function

/* ((array)=>{
    const data = []
for(i = 0; i<array.length; i++){
let palindromes = array[i].split('').reverse().join('');
if(palindromes === array[i]){
data.push(palindromes)
}
}
console.log(data);

}) (array) */
// ===============================================================================================

//useing anonymous function

let my_PalinDroms = ((array)=>
{
    const data = []
		for(i = 0; i<array.length; i++)
    {
		let palindromes = array[i].split('').reverse().join('');
		if(palindromes === array[i])
        {
        data.push(palindromes)
        }
		}
console.log(data);

}) (array) 

console.log(my_PalinDroms)







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

                            }) 
                     

    my_PalinDroms(["111", "2154", "457", "552", "888", "alaala", "657", "959", "malayalam"])
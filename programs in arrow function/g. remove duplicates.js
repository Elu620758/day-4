

            let removingDuplicates = (Numbers)=>{


                
                let Bag = [];
                    
                    for (let i = 0; i < Numbers.length; i++)
                    {
                        if(Bag.includes(Numbers[i]) == false){
                        Bag.push(Numbers[i])
                        }
                    }
                    console.log(Bag)

            }

            removingDuplicates([10,20,40,1,0,10,12,32,40,20])

    




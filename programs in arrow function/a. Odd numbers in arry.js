


let oddNumbers = (arr)=>{

                            let temp=[];
                            for(let i = 0; i<arr.length; i++)
                            {
                                if(arr[i]%2 !=0)
                                {
                                    temp.push(arr[i])
                                }
                                console.log(temp)
                            }
                        }

oddNumbers([1,2,3,4,5,6,7,8,9,10])
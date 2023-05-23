    //using IIFE function which is without arrow function
    // please kindly unblock and check the below code
    
   
   
    // (function (string)
    //  {
    //     var sentence = string.toLowerCase().split(" ");

    //     for(var i = 0; i< sentence.length; i++)
    //     {
    //     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    //     }
       
    //     console.log(sentence)
    //     })

    //     ("tutorix is one of best e-platforms");
    //====================================================================================================================


    //using anonymous function
                let Text = function (string)
                            {
                                var sentence = string.toLowerCase().split(" ");

                                    for(var i = 0; i< sentence.length; i++)
                                        {
                                        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
                                        }
                                        
                                    console.log(sentence.join(' '))
                            }

                        Text("tutorix is one of best e-platforms");
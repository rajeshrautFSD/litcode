function createPairs(arr) {
    let counts = {};   
  
    for (let i = 0; i < arr.length; i++) { 
      let num = arr[i];  
  

  
      if (counts[num]) {  
        counts[num] = 0;  
        
      } else {
        counts[num] = 1;  
      }
      
    
      
   
    }
  
    console.log("after:",counts );
    for(let key in counts){
        
        if (counts[key] === 1){
            return false;
        } 

    }
    return true;
  }
  
  
  console.log(createPairs([1,2,3,4]));
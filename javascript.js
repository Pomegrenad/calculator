const numBtn = document.querySelector('numBtn');


const add = function(a,b) {
    let sum=a+b;
    return sum;
      
  };
  
  const subtract = function(a,b) {
    
      let sum=a-b;
    return sum;
      
  };
  
  const sum = function(array) {
   
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  };
  
  const multiply = function(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
  };
  
  const power = function(a,b) {
    return Math.pow(a,b);
      
  };
  
  const factorial = function(num) {
    if(num===0 || num===1)
      return 1;
  
    for(let i=num-1; i>=1;i--){
      num=num*i;
    }
      return num;
  };

  const operate = (x,y) =>{


  }
const numBtn = document.querySelector('numBtn');

//math functions
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

  const multiply = function(a,b) {
    let sum = a*b;
    return sum;
  };

  const divide = function(a,b){
    let sum = a/b;
    return sum;
  }
  
  //const multiply = function(array) {
    //return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
  //};

  //const divide = function(array) {
    //return array.reduce((accumulator, currentValue) => accumulator / currentValue, 1);
  
  //};
  
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



  //calculation 
const operate =(a,b,c)=>{
  let total=0;


  switch(c){
    case "*":
      total = multiply(a,b);
      break;
    case "/":
      if(b==0){
        return"Can't divide by 0."
       }else{
        total = divide(a,b);
       }
      break; 
    case "+":
      total = add(a,b);
      break;
    case "-":
      total = subtract(a,b);
      break; 
    case "^":
      total = power(a,b);
      break;
 
    };
    return total;
  };

  console.log(calculator(1,3,'*'));
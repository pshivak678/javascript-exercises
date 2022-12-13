const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
  return num1-num2;
	
};

const sum = function(arr) {
  let total=0;
  for(i=0;i<arr.length;i++){
    total+=arr[i];
  }
  return total;
	
};

const multiply = function(arr) {
  let total=1;
  for(i=0;i<arr.length;i++){
    total*=arr[i];
  }
  return total;


};

const power = function(num1,num2) {
  pow=1;
  for (i=1;i<=num2;i++){
      pow*=num1;
  }
	return pow;
};

const factorial = function(num) {
  fact=1;
  for(i=0;i<num;i++){
    fact*=num-i;
  }
  return fact;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

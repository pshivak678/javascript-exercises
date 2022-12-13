const fibonacci = function(num) {
    fib=[];
    for(i=0;i<=50;i++){
        if(i=0) {
            fib[0]=1;
        }
        else fib[i]=1+fib[i-1]
    }
    return fib[num];


};

// Do not edit below this line
module.exports = fibonacci;

const reverseString = function(word) {
    let d='';
    for(i=0;i<word.length;i++){    
        d+=word[word.length-i-1]; 
    }
    return d;
    
    
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (word) {
    let rev=[];
    for(i=0;i<word.length;i++){
        rev[i]=word[word.length-i-1]
    }
    return rev.toString().join(',');
    // if(rev == word) return true;
    // else false;
};

// Do not edit below this line
module.exports = palindromes;

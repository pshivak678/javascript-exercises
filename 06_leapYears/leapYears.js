const leapYears = function(year) {
    if(year>0){
        if (year%400==0) return true;
        else{
        num=year%100;
        if (num==0) return false;
        if(num%4==0) return true;
        else return false;
        }
    }

};

// Do not edit below this line
module.exports = leapYears;

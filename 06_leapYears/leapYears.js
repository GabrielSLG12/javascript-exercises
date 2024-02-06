const leapYears = function(leap) {
    if(leap % 4 === 0){
        if(leap % 100 === 0){
            if(leap % 400 === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
        
        

};

// Do not edit below this line
module.exports = leapYears;

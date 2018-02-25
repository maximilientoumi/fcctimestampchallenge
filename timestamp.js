var moment = require('moment')
 var timestamp = function(time){
    var patt = /^[0-9]*$/g;
    var isValidNum = patt.test(time);
    // console.log(isNum);
    if(isValidNum){
        var date = moment.unix(time);
        return {
            unix: time,
            natural : date.format('MMMM DD YYYY')
        }
    
    } else {
        if(moment(time,'MMMM DD YYYY').isValid()){
            var date = moment(time,'MMMM DD YYYY');
          
            return {
                unix: date.format('X'),
                natural: time
            }
           
        } else {
            return {
                unix: null,
                natural: null
            }
        }
    }
}
module.exports = timestamp;
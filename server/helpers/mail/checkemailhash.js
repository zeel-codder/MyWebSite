
var validator = require('validator');


function CheckMail(email){
    
    
    return  validator.isEmail(email);
       
  


}

export default CheckMail;

/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  let converter = {
    gal:  ["L", "gallons"],
    l:    ["gal", "liters"],
    lbs:  ["kg", "pounds"],
    kg:   ["lbs", "kilograms"],
    mi:   ["km", "miles"],
    km:   ["mi", "kilometers"],
  };
  
  this.getNum = function(input) {

    // regex for all characters at the end
    let regex = /[a-z]*$/i;

    // split the input into the characters at end and everything else
    let result = input.split(regex)[0] || 1;

    try{
      result = eval(result)
    
    } catch(e) {
      throw new Error('invalid number')
    }

    return result;
  };
  
  this.getUnit = function(input) {

    // regex for all characters at the end
    let regex = /[a-z]*$/i;

    // match the regex and convert the match to lowercase
    let result = input.match(regex)[0].toLowerCase();

    if(converter.hasOwnProperty(result)) return result;

    throw new Error('invalid input')
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

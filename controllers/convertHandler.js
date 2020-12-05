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
    L:    ["gal", "liters"],
    lbs:  ["kg", "pounds"],
    kg:   ["lbs", "kilograms"],
    mi:   ["km", "miles"],
    km:   ["mi", "kilometers"],
  };
  
  this.getNum = function(input) {

    // regex for all characters at the end
    let regex = /[a-z]*$/i;

    // split the input into the characters at end and everything else
    let result = input.split(regex)[0] || "1";

    // division / multiplication character exceeds 1
    if ((result.split('/').length - 1) > 1) return undefined;
    if ((result.split('.').length - 1) > 1) return undefined;

    try{
      result = eval(result)
    
    } catch(e) {
      return undefined;
    }

    return result;
  };
  
  this.getUnit = function(input) {

    // regex for all characters at the end
    let regex = /[a-z]*$/i;

    // match the regex and convert the match to lowercase
    let result = input.match(regex)[0].toLowerCase();

    if(result == "l") return "L"
    if(converter.hasOwnProperty(result)) return result;

    return undefined;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = converter[initUnit][0];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    let result = converter[unit][1];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit) {
      case "mi" : {
        return (initNum * miToKm).toFixed(5);
      }
      case "km" : {
        return (initNum / miToKm).toFixed(5);
      }
      case "lbs" : {
        return (initNum * lbsToKg).toFixed(5);
      }
      case "kg" : {
        return (initNum / lbsToKg).toFixed(5);
      }
      case "gal" : {
        return (initNum * galToL).toFixed(5);
      }
      case "L" : {
        return (initNum / galToL).toFixed(5);
      }
      default : {
        return new Error("invalid number and unit")
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let spellInitUnit = this.spellOutUnit(initUnit);
    let spellRetUnit  = this.spellOutUnit(returnUnit);
    
    let result = `${initNum} ${spellInitUnit} converts to ${returnNum} ${spellRetUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;

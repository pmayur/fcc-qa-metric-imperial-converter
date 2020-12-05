/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      
      // input from the request
      let input = req.query.input;

      // parse input to separate number and unit
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      
      // both number and unit provided are invalid
      if(!initNum && !initUnit) return res.status(400).send("invalid number and unit")

      // number provided invalid
      if(!initNum) return res.status(400).send("invalid number")

      // unit provided invalid
      if(!initUnit) return res.status(400).send("invalid unit")

      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);

      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.json({
        "initNum": parseFloat(initNum),
        "initUnit": initUnit,
        "returnNum": parseFloat(returnNum),
        "returnUnit": returnUnit,
        "string": toString
      })
    });
    
};

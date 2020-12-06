/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32mi';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.2';
      assert.equal(convertHandler.getNum(input), 32.2)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/2kg';
      assert.equal(convertHandler.getNum(input), 0.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '3.0/2km';
      assert.equal(convertHandler.getNum(input), 1.5)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/1/2km';
      assert.equal(convertHandler.getNum(input),undefined);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'km';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','mi','km','lbs','kg','GAL','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit('10'+ele), ele.toLowerCase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('10pound'), undefined);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.equal(convertHandler.convert(input[0],input[1]),expected);
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.equal(convertHandler.convert(input[0],input[1]), expected); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.04670;
      assert.equal(convertHandler.convert(input[0],input[1]), expected); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'km'];
      var expected = 3.10686;
      assert.equal(convertHandler.convert(input[0],input[1]), expected); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.26796;
      assert.equal(convertHandler.convert(input[0],input[1]), expected); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.02312;
      assert.equal(convertHandler.convert(input[0],input[1]), expected); //0.1 tolerance
      done();
    });
    
  });

});
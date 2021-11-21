const prodSelection= require("../../pagefactory/productSelctionFactor.js");


const data=require('../../testData/TC2.json');
let i=0;

require('cypress-xpath')

describe('Testcase for selecting multiple items in different size', function ()  {
    beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
    })
    Object.keys(data)
        .forEach(function(tc,i){
            const testData=data[i];
            it(testData.tc,function() {
                execute(testData)
            })
        })
})




function execute(data) {
    var checkoutvalue=data.checkoutamount

    
    prodSelection.selectSize(data.firstitemsize);
             
        prodSelection.validateselection(data.sizeverify,data.quanity)
        //uncheck small
           prodSelection.uncheckselection(data.firstitemsize);

          prodSelection.selectSize(data.seconditemsize);


          prodSelection.validatesecondselection(data.secondsizeverify,data.quanity)

      

       prodSelection.completecheckout(checkoutvalue);
        /*    cy.xpath('//div[@class="shelf-item__details"]//following::p')
         .invoke('text')
  .then((text1) => {
      expect(text1).to.contains('L')
      expect(text1).to.contains('Quantity: 1')
  })
 // '//div[@class="shelf-item__details"][1]//following::p'*/
   /* cy.xpath('//div[@class="shelf-item__details"][1]//following::p')
         .invoke('text')
  .then((text1) => {
      expect(text1).to.contains('M')
      expect(text1).to.contains('Quantity: 1')
  })*/

         //prodSelection.selectSize("medium");
         //prodSelection.validateselection("medium",data.quanity)


       
}
const prodSelection= require("../../pagefactory/productSelctionFactor.js");


const data=require('../../testData/TC3.json');
let i=0;

require('cypress-xpath')

describe('Testcase for sort the product and checkout', function ()  {
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
    if(data.sortlist=='small'){
        cy.get('select').select('lowestprice');
    }else {
        cy.get('select').select('highestprice');
    }

    

    prodSelection.selectSize(data.size);
    cy.log("data");
             
        prodSelection.validateselection(data.sizeverify,data.quanity)

        
        prodSelection.completecheckout(checkoutvalue);

       //  prodSelection.selectSize("medium");
        // prodSelection.validateselection("medium",data.quanity)


       
}
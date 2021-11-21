
const prodSelection= require("../../pagefactory/productSelctionFactor.js");
const addcontext=require('mochawesome/addcontext');


const data=require('../../testData/TC1.json');
let i=0;

require('cypress-xpath')


describe('Testcase to add  specific item based on user size input', function ()  {
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
  addcontext(this, 'context');
   
    prodSelection.selectSize(data.size);
     
             
        prodSelection.validateselection(data.sizeverify,data.quanity)

        prodSelection.completecheckout(checkoutvalue);


       
}
function addTestContext(title, value) {
  cy.once('test:after:run', test => addContext({ test }, { title, value }));
}
  

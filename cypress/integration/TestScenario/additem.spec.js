
const prodSelection= require("../../pagefactory/productSelctionFactor.js");
const addcontext=require('mochawesome/addcontext');


const data=require('../../testData/TC1.json');
let i=0;

require('cypress-xpath')
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Testcase for checkout', function ()  {
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
    addTestContext('selecting the size','S');
    prodSelection.selectSize(data.size);
     addTestContext('verifying the size','s');
             
        prodSelection.validateselection(data.sizeverify,data.quanity)

         if(data.addquanity>1){
             cy.xpath('//button[contains(text(),"+")]').first().should("be.visible").click({force:true})
             checkoutvalue=(checkoutvalue*data.addquanity).toFixed(2)
         }
        prodSelection.completecheckout(checkoutvalue);


       
}
function addTestContext(title, value) {
  cy.once('test:after:run', test => addContext({ test }, { title, value }));
}
  

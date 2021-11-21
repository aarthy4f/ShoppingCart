const prodSelection= require("../../pagefactory/productSelctionFactor.js");


const data=require('../../testData/Tc5.json');
let i=0;
let j=0;

require('cypress-xpath')

describe('Testcase for select the items for user colour preference', function ()  {
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

    var updatexpath="//p[contains(text(),'"+ data.color + "')]/following-sibling::div[@class='shelf-item__buy-btn'][1]"
    cy.log(updatexpath);
    cy.xpath(updatexpath).click({multiple:true,force:true});

    prodSelection.completecheckout(checkoutvalue);

   
    
    
    
    
    
    
    
    
    // cy.xpath( '//p[contains(text(),"Blue")]//following-sibling::div[@class="shelf-item__buy-btn"][1]').click({multiple:true,force:true});
    //cy.xpath('//div[@class="shelf-item__buy-btn"]').first().should("be.visible").click({force:true})
       
      //  cy.xpath('//div[@class="shelf-item__buy-btn"]').first().should("be.visible").click({force:true})

    /*prodSelection.selectSize(data.firstitemsize);
             
   
      var updatedquanity;
        for ( var i=0;i< data.addquanity;i++){
              cy.xpath('//button[contains(text(),"+")]').first().should("be.visible").click({force:true})
        }
        var totalquantity=parseInt(data.addquanity)+1;
        checkoutvalue=(checkoutvalue*totalquantity).toFixed(2)
        
        cy.log(checkoutvalue);

      
       cy.log("removed selection")
       cy.log(data.removequanity)
    

      for ( var j=0;j< data.removequanity;j++){

              cy.xpath('//button[contains(text(),"-")]').first().should("be.visible").click({force:true})
        }
        var removedquanity=parseInt(data.removequanity);
        updatedquanity=totalquantity-removedquanity;
         cy.log(updatedquanity);

        checkoutvalue=(data.checkoutamount*updatedquanity).toFixed(2)
        cy.log("updatedvalue after remove")
        cy.log(checkoutvalue);

        prodSelection.completecheckout(checkoutvalue);*/

       
     


       
}
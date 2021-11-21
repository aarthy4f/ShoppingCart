const productSelectionPage=require("../pageobject/productSelectionPage.js");

const sel=new productSelectionPage();



async function selectSize(size){
	switch(size){
case "small":
	sel.clickSmall().click().wait(6000);
	break;
case "medium":
sel.clickMedium().click().wait(6000);
	break;

	}

	sel.clickAddToCard().first().should("be.visible").click({force:true})
	

	//sel.clickSmall().click().wait(6000);

}
async function uncheckselection(size){
	switch(size){
case "small":
	sel.clickSmall().click().wait(6000);
	break;
case "medium":
sel.clickMedium().click().wait(6000);
	break;

	}
}
async function validateselection(size,quantity){
	 var vquantity="Quantity: "+quantity;
sel.getQuantity().invoke('text')
  .then((text1) => {
      expect(text1).to.contains(size)
      expect(text1).to.contains(vquantity)
  })
   cy.get('.float-cart__shelf-container')
        .should('have.length', 1)
}
async function validatesecondselection(size,quantity){
	 var vquantity="Quantity: "+quantity;
sel.getsecondQuantity().invoke('text')
  .then((text1) => {
      expect(text1).to.contains(size)
      expect(text1).to.contains(vquantity)
  })
   cy.get('.shelf-item__details')
        .should('have.length', 2)
}

async function completecheckout(amount){
	 var checkoutAmount="Checkout - Subtotal: $ "+amount;
	sel.clickbuy().should("be.visible").click({force:true});
	cy.on('window:alert', (str) => {
  expect(str).to.equal(checkoutAmount)
	});
}
module.exports={selectSize,validateselection,completecheckout,uncheckselection,validatesecondselection};
class  productSelectionPage{

	clickSmall(){
		return cy.xpath("//span[text()='S']",{timeout:15000});
	}
	clickMedium(){
		return cy.xpath("//span[text()='M']",{timeout:15000});
	}
	clickAddToCard(){
		return cy.xpath("//div[@class='shelf-item__buy-btn']");
	}
	getQuantity(){
		return cy.xpath("//p[@class='desc']");
	}
	clickbuy(){
		return  cy.xpath("//div[@class='buy-btn']");
	}
}
module.exports=productSelectionPage
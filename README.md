# ShoppingCart
Sample automation for the shopping cart website

**Running test:**
 Install dependencies by running npm i
 Execute the below command
 npm run test-> to run test headlessly 
 npmx cypress open to open the Cypress Visual Test Runnier on the root directory of this project.
 
 To run single testcase kindly use the below command
 export spec='additem' //Other option addandremove,multiplecartitem,sortorderby,additembycolor
 npm run singletestcase 


**TestCases**

1. Add the item based on the size S,M,L.
2. Add multiple quanity and remove the quantity.
3. Add multiple items in the cart.
4. Sort by order and select the items.
5. Add the items by sepecific color.

**Report**

Moachawesome report is included to generate the report for execution.

Folder Structure

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this

cypress/pageobject-: The xpath are captured and placed

cpress/testdata-: The testdata which is passed to the spec file, the data was passed in json format




 

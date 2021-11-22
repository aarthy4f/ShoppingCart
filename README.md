# ShoppingCart
Sample automation for the shopping cart website

**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

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

**Folder Structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data was passed in json format

**Report**

Moachawesome report is included to generate the report for execution.

Sample Report 

![image](https://user-images.githubusercontent.com/56670845/142773355-f4d504d3-a95f-405b-975f-fe06db20acaf.png)







 

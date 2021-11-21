const cypress = require('cypress');
//var _=require('loadash');
var myArgs = process.argv
//param=require('./params');
function main(){
	try{
	console.log("myagr"+ myArgs[2]);
	//additem.spec
var specfile;
	switch(myArgs[2]){
case "additem":
	specfile='cypress/integration/TestScenario/additem.spec.js'
	console.log(specfile);
	break;
case "addandremove":
	specfile='cypress/integration/TestScenario/addandremove.spec.js'
	console.log(specfile);
	break;
case "multiplecartitem":
	specfile='cypress/integration/TestScenario/multiplecartitem.spec.js'
	console.log(specfile);
	break;
case "sortorderby":
	specfile='cypress/integration/TestScenario/sortandadd.spec.js'
	console.log(specfile);
	break;
case "additembycolor":
	specfile='cypress/integration/TestScenario/addspecificcolor.spec.js'
	console.log(specfile);
	break;

	}
	cypress.run({
		spec:specfile,
	}).then((result)=>{
		console.log("done");
	})
	}catch(err){
		console.log(err);
	}
}

main()
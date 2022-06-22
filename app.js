// Only used this to learn some basic node.js stuff
    // const profileDataArgs = process.argv.slice(2, process.argv.length);
    
    // console.log(profileDataArgs);
    
    // const printProfileData = profileDataArr => {
    
    //     for(let i = 0; i < profileDataArr.length; i++){
    //         console.log(profileDataArr[i]);
    //     }
    
    
    //     console.log("================");
    
    //     profileDataArr.forEach((profileItem) => {
    //         console.log(profileItem);
    //     });
    // };
    
    // printProfileData(profileDataArgs);


const fs = require('fs');
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [yourName, github] = profileDataArgs;



fs.writeFile("./index.html", generatePage(yourName, github), err => {
    if(err) throw err;

    console.log("Portfolio complete! Checkout out index.html to see the output!");
});
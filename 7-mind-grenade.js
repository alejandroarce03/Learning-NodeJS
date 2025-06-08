const num1 = 5;
const num2 = 10;

function addvalues(){
    console.log(`the sum is ${num1 + num2}`);
}

//This function is gonna run when i require on another module, it is no necesary to export in order to print the sum
addvalues()
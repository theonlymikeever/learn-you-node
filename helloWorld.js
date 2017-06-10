// console.log('Hello World!');

// console.log('module object', module)

//functions
function printHello(str){
    if (str) {
        console.log('Hello, ' + str + '!' );
    } else {
        console.log('Hello, World!');
    }
}
//exports
module.exports = {
  printHello: printHello,
};

console.log(module);


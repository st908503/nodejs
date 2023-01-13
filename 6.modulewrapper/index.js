
(function (exports, require, module, __filename, __dirname){
    const name = 'shashank';
console.log(name)
})


// console.log(__dirname);
// console.log(__filename)




// by default node places below two line code in a module wrapper function which makes the scope of our module private. Arguments of this function are exports, require, module, __filename, __dirname). This  is the reason we can use require, module, exports etc in our code which is not a global scope its a private scope.
// so we dont write the module wrapper function sepearately(as above) instead we only write the code.(as below) module wrpper fn will automatically wrap the code. 

// const name = 'shashank';
// console.log(name)



// Immediately invoked function expression

// (function (){
// var a = 'hello';
// console.log(a)

// }) ();
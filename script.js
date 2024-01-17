// const a = {
//     name: "Jonh",
//     age: 20
// }

// const b = {...a};

// b.name = "bob";

// console.log(a);
// console.log(b);

// const a = {
//     name: "Jonh",
//     age: 20,
//     address: {
//         city: "mumbai"
//     }
// }

// const b = { ...a }; // shallow copy

// b.address.city = "surat";
// b.name = "bob";

// console.log(a);
// console.log(b);


// const a = {
//     name: "Jonh",
//     age: 20,
//     address: {
//         city: "mumbai"
//     }
// }

// // object  => String = String => object

// let b = JSON.stringify(a) // deep copy
// b = JSON.parse(b)

// b.address.city = "surat";
// b.name = "bob";

// console.log(a);
// console.log(b);


// Higer Order Function
// 

// function hof(){

// }


// function run(a){ // when function take a function in parameter 

// }

// run(hof);

// // ====================== or =============================

// function run(a){
//     return hof; // value
// }

// run(10);



// function double(x) {
//     return x * 2;
// }

// function applyOperation(value, operation) {
//     return operation(value)
// }

// const result = applyOperation(5, double);
// console.log(result)


// function mutiplyer(factor) {
//     return function (value) {
//         return value * factor;
//     };
// }

// const ans2 = mutiplyer(2);
// const ans3 = mutiplyer(3);

// console.log(ans2(3));
// console.log(ans3(3));
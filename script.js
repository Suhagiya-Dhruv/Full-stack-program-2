
// function outer() {

//     var a = 10;

//     function run() {
//         a++;
//         return a;
//     }

//     return run;
// }

// const value = outer() // run()
// console.log(value());
// console.log(value());
// console.log(value());
// console.log(value());
// value()
// value()
// value()
// value()

// console.log(a);


// if(0){ // false
//     console.log("Ans 0");
// }

// if(1){ // true
//     console.log("Ans 1");
// }


// if(""){ // false
//     console.log("Empty string");
// }

// if("a"){ // true
//     console.log("not empty string")
// }

// if(true){
//     console.log("Yes")
// }

// if(false){
//     console.log("no");
// }

// if({}){ // true
//     console.log("Object")
// }

// if([]){ // true
//     console.log("Array")
// }

// if (null) { // false
//     console.log("Falsy")
// }

// if (undefined) { // false
//     console.log("Falsy")
// }

// if (NaN) { // not a number
//     console.log("Falsy")
// }


const a = {
    a:"123",
    b:'456',
    c:{
        a:15
    }
}

// Object.preventExtensions(a); // add not allow , delete allow, change allow
// a.c = "789";
// delete a.b;

// Object.seal(a); // add not allow, delete not allow, change allow

// a.a = "789";
// delete a.b;

// Object.freeze(a); // add not allow, delete not allow, change not allow

// delete a.a;

// console.log(a)

// Object
// Array

// var a = 10;
// var b = "sting";

// var o = {};
// var a = [];

// console.log(typeof(o));
// console.log(typeof(a));

// console.log(Array.isArray(0));

// index - value
//      0   1  2  3   4  5       6
var a = [1, 5, 6, 9, 10, true, "String"];

// console.log(a[6]);  // value read


// key - value
// var o = {
//     a: 10,
//     b: 20,
//     name: "C value",
//     status: true
// }

// console.log(o.status); // value read

// var key1 = "pincode";

// key1 = "city";

// var o1 = {
//     fname: "John",
//     address: {
//         city: "Surat",
//         pincode: 369859
//     }
// }

// console.log(o1); // value read
// console.log(o1.fname); // value read
// console.log(o1.address.city); // value read
// console.log(o1.address[key1]) // o1.address.pincode


// var o1 = {
//     fname: "John",
//     address: {
//         city: "Surat",
//         pincode: 369859
//     }
// }

// o1 = {
//     fname: "Bob",
//     address: {
//         city: "Surat",
//         pincode: 369859
//     }
// } // wrong method

// o1.fname = "Bob";
// o1.address.city = "Ahmadabad";
// o1.lname = "Bob"
// o1.address.state = "gujarat";

// delete o1.address;

// console.log(o1)

// string method -> split, concat, charAt, trim

var a = [1, 7, 3, 4, 9, 6, 5, 8,2];
var b = [10,11,12];

// a.concat(b)

// 123456789 // string

// console.log(a);
// console.log(a.join()); // convert to string
// console.log(a.join(""));
// console.log(a.join("-"));

// a.push(-1);
// a.pop(); // remove last value
// a.push(12); // add value in last


// a.shift(); // remove first value
// a.shift(); // remove first value

// a.unshift(10); // add value in front

console.log(a.valueOf());
// console.log(a.join());


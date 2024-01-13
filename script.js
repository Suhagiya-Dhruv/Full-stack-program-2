/*
push
pop
shift
unshift
concat
join
length

slice
splice
map
filter
reduce

flatten


*/

// const a = [1,2,3,4,5,6,7,8,9];

// console.log(a.length);

// const b = a.slice(); // return new array but not change the orignal array
// const b = a.slice(2); // return new array index 2 to end
// const b = a.slice(2,5); // return new array index 2 3 4
// const b = a.slice(-5); // return new array but start from end


// const b = a.splice() // return new array but change orignal array
// const b = a.splice(2) // return new array but change orignal array
// const b = a.splice(2,6) // remove element from index 2 to next 7 element
// const b = a.splice(4,1) // remove element from index 4 to next 1 element
// const b = a.splice(4,0,5) // remove zero element and add 5 in 4 index
// const b = a.splice(4,0,5,6,7,8) // remove zero element and add 5,6,7,8 in 4 index to 7 index

// const a = [11, 12, 13, 14, 15, 16, 17, 18, 19];


// function om(a, b) {
//     if (a % 2 == 0) {
//         return a * 10
//     }
//     return a;
// }

// const b = a.map(om);


// const b = a.map(function(a,b){
//     return a*10;
// });

// const c = a.map((a, b) => a * 10);

// console.log(a);

// function filterValueIsEvent(a, b) {
//     if (a % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const b = a.filter(filterValueIsEvent)

// const b = a.filter((a) => a % 2 == 0)

// console.log(b);
// console.log(c);

// function hello(){
// return "jonh"
// }

// const h = hello();

// console.log(h)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var sum = 6;

// for(var i=0;i<=8;i++){
//     sum = sum + arr[i];
// }

// console.log(sum);

// function sum(a, b) {
//     console.log(a, b);
//     return a - b;
// }

// const ans = arr.reduce(sum, 45);

// console.log(ans);

// const arr = [1, 2, 3, 4, 5]; // 1D array

// i: v // i = index, v = value
// 0 : 1
// 1 : 2
// 2 : 3
// 3 : 4
// 4 : 5

// arr[2]; // 3

// const arr2 = [1, 2, 3, [4, 5, 6], 7];

// i: v // i = index, v = value
// 0 : 1
// 1 : 2
// 2 : 3
// 3 : [ 0 : 4, 1 : 5, 2: 6]
// 4 : 7

// const b = arr2[3] // [4,5,6];
// b[1];


// arr2[3][1] // [4,5,6];

// const arr = [1,2,3,[4,5,6]];

// console.log(arr);
// console.log(arr.flat()); // [1,2,3,4,5,6]

// const arr2 = [1,2,3,[4,[5,[6]]]];

// console.log(arr2);
// console.log(arr2.flat(1));

// console.log(arr);
// console.log(arr.flat(Infinity)); 


// const b = {
//     name: "John",
//     contact: {
//         email: "john@gmail.com",
//         mobile: 87987978878
//     }
// }

// const c = b; // refernce

// c.name = "Bob";

// console.log(b);
// console.log(c);

// function abc(a, b, ...all) { // rest
//     console.log(a, b, ...all); // spread
// }

// abc(10, 20, 30, 5, 6, 4, 8, 1, 7, 41, 7);

// const a = {
//     name: 1,
//     address: 2,
//     mobile: 3,
//     pincode: 4
// }


// const { address, pincode } = a; //  Destructuring of Object

// console.log(address, pincode);



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //  Destructuring of Array

const [harsh, domadiya, ...all] = arr;

console.log(harsh, domadiya, all)



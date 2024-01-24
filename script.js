// console.log("1 event");

// setTimeout(()=>{
//     console.log("2 event");
// },5000) // time milisecond



// setTimeout(()=>{
//     console.log("2.1 event");
// },2000) // time milisecond

// function run(){
//     console.log("3 event");
// }

// run();


// console.log("4 event");

// let i = 0;
// function callFn(){
//     console.log("event",i++)
// }

// const jonh = setInterval(callFn, 500);

// const value = setTimeout(()=>{
//     clearInterval(jonh);
// },5000)

// clearTimeout(value);

// callFn();

// console.log("Step 1")

// function p(resolve, reject) { // a => resolve, b => reject
//     reject("No")
// }

// const promise = new Promise(p).then(data => data).catch(data => data);

// console.log(promise)

// async/await

// async function run() {
//     const promise = await new Promise(p).then(data => data).catch(data => data);
//     console.log(promise)
// }

// run();

//API

// [] => html CSS
//  request -> email/password



//  response -> YEs
// [] => database


// API => https://fakestoreapi.com/products/1

// async function product(id){

//     const a = await fetch(`https://fakestoreapi.com/products/${id}`)
//     const data = await a.json();
//     console.log(data)
// }

// product(15)
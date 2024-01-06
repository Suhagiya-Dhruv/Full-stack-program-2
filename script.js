// let a = 15;

// function hello(){

//     var b =20;
//     let c = 15;
//     {
//         var d = 50;
//         const f = 50;
//         let e = 50;
//     }
// }

// var fname = "Om"
// var lname = "Radadiya"

const obj = {
    fname: "Dhruv",
    lname: "Suhagiya",
    fullname : function fullname() { // parameter
        console.log(this);
        return `${this.fname} ${this.lname}`;
    }
}

// key : value

// const fullname = a.fname.concat(a.lname); // Dhruv Suhagiya
// const fullname1 = `${a.fname} ${a.lname}` // Dhruv Suhagiya

// function fullname(a, b) { // parameter
//     return `${a} ${b}`;
// }

const value = obj.fullname(); // Call the function
console.log(value);

const fun = obj.fullname;
const value2 = fun();

console.log(value2);


function sum(a,b){
    return a+b;
} 

const multi = (a,b) => {
    return a*b
}

console.log(sum(15,20));
console.log(multi(15,20));
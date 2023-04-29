const obj1={
    name : "Bruce Wayne"
}

// const obj2 = obj1;

// obj2.name = "Clark Kent";

let obj2 = obj1;
obj2={};   // this will break the reference

console.log(obj1);
console.log(obj2);
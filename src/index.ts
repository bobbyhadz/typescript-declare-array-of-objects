export {};

// EXAMPLE 1 - Declare an Array of Objects in TypeScript

const arr: { name: string; age: number }[] = [{ name: 'Alice', age: 27 }];

const obj = { name: 'Bobby hadz', age: 30 };

arr.push(obj);

// 👇️ [ { name: 'Alice', age: 27 }, { name: 'Bobby hadz', age: 30 } ]
console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Declare an Array of Objects using an existing Type or an Interface

// // ✅ with existing Type or Interface
// interface Person {
//   name: string;
//   age: number;
// }

// const arr: Person[] = [{ name: 'Alice', age: 27 }];

// const obj: Person = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// arr.push(obj);

// // 👇️ [ { name: 'Alice', age: 27 }, { name: 'Bobby Hadz', age: 30 } ]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 3 - Declare an Array of Objects using the typeof operator

// const obj = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// // const arr: {
// //     name: string;
// //     age: number;
// // }[]
// const arr: (typeof obj)[] = [];

// arr.push(obj);

// arr.push({ name: 'Alice', age: 27 });

// // 👇️ [ { name: 'Bobby Hadz', age: 30 }, { name: 'Alice', age: 27 } ]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 4 - When you don't know all keys of the objects in the array in advance

// interface Person {
//   name: string;
//   age: number;
//   [key: string]: any; // 👈️ index signature
// }

// const arr: Person[] = [
//   { name: 'Alice', age: 27 },
//   { name: 'Bobby hadz', age: 28, country: 'Chile' },
// ];

// arr.push({ name: 'Carl', age: 30, country: 'Canada' });

// ---------------------------------------------------

// // EXAMPLE 5 - Letting TypeScript infer the type of an array of objects

// // 👇️ const arr: any[]
// const arr = [];

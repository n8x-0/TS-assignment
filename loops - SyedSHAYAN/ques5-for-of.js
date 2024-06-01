let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (let i = 1; i <= myArray.length; i++) {
    console.log(`${i}: index ${myArray.indexOf(i)}`);
}
for (let i of myArray) {
    console.log(i);
}
export {};

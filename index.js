
console.log("================ vowel counter ============\n");

function vwlCounter(x){
    let para = x.split('');
    let filter = para.filter(y => y === 'a' || y === 'e' || y === 'i' || y === 'o' || y === 'u');
    console.log(`vowels are (${filter}) in the text "${x}"`);
    console.log(`no of vowels include in the text ${filter.length}`);
}
vwlCounter("hello world")

console.log("\n============ prime number checker ============\n");

function isPrime(x){
    console.log(`is ${x} prime number:`);
    if(x <= 1)
        return false;
    if(x === 2)
        return true;
    return isPrimeRecur(x,2);
}

function isPrimeRecur(x,y){
    if(y*y > x)
        return true;
    if(x % y === 0)
        return false;
    return isPrimeRecur(x,y+1);
}

console.log(isPrime(12));

console.log("\n============ find the first not repeated charecter ============\n");

function firstNotRepeatingChar(x){
    console.log(`first not repeated charecter in "${x}" is "${x.split('').find(y => x.indexOf(y) === x.lastIndexOf(y))}"`); 
}
firstNotRepeatingChar("hello world")

console.log("\n============ square of a number ============\n");

function square(x) {
    return x**2
}
console.log(square(9));

console.log("\n============ last question ============\n");

console.log(`\n "Hello World" `)
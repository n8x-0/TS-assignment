//======================================================================== Question 1

type Friend = {firstName: string, lastName: string, id?: number};

let people: {friends: Friend[]} = {
    friends: []
}

let frnd1: Friend = {
    firstName: "Fahad",
    lastName: "Ali",
}
let frnd2: Friend = {
    firstName: "Jawad",
    lastName: "Alam",
    id: Math.floor(Date.now())
}
let frnd3: Friend = {
    firstName: "Saad",
    lastName: "Khan",
}

people.friends.splice(0,0, frnd1, frnd2, frnd3)

console.log(`\n========== Building Your Friend List =========\n\n`, people, `\n`);

//======================================================================== Question 2

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

scrambledArray.splice(2,2);
let ord = [scrambledArray[5], scrambledArray[2], scrambledArray[3], scrambledArray[0], scrambledArray[1], scrambledArray[4]]
let x = ord.join(' ')

console.log(`\n================== Rearranging Words ==================\n\n${x}\n`);

//========================================================================= Question 3

type Product = { name: string, model: string, cost: string, quantity: string}

let inventory: Product[] = [];

const product1: Product = {
    name: "Jooti",
    model: "X",
    cost: "1200",
    quantity: "100",
}
const product2: Product = {
    name: "Apple",
    model: "16pro",
    cost: "10",
    quantity: "100000",
}
const product3: Product = {
    name: "Router",
    model: "HS453",
    cost: "2000",
    quantity: "1000",
}

inventory.splice(0,0,product1,product2,product3)

console.log(`\n============ Company Product Catalog ============\n\n`, inventory, `\n`);

//========================================================================== Question 4

interface Student {
    name: string,
    senior: boolean,
    assignment: boolean
}

let student: Student[] = [
    {
        name: "Shayan",
        senior: true,
        assignment: true
    },
    {
        name: "Hamza Alvi",
        senior: true,
        assignment: true
    },
    {
        name: "Shagufta",
        senior: false,
        assignment: false
    },
    {
        name: "Fahad",
        senior: false,
        assignment: false
    },
    {
        name: "Ali",
        senior: true,
        assignment: false
    },
]

const findSenior = () =>{
    let seniors = student.filter(x => x.senior === true && x.assignment === true)
    return seniors;
};

console.log(`\n========== Student List Organizer =========\n\n--------- Finding Seniors with assignments --------\n`,findSenior(),`\n`);

const removeStd = () =>{
    let rmStd = student.filter(x => x.assignment === true);
    student = rmStd
}
removeStd()
console.log(`\n---- Removing Students without assignments or if they are'nt seniors ----\n`,student,`\n`);


// Time Taken only around 20 - 30 minutes, flawlessly_
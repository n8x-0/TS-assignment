let myObj: { item1: string, item2: string, item3: string } = {
    item1: "item1 value",
    item2: "item2 value",
    item3: "item3 value"
}

for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}
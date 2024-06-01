let myWork = [];

for(let i = 1; i <= 10; i++){
    let lessons: {name: string, status: boolean} = {
        name: `lesson ${i}`,
        status: i % 2 == 0 ? true : false
    }
    myWork.push(lessons)
}
console.log(myWork);

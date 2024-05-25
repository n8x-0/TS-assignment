
import inquirer from "inquirer";

type Student = { name: string, grades: number[] };

let student: Student[] = [
    {
        name: 'Fahad',
        grades: [33, 60, 84]
    },
    {
        name: "Shayan",
        grades: [87, 74, 91]
    },
    {
        name: "Ali",
        grades: [83, 74, 61]
    },
]

const calculateAvgGrades = async () => {
    let lsStd = student.map(x => x.name,)
    const ques = await inquirer.prompt({
        name: "std",
        type: "list",
        message: "selcet student name",
        choices: lsStd
    })
    if (ques.std) {

        let slectedStd: any = student.find(x => x.name === ques.std);
        let grades = slectedStd.grades;

        let sum = grades.reduce((a: number,b: number) => a+b);
        let avg = Math.round(sum / grades.length);
        
        if(sum <= 100){
            console.log(`Student name: ${slectedStd.name}\nGrade: C\nTotal Marks: ${sum}/300\nAverage Marks: ${avg}`);
        }else if(sum > 100 && sum <= 200){
            console.log(`Student name: ${slectedStd.name}\nGrade: B\nTotal Marks: ${sum}/300\nAverage Marks: ${avg}`);
        }else{
            console.log(`Student name: ${slectedStd.name}\nGrade: A\nTotal Marks: ${sum}/300\nAverage Marks: ${avg}`);
        }
    }
}
calculateAvgGrades()
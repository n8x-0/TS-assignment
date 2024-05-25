type Employee = {
    name: string,
    hourWorked: number,
    hourlyRate: number,
    salary: number
}

let employee: Employee[] = [
    {
        name: "Shayan",
        hourWorked: 8,
        hourlyRate: 12000,
        salary: 0
    },
    {
        name: "Quaid e Azam",
        hourWorked: 12,
        hourlyRate: 8000,
        salary: 0
    },
    {
        name: "Allama Iqbal",
        hourWorked: 21,
        hourlyRate: 8000,
        salary: 0
    },    
]

const calcSalary = () => {
    employee.map(x => {
        let salary = x.hourlyRate * x.hourWorked;
        x.salary = salary;

        if(x.hourWorked >= 20){
            x.salary * 0.10 // 10% bonus
        }
    })
}
calcSalary()
console.log(employee);

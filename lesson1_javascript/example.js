let students = [
    { name: 'Khanh', age: 7 },
    { name: 'Linh', age: 9 },
    { name: 'Nam', age: 8 },
]
let indexofmin;
let students2 = []

const finMinOfArr = (params, paramsB) => {
    console.log(params);
}   

finMinOfArr('Khanh')

for (let i = 1; i < students.length; i++) {
    for (let j = 0; j < i; j++) {
        if (students[i].age < students[j].age) {
            let min = students[i].age
            students[i].age = students[j].age
            students[j].age = min
            indexofmin = j
            students.splice(indexofmin, 1)
        }
    }
    students2.push(students2[indexofmin])
}

console.log(students2);
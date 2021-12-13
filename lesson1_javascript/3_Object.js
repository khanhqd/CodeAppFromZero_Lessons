// Object

let info = {
    name: "Quach Khanh",
    age: 28,
    phone: "0335815969",
    job: {
        title: 'Dev',
        type: 'Front End',
    }
}

// đọc thuộc tính của obj
console.log(info.name)
console.log(info.job.title)
console.log(info['age'])
// gán thuộc tính 
info.name = 'Linh'
info.car = 'BMW'
console.log(info)


// Array
let arrayA = [1, 2, 3, 4, 5]
let arrayB = [
    { name: 'Huyndai', model: 'Kona' },
    { name: 'Vinfast', model: 'Lux' },
]


console.log(arrayB[0])
console.log(arrayB[1].model)
console.log(arrayA.length);
// Thêm phần tử vào mảng 
arrayA.push(9)

// Xoá phần tử khỏi mảng
arrayA.splice(0, 1) // vị trí muốn xoá | số phần tử muốn xoá

// Cập nhật phần tử
arrayB[0] = {
    name: 'Vin',
    model: 'President',
}
console.log(arrayB);
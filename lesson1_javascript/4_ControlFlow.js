// Control Flow - Luồng thực thi 

// 1, if else - nếu thì, nếu không
let a = 3;
if (a % 2 === 1) {
    console.log('a là số lẻ')
} else {
    console.log('a là số chẵn')
}

// 2, for loop - Vòng lặp
for (let i = 0; i < 4; i++) { // khởi tạo => điều kiện để thực thi => sau khi thực thi
    console.log(i);
}
// VD: Tìm số lớn nhất
let arr = [2, 1, 4, 9, 5];
let maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
}
// for in
for (let num of arr) {
    console.log('for in', num);
}
console.log(maxNumber);


// 3, switch case
let student = {
    class: 'A',
    name: 'Khanh',
}
switch (student.class) {
    case 'A':
        console.log('Học sinh lớp A')
        break;
    case 'B':
        console.log('Học sinh lớp A')
        break;
    default:
        console.log('Học sinh không thuộc lớp A và B')
        break;
}
let parkSlots = [undefined, undefined, undefined, undefined];

let car1 = {
    id: '0',
    owner: 'Khanh',
}
let car2 = {
    id: '2',
    owner: 'Dang',
}

const findEmptySlot = () => {
    // let emptySlot = parkSlots.findIndex((i) => {
    //     return i === undefined;
    // });

    let emptySlot;

    for (let i = 0; i < parkSlots.length; i++) {
        if (parkSlots[i] === undefined) {
            emptySlot = i;
            break;
        }
    }

    return emptySlot
}

const parkACar = (car) => {
    // Tìm ra vị trí còn trống
    let slotIndex = findEmptySlot();

    parkSlots[slotIndex] = car;
}

const countCars = () => {
    // return ra tổng số xe đang đỗ trong bãi
    let total = 0;
    for (let i = 0; i < parkSlots.length; i++) {
        if (parkSlots[i] !== undefined) {
            total = total + 1;
        }
    }
    return total;
}

// camelCase;
parkACar(car1);
parkACar(car2);
console.log(countCars());
console.log(parkSlots);
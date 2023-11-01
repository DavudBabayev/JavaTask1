let Data1NihadKg = 78;
let Data1NihadM = 1.69;

let Data1NailKg = 92;
let Data1NailM = 1.95;

let Data1NihadBKI = Data1NihadKg / (Data1NihadM ** 2);
let Data1NailBKI = Data1NailKg / (Data1NailM ** 2);

let Data1 = Data1NihadBKI > Data1NailBKI;

console.log(Data1);

let Data2NihadKg = 95;
let Data2NihadM = 1.88;

let Data2NailKg = 85;
let Data2NailM = 1.76;

let Data2NihadBKI = Data2NihadKg / (Data2NihadM ** 2);
let Data2NailBKI = Data2NailKg / (Data2NailM ** 2);

let Data2 = Data2NihadBKI > Data2NailBKI;

console.log(Data2);
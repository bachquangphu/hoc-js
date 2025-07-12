let arr = [-1, 4, 6, 3, 5, 9, 10, 20, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
let tong = 0;
for (let phanTu of arr) {
    tong += phanTu;
}
console.log("Tổng các phần tử trong mảng là  " + tong);
if (tong % 2 == 0) {
    console.log("tổng là số chẵn");
} else {
    console.log("tổng là số lẻ");
}
let trungGian = arr[0];
for (let dem of arr) {
    if (trungGian < dem) {
        trungGian = dem;
    }
}
console.log("Số Lớn nhất có trong mảng là " + trungGian);


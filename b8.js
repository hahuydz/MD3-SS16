let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ hai");
let c = +prompt("Nhập số thứ ba");
if( a >= b && a >= c) {
    document.write(`Số lớn nhất là: ${a}`);
}
else if( b >= a && b >= c) {
    document.write(`Số lớn nhất là: ${b} `);
}
else{
    document.write(`Số lớn nhất là: ${c}`);
}
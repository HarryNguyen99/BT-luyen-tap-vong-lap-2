let num = parseInt(prompt("Nhập giá trị"));
let ketqua = 1;
if (num === 0) {
    alert("Giai Thừa là: 1 ");
} else if (num > 0) {
    for (let i = 1; i <= num; i++) {
        ketqua = ketqua * i;
    }
    alert("Giai Thừa là: " + ketqua);
} else {
    alert("Nhập Lại");
}

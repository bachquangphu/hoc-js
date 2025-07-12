// vòng lặp
// vòng lặp for
for (var i = 1; i <= 10; i++) {
  document.write("Dòng số: " + i + "<br/>");
}

// vòng lập for vô hạ
// để vòng lặp for vô hạn bạn chỉ cần để trống điều kiện
/*for (var i = 1; ; i++) {
    document.write("Dòng số: " + i + "<br/>");
}*/

// vòng lặp do while: giống trong php nó sẽ chạy câu lệnh rồi mới kiểm tra điều kiện
//khởi tạo biến i bằng 1
var i = 1;
do {
  //in ra i hiện tại
  document.write(i + "<br>");
  //tiến hành cộng i thêm 1 đơn vị
  i++;
  //xét điều kiện i>10 thì sẽ dừng
} while (i <= 10);

//vòng lặp while: giống như do while nhưng nó sẽ kiểm tra điều kiện trước rồi mới chạy vòng lặp
//khởi tạo biến i=1
var i = 1;
//xác định điều kiện i>10 thì sẽ dừng vòng lặp
while (i <= 10) {
  document.write(i);
  //tiến hành tăng i thêm 1 đơn vị
  i++;
}

// vòng lặp lồng nhau
// vòng lặp for lồng nhau
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    document.write("i=" + i + ", j=" + j + "<br>");
  }
  document.write("<br>");
}

// vòng lặp do while lồng nhau
var i = 0;
do {
  var j = i;
  do {
    document.write("*");
    j++;
  } while (j <= 10);
  document.write("<br>");
  i++;
} while (i <= 10);

// vòng lặp while lồng nhau
var i = 0;
while (i <= 10) {
  var j = i;
  while (j <= 10) {
    document.write("*");
    j++;
  }
  document.write("<br>");
  i++;
}

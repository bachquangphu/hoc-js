// câu lệnh điều kiện
var a = 5;
var b = 6;
if (a != b) {
  //Vì a khác b nên code phía trong if sẽ được chạy
  console.log("a khác b");
}

var a = 5;
var b = 5;
if (a != b) {
  console.log("a khác b");
} else {
  //Vì a bằng b nên code phía trong else sẽ được chạy
  document.writeln("a bằng b");
}

// if-else rut gọn
// (dieu kien) ? (rue) : (false)

var diem = 5;
document.write("<br>");
diem == 5 ? document.writeln("điểm bằng 5") : document.writeln("điểm khác 5");

// câu lệnh switch-case:
document.write("<br>");
so = 5;
switch (so) {
  case 0:
    document.write("không");
    break;
  case 1:
    document.write("Một");
    break;
  case 2:
    document.write("Hai");
    break;
  case 3:
    document.write("Ba");
    break;
  case 4:
    document.write("Bốn");
    break;
  case 5:
    document.write("Năm");
    break;
  default:
    document.write("Không thỏa mãn");
    break;
}

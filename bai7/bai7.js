//hàm trong js
/* cú pháp: 
function Name(){
    code
}*/

function getWebsite() {
  document.write("https://phu.junbach.com/");
}

// hàm có tham số truyền vào
/* cú pháp:
function Name(param1, param2,..., paramN){
    code
}*/
function getSum(a, b) {
  document.write("Tổng: " + (a + b));
}

//hàm có tham số mặc định
/* cú pháp:
function funName(param_1 = value_1, ..., pram_n = value_n) {
	//code
}*/
function getSum(a = 1, b = 2) {
  document.write("Tổng: " + (a + b));
}

//hàm có giá trị trả về
function getSum(a = 1, b = 2) {
  return a + b;
}

// gọi hàm
/* cú pháp: tenHam();*/
getSum();

//để gọi hàm có tham số truyền vào ta dùng cúp pháp gọi hàm đồng thời tuyền thêm các tham số
getSum(5, 10);

//hàm có tham số mặc định ta cùng dùng cách gọi hàm cơ bản để để không truyền tham số và gọi hàm có tham số nếu mun truyền tham số
getSum(5); // sẽ lấy a = 5, b = 2
getSum(); // sẽ lấy a = 1, b = 2

// hàm có giá trị trả về
var kq1 = getSum();
//in kết quả hàm trả về
document.write(kq1);
//tạo khoảng ngăn cách cho các bạn dễ nhìn
document.write("<br>");
var kq2 = getSum(4, 5);
//in kết quả hàm trả về
document.write(kq2);

// ràng buộc tên hàm
/* tên hàm phải bắt đầu bằng chữ cái (in hoa hoặc in thường) hoặc dấu gạch dưới (_)
tên hàm không được bắt đầu bằng số hoặc các ký tự khác ngoài kí tự_ */

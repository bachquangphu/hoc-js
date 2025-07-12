// mảng trong js
/*khai báo mảng */
// let arr = [val1, val2,....];
let array = [1, 2, 3, 4, 5, 6, 7];

// let arr = new Array(val1, val2, val3,...);
let a = new Array(1, 2, 3, 4, 5, 6, 7);

// arr[index]; trong đó arr là tên mảng, index là vị trí của mảng(bắt đầu từ 0)
console.log(a[1]); // 2

/* hàm xử lý mảng*/
//length: trả về số lượng phần tử trong mảng
console.log(a.length); //7

//join: gộp tất cả các phần tử có trong mảng thành một chuỗi
let b = ["Bạch", "Quang", "Phú"];
console.log(b.join(" ")); // Bạch Quang Phú

// valueOf(): tương tự như hàm join() nhưng chỉ có thể nối bằng ,

//push():thêm một hoặc nhiều phần tử vào cuối mảng
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.join()); //1, 2, 3, 4, 5, 6, 7
arr.push(8);
console.log(arr.join()); //1, 2, 3, 4, 5, 6, 7,8
arr.push("Bạch", "Quang");
console.log(arr.join()); //1,2,3,4,5,6,7,8,Bạch,Quang

//pop(): xóa phần tử cuối cùng của mảng
arr.pop();
console.log(arr.join()); //1,2,3,4,5,6,7,8,Bạch

//unshift(): thêm 1 hoặc nhiều phần tử vào đầu mảng
arr.unshift("Phú", 0);
console.log(arr.join()); //Phú,0,1,2,3,4,5,6,7,8,Bạch

//shift(): xóa phần tử đầu tiên của mảng
arr.shift();
console.log(arr.join()); //0,1,2,3,4,5,6,7,8,Bạch

//hàm splice(): thêm phần tử vào mảng theo một vị trí xác định
/* cú pháp: arr.splice(index, howmany, item1,....);
arr: tên mảng
index: vị trí bạn muốn thêm phần  tử( bắt đầu từ 0)
howmany: số phần tử sẽ xóa tính từ vị trí thêm mảng, để 0 nếu không muốn xóa phần tử
item1 :giá trị của phần tử mà bạn muốn thêm */
arr.splice(9, 0, 9, 10);
console.log(arr.join()); //0,1,2,3,4,5,6,7,8,9,10,Bạch
arr.splice(9, 1, 11);
console.log(arr.join()); //0,1,2,3,4,5,6,7,8,11,10,Bạch

//concat(): ghép 2 mảng lại với nhau
let arr1 = ["Bạch", "Quang", "Phú"];
let arr2 = ["học", "JavaScript"];
console.log(arr1.concat(arr2)); //['Bạch', 'Quang', 'Phú', 'học', 'JavaScript']

//slice(): lấy ra 1 hoặc một số phần tử trong mảng
/* cú pháp: arr.slice(begin,end); 
arr: là tên mảng 
begin: vị trí bắt đầu
end: vị trí kết thúc, nếu muốn cắt từ đầu đến cuối thì bỏ trống vị trí này */
let mang = [1, 2, 3, 4, 5, 6, 7];
console.log(mang.join()); //1,2,3,4,5,6,7
console.log(mang.slice(3)); //[4, 5, 6, 7]

//sort(): sắp xếp theo chiều tăng dần, nếu là số thì xếp từ bé đến lớn, chữ thì xếp theo theo từ a-z
let c = new Array(9, 8, 5, 7, 4, 6);
console.log(c.sort()); //[4, 5, 6, 7, 8, 9]

// reverse(): đảo ngược vị trí các phần tử của mảng
console.log(c.reverse()); //[9, 8, 7, 6, 5, 4]

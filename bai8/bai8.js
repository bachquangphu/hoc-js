// hiểm thị thông báo ra màn hình

//alert(): hiển thị ra hộp thoại và nội dung thông báo
alert("Xin chào các bạn!");

//confirm(): hiển thị ra hộp thoại và nội dung thông báo, có nút OK và Cancel
if (confirm("Bạn có phải là fan của toidicode.com không?")) {
  document.write("Cảm ơn bạn rất nhiều! <br>");
} else {
  document.write("Sao thế bạn?");
}

//prompt(): hiển thị ra hộp thoại và nội dung thông báo, có ô nhập liệu
if ((result = prompt("Chào bạn, năm nay bạn bao nhiêu tuổi?"))) {
  document.write(result);
} else {
  document.write("Sao không trả lời à bạn?");
}

// lện break và continue trong vòng lặp
//break: dừng vòng lặp
for (var i = 0; i <= 10; i++) {
  //in ra i hiện tại
  document.write(i);
  //nếu i = 5 thì dừng vòng lặp
  if (i == 5) {
    break;
  }
}

//continue: bỏ qua các lệnh phía sau nó và nhảy sang vòng lặp tiếp theo
for (var i = 0; i <= 10; i++) {
  //nếu i = 5 thì bỏ qua vòng lặp
  if (i == 5) {
    continue;
  }
  //in ra i hiện tại
  document.write(i + "<br>");
}

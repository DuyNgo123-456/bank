let tiengui=+prompt('Nhập số tiền gửi ngân hàng=');
let thang=+prompt('Nhập số tháng gửi ngân hàng=');
let laisuat=+prompt('Nhập lãi suất trong vòng một năm=');
tienlai=(tiengui*laisuat)/thang;
tientong=tiengui+tienlai;
document.write('Tổng tiền ở ngân hàng của bạn='+tientong);
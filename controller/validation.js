let arrInput = document.querySelectorAll("input");

let arrSpan = document.querySelectorAll("span");
for (let index = 0; index < arrInput.length; index++) {
  let input = arrInput[index];
  input.onblur = () => {
    if (input.value == "") {
      arrSpan[index].innerHTML = "Vui lòng không để trống";
    }
    
  };
  input.onfocus = () => {
    arrSpan[index].innerHTML = "";
  };
}
let arrDiem = document.querySelectorAll(".diem");
let count = 0;
for (let i of arrInput) {
  let { id } = i;
  if (id == "email") {
    i.onchange = () => {
      if (regexMail.test(i.value)) {
        document.getElementById("tbEmail").innerHTML = " ";
        return true;
      }
      document.getElementById("tbEmail").innerHTML =
        "Email không đúng định dạng";
      return false;
    };
  }
  if (id == "diemToan" || id == "diemLy" || id == "diemHoa") {
    i.onchange = () => {
      if (i.value < 0 || i.value > 10) {
        arrDiem[count].innerHTML = "Vui lòng nhập chính xác điểm";
        count += 1;
      }
    };
  }
  if (id == "soNgayLamViec") {
    i.onchange = () => {
      if (i.value < 0 || i.value > 31) {
        document.querySelector(".soNgay").innerHTML =
          "Số ngày làm việc chưa chính xác";
      }
    };
  }
 
 
 
}

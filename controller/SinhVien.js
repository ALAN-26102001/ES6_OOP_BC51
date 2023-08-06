// import {Employee} from "../models/Employee.js"
// import {Customers} from "../models/Customers.js"
// import { Employee } from "../models/Employee.js";
import { Student } from "../models/Student.js";


// SINHVIEN //
let sinhvien=new SinhVien()

document.getElementById("submit").onclick = function () {
  let arrInputSV = document.querySelectorAll("input");
  var sv = new Student();
  for (let index of arrInputSV) {
    let { id, value } = index;
    sv[id] = value;
  

  }
  sinhvien.themSinhvien(sv)
  sinhvien.sortName()
  sinhvien.tableSV()
  sinhvien.clearInput()
 
}
window.xoaSinhVien=function(xoa){
  sinhvien.xoaSinhVien(xoa)
}
window.suaSinhVien=function(sua){
  sinhvien.suaSinhVien(sua)
}

  sinhvien.capNhat()

import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //ประกาศตัวแปรเพื่อรับค่าจากหน้า home.page.html
  //dataMember: any = [];

  txtstu_id: any;
  txtname: any;
  txtnname: any;
  txtage: any;
  txtaddress: any;
  txtphone: any;
  txtstatus: any;


  constructor(
    public dataapi: DataapiService,
     private route: Router) {}

  //ฟังก์ชันสำหรับเพิ่มข้อมูล
  addmember(){

    let data = {
      id_stu: this.txtstu_id,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      address: this.txtaddress,
      phone: this.txtphone,
      status: this.txtstatus
    }

    this.dataapi.addData(data).subscribe({

      next: (res: any) => {
        console.log("ข้อมูลถูกเพิ่ม", res);
      },
      error: (error: any) => {
        console.log('Error', error);
      }
    });

    this.clearForm();
  }

  clearForm(){
    this.txtstu_id = "";
    this.txtname = "";
    this.txtnname = "";
    this.txtage = "";
    this.txtaddress = "";
    this.txtphone = "";
    this.txtstatus = "";
  }

  show(){
    this.route.navigate(['/show']);
  }
}
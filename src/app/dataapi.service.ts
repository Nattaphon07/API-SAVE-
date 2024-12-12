import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataapiService {
  constructor(
    public http: HttpClient
  ) {}

  datadetail: any = [];

  // ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addData(data: any) {
    console.log("ข้อมูลที่ส่งไปยัง api", data);
    return this.http.post('http://127.0.0.1/class_2-4/API/insert.php', data);
  }

  // ฟังก์ชันดึงข้อมูลมาจาก API
  listMenber() {
    return this.http.get('http://127.0.0.1/class_2-4/API/listmember.php');
  }

  // ฟังก์ชันลบข้อมูลจาก API
  deMember(id: any) {
    console.log('ลบข้อมูลด้วย ID:', id);
    return this.http.delete('http://127.0.0.1/class_2-4/API/delete.php?id=' + id);
  }

  // ฟังก์ชันแก้ไขข้อมูล (เพิ่มฟังก์ชันนี้)
  editMember(dataEdit: any) {
    console.log('ข้อมูลที่ส่งไปยัง API สำหรับการแก้ไข', dataEdit);
    return this.http.put('http://127.0.0.1/class_2-4/API/update.php', dataEdit); // ใช้ PUT หรือ POST ขึ้นอยู่กับ API
  }
}

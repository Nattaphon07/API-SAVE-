import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';  // เพิ่มการ import Router

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = [];

  constructor(
    private dataapi: DataapiService,
    private router: Router  // เพิ่มการกำหนด Router ในคอนสตรัคเตอร์
  ) {}

  edit(member: any) {
    console.log("Editing member", member);  // Implement the editing logic
    this.router.navigateByUrl('/edit'); // เปลี่ยนจาก this.route เป็น this.router
    // Navigate to an edit page
  }

  delMem(id: any) {
    console.log("Deleting member with ID:", id);
    this.dataapi.deMember(id).subscribe({
      next: (res: any) => {
        console.log('ลบข้อมูลสำเร็จ', res);
      },
      error: (error: any) => {
        console.log('ไม่สามารถลบข้อมูล', error);
      }
    });
    this.loadDataMen();  // Reload data after deletion
  }

  ngOnInit() {
    this.loadDataMen();  // Call loadDataMen when the page initializes
  }

  loadDataMen(event?: any) {
    this.dataapi.listMenber().subscribe({
      next: (res: any) => {
        console.log(res);
        this.member = res;
        if (event) event.target.complete();  // Complete the refresher if triggered by ionRefresh
      },
      error: (error: any) => {
        console.log('Error:', error);
        if (event) event.target.complete();  // Ensure the refresher completes even if there's an error
      }
    });
  }
}

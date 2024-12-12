import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  member: any = []; // This will hold the member data

  constructor(private http: DataapiService, private nav: Router) { }

  ngOnInit() {
    // Ensure the data is correctly assigned from the service
    this.member = this.http.datadetail;
    console.log(this.member);
  }

  // Call this method to send the data to the API for editing
  editmember() {
    let dataEdit = {
      id: this.member.id,
      id_stu: this.member.id_stu,
      name: this.member.name,
      nname: this.member.nname,
      age: this.member.age,
      phone: this.member.phone,
      address: this.member.address,
      status: this.member.status
    };

    // Call the editMember method from the service
    this.http.editMember(dataEdit).subscribe({
      next: (res: any) => {
        console.log("Data updated successfully");
        this.nav.navigateByUrl('/home'); // Navigate to home after updating
      },
      error: (error: any) => {
        console.log("Failed to update data", error);
      }
    });
  }
}

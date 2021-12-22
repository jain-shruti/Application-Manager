import { AppDetails } from './../AppDetails.model';
import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Optional } from '@angular/core';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent {
  @ViewChild('f') formRow !: NgForm;
  action:string;
  local_data:any;
    constructor(public dialogRef: MatDialogRef<AddApplicationComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: AppDetails) {
      this.local_data = {...data};
      this.action = this.local_data.action;
     }
    onSubmit(){
      const appName = this.formRow.value.appName; 
      const developer = this.formRow.value.developer; 
      const hod = this.formRow.value.hod; 
      const client = this.formRow.value.client; 
      const link = this.formRow.value.link;
      const formRow = new AppDetails(appName,developer,hod,client,link);
      this.dialogRef.close({ event: this.action, data: formRow });
    }
    onNoClick(): void {
    this.dialogRef.close();
    }

    closeDialog() {
    this.dialogRef.close({event: 'Cancel', data:this.local_data});
    }

}

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UserDataService } from '../../services/userData.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user.dialog',
  templateUrl: '../../forms/edit/edit.user.dialog.html',
  styleUrls: ['../../forms/edit/edit.user.dialog.css']
})
export class EditUserDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any, public userDataService: UserDataService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.userDataService.updateUser(this.user);
  }
}

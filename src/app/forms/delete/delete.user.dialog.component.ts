import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {UserDataService} from '../../services/userData.service';

@Component({
  selector: 'app-delete-user.dialog',
  templateUrl: '../../dialogs/delete/delete.user.dialog.html',
  styleUrls: ['../../dialogs/delete/delete.user.dialog.css']
})
export class DeleteUserDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: any, public userDataService: UserDataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.userDataService.deleteUser(this.user.id);
  }
}

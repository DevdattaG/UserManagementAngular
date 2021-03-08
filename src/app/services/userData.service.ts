import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import userData from '../resources/users';

@Injectable()
export class UserDataService {
  private readonly API_URL = 'https://demo3996660.mockable.io/';

  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): User[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllUsers(): void {
    this.httpClient.get<User[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    //this.dataChange.next(userData);
  }

  addUser(user: User): void {
    this.dialogData = user;
  }

  updateUser(user: User): void {
    this.dialogData = user;
  }

  deleteUser(id: number): void {
    console.log(id);
  }
}

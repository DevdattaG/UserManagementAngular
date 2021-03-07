import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserDataService } from './services/userData.service';
import { AddUserDialogComponent } from './forms/add/add.user.dialog.component';
import { EditUserDialogComponent } from './forms/edit/edit.user.dialog.component';
import { DeleteUserDialogComponent } from './forms/delete/delete.user.dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddUserDialogComponent,
    EditUserDialogComponent,
    DeleteUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddUserDialogComponent,
    EditUserDialogComponent,
    DeleteUserDialogComponent
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

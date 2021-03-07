import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'how-it-works', component: InfoComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

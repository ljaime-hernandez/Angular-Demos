import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsersComponent } from './dashboard/list-users/list-users.component';
import { UserComponent } from './dashboard/user/user.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'layout', pathMatch: 'full'},
  {path: 'layout', component: LayoutComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: ListUsersComponent},
    {path: 'user/:id', component: UserComponent}
  ]},
  {path: '**', redirectTo: 'layout', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

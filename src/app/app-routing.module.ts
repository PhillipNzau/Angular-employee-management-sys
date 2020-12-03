import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {DepartmentsComponent} from './departments/departments.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DepartmentDetailComponent} from './departments/department-detail/department-detail.component';
import {EditDepartmentComponent} from './departments/edit-department/edit-department.component';
import {BlogsComponent} from './blogs/blogs.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {UserinfoComponent} from './auth/userinfo/userinfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'edit-department/:id', component: EditDepartmentComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UserinfoComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [
//   EmployeesComponent,
//   DepartmentsComponent,
//   PageNotFoundComponent
// ];

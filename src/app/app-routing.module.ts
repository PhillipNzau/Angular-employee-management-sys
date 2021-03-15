import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './components/employees/employees.component';
import {DepartmentsComponent} from './components/departments/departments.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DepartmentDetailComponent} from './components/departments/department-detail/department-detail.component';
import {EditDepartmentComponent} from './components/departments/edit-department/edit-department.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {UserinfoComponent} from './auth/userinfo/userinfo.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
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
export class AppRoutingModule {
}

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
import {SecureInnerPagesGuard} from './auth/guard/secure-inner-pages.guard';
import {AuthGuard} from './auth/guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'blogs', component: BlogsComponent, canActivate: [AuthGuard]},
  {path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard]},
  {path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard]},
  {path: 'departments/:id', component: DepartmentDetailComponent, canActivate: [AuthGuard]},
  {path: 'edit-department/:id', component: EditDepartmentComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UserinfoComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

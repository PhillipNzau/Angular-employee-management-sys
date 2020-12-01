import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {DepartmentsComponent} from './departments/departments.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DepartmentDetailComponent} from './departments/department-detail/department-detail.component';
import {EditDepartmentComponent} from './departments/edit-department/edit-department.component';
import {PrintDataComponent} from './print-data/print-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'edit-department/:id', component: EditDepartmentComponent},
  {path: 'print', component: PrintDataComponent},
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

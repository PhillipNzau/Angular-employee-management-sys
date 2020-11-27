import { Component, OnInit } from '@angular/core';
import {Department, Employee} from '../../types';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {DepartmentService} from '../../departments/department.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _employeeService: EmployeeService,
    // tslint:disable-next-line:variable-name
    private _deleteService: EmployeeService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._employeeService.getEmployeesById(id)
      .subscribe( data => {
        this.employee = data;
      });
  }

  // tslint:disable-next-line:typedef
  deleteEmployeeById(id: any) {
    this._deleteService.deleteEmployeesById(id)
      .subscribe();
    alert(`Deleting your department with id ${id}`);
    this.ngOnInit();
  }

}

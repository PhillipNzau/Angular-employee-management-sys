import { Component, OnInit } from '@angular/core';
import { Employee } from '../types';
import { EmployeeService } from './employee.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone'];
  isLoading = true;
  term: any;
  // tslint:disable-next-line:ban-types
  page: Number = 1;
  totalRecords: number;
  pagStyle = 'not-active';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        // this.totalRecords = data.length;
        this.isLoading = false;
      });
  }
  // tslint:disable-next-line:typedef
  onClear() {
    this.employees = [];
    this.pagStyle = 'active';
  }
  // tslint:disable-next-line:typedef
  onPrint() {
    window.print();
  }
}

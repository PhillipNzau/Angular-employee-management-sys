import { Component, OnInit } from '@angular/core';
import { Department } from '../types';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  displayedColumns: string[] = ['id', 'name'];
  constructor(
    // tslint:disable-next-line:variable-name
    private _departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this._departmentService.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }

}

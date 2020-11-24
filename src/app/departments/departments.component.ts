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
  isLoading = true;

  constructor(
    // tslint:disable-next-line:variable-name
    private _departmentService: DepartmentService,
  ) {
  }

  ngOnInit(): void {
    this._departmentService.getDepartments()
      .subscribe(data => {
        this.departments = data;
        this.isLoading = false;

      });

    // @ts-ignore
    this._departmentService.currentDepartments.subscribe(status => {
      console.log('status', status);
      status = false;
      if (status === false) {
        this._departmentService.getDepartments()
          .subscribe(data => {
            this.departments = data;
            this.isLoading = false;
          });
      }
    });
  }
}

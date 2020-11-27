import { Component, OnInit } from '@angular/core';
import { Department } from '../types';
import { DepartmentService } from './department.service';
import {ActivatedRoute, Router} from '@angular/router';


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
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _departmentService: DepartmentService,

  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
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

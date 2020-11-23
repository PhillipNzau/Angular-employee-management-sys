import { Component, OnInit } from '@angular/core';
import {Department} from '../../types';
import {ActivatedRoute} from '@angular/router';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  department: Department;
  constructor(
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._departmentService.getDepartmentById(id)
      .subscribe(data => {
        this.department = data;
      });
  }

}

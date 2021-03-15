import { Component, OnInit } from '@angular/core';
import {Department} from '../../../types';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department: Department;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _departmentService: DepartmentService,
    // tslint:disable-next-line:variable-name
    private _editService: DepartmentService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(id: number) {

  }
}

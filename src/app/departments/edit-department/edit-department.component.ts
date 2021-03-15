import { Component, OnInit } from '@angular/core';
import {Department} from '../../types';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
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
    const id = this.route.snapshot.paramMap.get('id');
    this._departmentService.getDepartmentById(id)
      .subscribe(data => {
        this.department = data;
      });
  }


  // tslint:disable-next-line:typedef
  onSubmit(id: any) {
    console.log(id);
    // this._editService.editDepartmentById(id).subscribe();
    this._editService.changeStatus(false);
    this.router.navigateByUrl('/departments');

  }
}

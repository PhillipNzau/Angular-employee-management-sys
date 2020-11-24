import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Department} from '../../types';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-form-data-department',
  templateUrl: './form-data-department.component.html',
  styleUrls: ['./form-data-department.component.css']
})
export class FormDataDepartmentComponent implements OnInit, OnChanges {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';

  depname = '';
  depdescription = '';

  // tslint:disable-next-line:no-output-on-prefix
  // @Output() reload = new EventEmitter<boolean>();
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private editService: DepartmentService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'currentName') {
        this.depname = this.currentName;
        // console.log(this.depname, 'name');
      } else if (propName === ''){
        this.depdescription = this.currentDescription;
        // console.log(this.depdescription, 'description');
      }
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    this.id = this.route.snapshot.paramMap.get('id');
    this.depname = this.currentName;
    this.depdescription = this.currentDescription;
  }

  onButtonClicked(buttonText: any): void {
    console.log(buttonText);
    // @ts-ignore
    // this.onSubmit.emit({
    //   id: null,
    //   depname: this.depname,
    //   depdescription: this.depdescription,
    // });

    if (buttonText === 'Save Changes') {
      // tslint:disable-next-line:prefer-const
      let payload = {depname: this.depname, depdescription: this.depdescription};
      this.editService.editDepartmentById(this.id, payload).subscribe( response => {
        console.log(response);
      });
      this.router.navigateByUrl('/departments');

    }

  }

}

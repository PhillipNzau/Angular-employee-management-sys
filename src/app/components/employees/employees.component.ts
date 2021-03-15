import { Component, OnInit } from '@angular/core';
import { Employee } from '../../types';
import { EmployeeService } from './employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


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

  // tslint:disable-next-line:typedef
  download() {
    // Landscape export, 2×4 inches
    // const doc = new jsPDF({
    //   orientation: 'landscape',
    //   unit: 'in',
    //   format: [4, 2]
    // });
    //
    // doc.text('Hello world!', 1, 1);
    // doc.save('two-by-four.pdf');

    const element = document.getElementById('imageSection');
    html2canvas(element).then((canvas) => {
      console.log(canvas);

      const imgData = canvas.toDataURL('image/png');
      const imgHeight = canvas.height * 208 / canvas.width;
      console.log(canvas.toDataURL);
      // @ts-ignore
      const doc = new jsPDF();
      doc.addImage(imgData, 0, 0, 208, imgHeight);
      // @ts-ignore
      // doc.text(element, 1, 1);
      doc.save('image.pdf');
    });

    // // @ts-ignore
    // const doc = new jsPDF();
    // doc.text('hey', 15, 15);
    // doc.save('first.pdf');
  }
}

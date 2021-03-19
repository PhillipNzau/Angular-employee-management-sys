import { Component, OnInit } from '@angular/core';
import {Blog} from '../../types';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import * as sampledata from '../../ghafla.json';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any = (sampledata as any).default;
  // tslint:disable-next-line:ban-types
  page: Number = 1;
  totalRecords: number;
  pagStyle = 'not-active';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(sampledata);
  }

}

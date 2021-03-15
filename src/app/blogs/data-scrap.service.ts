import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Blog} from '../types';
import {Observable} from 'rxjs';
// import * as sampledata from '../ghafla.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataScrapService {

  constructor(
    private http: HttpClient,
    // tslint:disable-next-line:variable-name
    private _url: '../ghafla',
  ) { }
  //
  // getBlogs(): Observable<Blog[]> {
  //   // const data: any = sampledata;
  //   // return data;
  // }
}

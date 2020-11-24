import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Department} from '../types';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(
    private http: HttpClient,

  ) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department');
  }

  getDepartmentById(id: string): Observable<Department> {
    return this.http.get<Department>(`https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department/${id}`);
  }
}

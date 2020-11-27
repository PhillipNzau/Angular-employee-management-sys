import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
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
  // public status = true;
  constructor(
    private http: HttpClient,
  ) { }

  // public status: boolean;
  // @ts-ignore
  private departments = new BehaviorSubject(this.status);
  currentDepartments = this.departments.asObservable();

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department');
  }
  getDepartmentById(id: string): Observable<Department> {
    return this.http.get<Department>(`https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department/${id}`);
  }
  deleteDepartmentById(id: string): Observable<{}> {
    const url = `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department/${id}`;
    return this.http.delete<Department>(url, httpOptions);
  }
  editDepartmentById(id: string, payload: object): Observable<{}> {
    console.log('Id item', id);
    console.log('payload ', payload);
    const url = `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department/${id}`;
    return this.http.put<Department>(url, payload, httpOptions);
  }
  addDepartment(payload: object): Observable<{}> {
    const url = `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/department/`;
    return this.http.post<Department>(url,  payload, httpOptions);
  }

  // tslint:disable-next-line:typedef
  changeStatus(b: boolean) {

  }
}

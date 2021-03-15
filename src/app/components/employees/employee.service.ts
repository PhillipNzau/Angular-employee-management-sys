import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
  ) { }

  // public status: boolean;
  // @ts-ignore
  private employees = new BehaviorSubject(this.status);
  currentEmployee = this.employees.asObservable();

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/employees');
  }
  getEmployeesById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/employees/${id}`);
  }
  deleteEmployeesById(id: string): Observable<{}> {
    const url = `https://5fa92ae0c9b4e90016e6a1db.mockapi.io/api/v1/employees/${id}`;
    return this.http.delete<Employee>(url, httpOptions);
  }
}

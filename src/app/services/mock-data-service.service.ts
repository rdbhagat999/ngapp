import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  // API path
  base_path = 'http://localhost:3000/employees';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    const err = new Error('Something bad happened; please try again later.');
    return throwError(() => err);
  }

  // Create a new item
  createItem(item: any): Observable<Employee> {
    return this.http
      .post<Employee>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get single Employee data by ID
  getItem(id: string): Observable<Employee> {
    return this.http
      .get<Employee>(this.base_path + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get Employees data
  getList(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.base_path)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update item by id
  updateItem(id: string, item: any): Observable<Employee> {
    return this.http
      .put<Employee>(
        this.base_path + '/' + id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete item by id
  deleteItem(id: string) {
    return this.http
      .delete<Employee>(this.base_path + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

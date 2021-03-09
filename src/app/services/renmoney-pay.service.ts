import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RenmoneyPayService {
  public apiURL = 'https://jsonplaceholder.typicode.com/todos';
  
  public appID = '&appid=dc9b03f27b6d1b3ef9e1e36680b989ed';
  constructor(
    private http: HttpClient
  ) {

  }

  getData(value): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${value}`).pipe(catchError(this.handlError));
  }

  handlError(error) {
    return throwError(error.error.message);
  }
}

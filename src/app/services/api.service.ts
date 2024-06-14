import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

import { LessonEntity } from '../interfaces/LessonEntity';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  postData(data: LessonEntity): Observable<void> {
    return this.http.post<void>(`${this.url}/lessons  `, data).pipe(
      tap(() => {
        console.log('POST request was successful');
      }),
      catchError(this.errorService.handleError)
    );
  }

  getList(): Observable<LessonEntity[]> {
    return this.http.get<LessonEntity[]>(`${this.url}/lessons`).pipe(
      tap((result) => {
        console.log('result: ', result);
      }),
      catchError(this.errorService.handleError)
    );
  }
}

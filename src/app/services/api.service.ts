import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

import { ClassRegistration } from '../models/classRegistration';
import { ErrorService } from './error.service';
import { LessonEntity } from '../interfaces/LessonEntity';

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
}

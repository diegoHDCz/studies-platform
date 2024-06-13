import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassRegistration } from '../models/classRegistration';
import { Observable, catchError, pipe, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(
      () =>
        new Error(
          `Something bad happened; please try again later. ${error.message} `
        )
    );
  }
}

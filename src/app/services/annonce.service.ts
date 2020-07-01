import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Annonce} from "../models/annonce";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  apiURL = 'http://localhost:3000/annonce';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getAllAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOneChaussureById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addChaussure(annonce: Annonce): Observable<Annonce>{
    return this.http.post<Annonce>(this.apiURL, annonce, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteChaussure(id: number): Observable<Annonce>{
    return this.http.delete<Annonce>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(annonce: Annonce){
    return this.http.put<Annonce>(this.apiURL + '/' + annonce.id , annonce, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

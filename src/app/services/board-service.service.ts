import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Board } from '../model/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

    private boardUrl = 'http://localhost:3000/boards';
    errorMessage: string;

    constructor(private http: HttpClient) {
    }

    getListBoards(){
      return this.http.get<Board[]>(this.boardUrl);
    }

    postNewBoard(name:string){
        return this.http.post<string>(this.boardUrl, {name: name});
    }


    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {

            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

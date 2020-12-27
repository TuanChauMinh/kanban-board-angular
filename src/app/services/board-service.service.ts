import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import { BoardInfo } from '../model/BoardInfo';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

    private boardUrl = 'http://localhost:3000/boards';
    errorMessage: string;
    public currentBoardId : string = '';

    constructor(private http: HttpClient) {
    }

    setCurrentBoardId(id: string){
      this.currentBoardId = id;
    }

    getListBoards(){
      return this.http.get<BoardInfo[]>(this.boardUrl);
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

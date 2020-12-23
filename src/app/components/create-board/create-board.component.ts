import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BoardService } from '../../services/board-service.service';
@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  private boardUrl = 'http://localhost:3000/boards';
  boardName: string;
  name: string;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private boardService: BoardService) { }

  ngOnInit(){
  }

  CreateNewBoard() {
    this.boardService.postNewBoard(this.boardName).subscribe({
      next: data => {
          this._snackBar.open("Created");
      },
      error: error => {
        this._snackBar.open("Falied");
      }
  })
  }

}

import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board-service.service';

@Component({
  selector: 'app-board-list-dropdown',
  templateUrl: './board-list-dropdown.component.html',
  styleUrls: ['./board-list-dropdown.component.css']
})
export class BoardListDropdownComponent implements OnInit {

  listBoard : string[] = [];
  constructor(private boardService: BoardService){
  }

  ngOnInit(): void {
    this.boardService.getListBoards().subscribe((data) => {
      data.forEach(element => {
        console.log(element.name);
        this.listBoard.push(element.name);
      });

    }, error => {
      console.log('error', error);
    });
  }

  getListBoards(): void {
    var data = this.boardService.getListBoards();
  }
}

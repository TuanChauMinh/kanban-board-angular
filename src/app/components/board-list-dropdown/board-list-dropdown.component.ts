import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { BoardInfo } from 'src/app/model/BoardInfo';
import { BoardService } from 'src/app/services/board-service.service';
import { HelperService } from 'src/app/services/helper.service';
import { TaskService } from 'src/app/services/task-service.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-board-list-dropdown',
  templateUrl: './board-list-dropdown.component.html',
  styleUrls: ['./board-list-dropdown.component.css']
})
export class BoardListDropdownComponent implements OnInit {

  listBoard : BoardInfo[] = [];

  @Output() updateView = new EventEmitter();
  // @ViewChild('listTask', {static: true}) private taskListComponent : TaskListComponent;
  @ViewChildren(TaskListComponent) taskListComponent: TaskListComponent;
  constructor(private boardService: BoardService, private taskService: TaskService, private helper: HelperService){
  }

  ngOnInit(): void {
    this.boardService.getListBoards().subscribe((data) => {
      data.forEach(element => {
       this.listBoard = data;
      });

    }, error => {
      console.log('error', error);
    });
  }

  getListBoards(): void {
    var data = this.boardService.getListBoards();
  }
  onBoardChange(boardId: string)
  {
    this.boardService.setCurrentBoardId(boardId);

    this.helper.NotifyOther({refresh: true});

  }
}

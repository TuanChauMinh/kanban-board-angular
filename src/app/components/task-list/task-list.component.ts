import { Component, Input, OnInit } from '@angular/core';
import { ListSchema } from 'src/app/model/ListSchema';
import { User } from 'src/app/model/User';
import { BoardService } from 'src/app/services/board-service.service';
import { CardStore } from 'src/app/services/CardStore';
import { HelperService } from 'src/app/services/helper.service';
import { TaskService } from 'src/app/services/task-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  @Input() listSchema: ListSchema;
  @Input() cardStore: CardStore;
  displayAddCard = false;
  listUser : User[] = [];

  constructor(private userService: UserService, private boardService: BoardService, private taskService: TaskService, private helper: HelperService) {
  }

  ngOnInit(): void {
    this.userService.getAllUserObservable().subscribe((data) => {
      this.listUser = data;
    }, error => {
    console.log('error', error);
  });

    this.helper.notifyObservable$.subscribe(res => {
      if(res.refresh)
      {
        var boardId = this.boardService.currentBoardId;
        this.taskService.getTaskByBoardId(boardId,this.listSchema).subscribe((data) => {
          data.forEach(element => {
            debugger;
            const cardId = this.cardStore.newCard(element.title);
            if(element.status == this.listSchema.value)
            {
              this.listSchema.cards.push(cardId);
            }
          });
        }, error => {
          console.log('error', error);
        });
      }
    });

  }

  toggleDisplayAddCard() {
    this.displayAddCard = !this.displayAddCard;

  }

  onEnter(title: string, userId: string) {
    var boardId = this.boardService.currentBoardId;
    const cardId = this.cardStore.newCard(title);
    this.listSchema.cards.push(cardId);

    this.taskService.postNewTask(title,this.listSchema.value,boardId).subscribe();

  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData('text');

    let target = $event.target;
    const targetClassName = target.className;

    while( target.className !== 'list') {
      target = target.parentNode;
    }

    target = target.querySelector('.cards');

    if(targetClassName === 'card') {
      $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
    } else if(targetClassName === 'list__title') {
      if (target.children.length) {
        target.insertBefore(document.getElementById(data), target.children[0]);
      }else {
        target.appendChild(document.getElementById(data));
      }
    } else {
      target.appendChild(document.getElementById(data));
    }
  }
}

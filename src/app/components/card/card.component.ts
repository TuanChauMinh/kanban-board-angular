import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { CardSchema } from 'src/app/model/CardSchema';
import { ListSchema } from 'src/app/model/ListSchema';
import { User } from 'src/app/model/User';
import { CardStore } from 'src/app/services/CardStore';
import { TaskService } from 'src/app/services/task-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: CardSchema;
  @Input() listSchema: ListSchema;
  selectCard : CardSchema;
  cardStore: CardStore;
  displayCard = true;
  displayAddCard = false;
  listUser : User[] = [];
  user: User;
  constructor(private userService: UserService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.userService.getAllUserObservable().subscribe((data) => {
      this.listUser = data;
    }, error => {
    console.log('error', error);
  });
  }

  onEnter(value: string) {
    this.selectCard.title = value;
    this.selectCard.user = this.user.firstname + " " + this.user.lastname;

    localStorage.setItem(this.selectCard.id, this.user.firstname + " " + this.user.lastname );
    this.taskService.updateTitleById(this.selectCard.id, this.selectCard.title).subscribe();

    this.displayCard = true;
    this.selectCard = null;


  }

  toggleDisplayCard() {
    this.displayCard = !this.displayCard;
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  onSelectCard(card: CardSchema): void {
    this.selectCard = card;
  }
}

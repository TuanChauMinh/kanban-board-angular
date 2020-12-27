import { Component, OnInit } from '@angular/core';
import { ListSchema } from 'src/app/model/ListSchema';
import { CardStore } from 'src/app/services/CardStore';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cardStore : CardStore;
  listSchema: ListSchema[];

  constructor() { }

  ngOnInit(): void {
    this.setMockData();
    console.log(this.listSchema);
  }

  setMockData() : void{
    this.cardStore = new CardStore();
    const listSchema : ListSchema[]=[
      {
        name: 'To Do',
        value:'TODO',
        cards: []
      },
      {
        name: 'IN PROGRESS',
        value:'IN_PROGRESS',
        cards: []
      },
      {
        name: 'DONE',
        value: 'DONE',
        cards: []
      }
    ]
    this.listSchema = listSchema;
  }
}

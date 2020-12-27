import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { CardSchema } from '../model/CardSchema';
import { ListSchema } from '../model/ListSchema';
import { CardStore } from './CardStore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = 'http://localhost:3000/tasks';
  @Input() cardStore: CardStore;

  constructor(private http: HttpClient) { }
  postNewTask(title:string, status: string, board: string){
    return this.http.post<string>(this.taskUrl, {title: title, status: status, board: board});
  }

  getTaskByBoardId(boardId: string, listSchema: ListSchema)
  {

    var listTask = listSchema;
    // if(boardId == "")
    // {
    //   return listTask;
    // }
    // debugger;
    return this.http.get<CardSchema[]>(this.taskUrl + "?boardid=" + boardId);
  }

}

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
    return this.http.post<any>(this.taskUrl, {title: title, status: status, board: board});
  }

  getTaskByBoardId(boardId: string, listSchema: ListSchema)
  {
    return this.http.get<any>(this.taskUrl + "?boardId=" + boardId);
  }

  updateTitleById(taskId: string, newTitle: string)
  {
    return this.http.put<string>(this.taskUrl +"/"+taskId, {title: newTitle});
  }

}

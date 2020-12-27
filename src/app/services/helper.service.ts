import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public notify = new BehaviorSubject<any>('');
  notifyObservable$ = this.notify.asObservable();

  constructor() { }

  public NotifyOther(data: any) {
    if(data){
      this.notify.next(data);
    }
  }

}

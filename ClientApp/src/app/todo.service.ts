import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public title: string;
  public description: string;
  public todoCollection: any[];

  constructor() { }

  storeTodoData(postData: ITodo) {
      console.log(this.todoCollection);
  }
   
  
}
interface ITodo {
    title: string;
    description: string;
}
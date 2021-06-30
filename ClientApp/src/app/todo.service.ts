import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public title: string;
  public description: string;
  public id: number;

  constructor(title: string, desc: string, id: number) { 
    this.title = title;
    this.description = desc;
    this.id = id;
  }
/*
figure out how to spread the new objects into the collection array in service

*/
  storeTodoData(postData: ITodo) {
      console.log(postData);
  }
   
  
}
interface ITodo {
    title: string;
    description: string;
    id: number;
}


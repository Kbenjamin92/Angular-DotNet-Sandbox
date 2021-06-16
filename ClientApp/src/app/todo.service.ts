import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public title: string;
  public description: string;
  public todoCollection: any[];

  constructor() { }
/*
figure out how to spread the new objects into the collection array in service

*/
  storeTodoData(postData: ITodo) {
      console.log(postData);
      // const collection: ITodoCollection = [postData];
  }
   
  
}
interface ITodo {
    title: string;
    description: string;
}

interface ITodoCollection {
  [index: number]: any;
}
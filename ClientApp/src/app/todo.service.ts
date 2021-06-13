import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public title: string;
  public description: string;

  constructor() { }



}
interface ITodo {
  title: string;
  description: string;
}
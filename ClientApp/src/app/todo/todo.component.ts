import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() titleInput: string;
  @Input() descriptionInput: string;
  @Output() onClick = new EventEmitter;
  title;
  description;
  displayCard: boolean;
  collection = [];

  constructor(public todoData: TodoService) { }

  ngOnInit() {
  }

  displayData() {
    this.onClick.emit(this.todoData.title = this.titleInput);
    this.onClick.emit(this.todoData.description = this.descriptionInput);
    this.title = this.todoData.title;
    this.description = this.todoData.description;
    this.collection.push(this.todoData);
    this.todoData.storeTodoData(this.todoData);
    this.displayCard = true;
    this.titleInput = "";
    this.descriptionInput = "";
    console.log(this.collection);
  }

}

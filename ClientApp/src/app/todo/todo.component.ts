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
    this.onClick.emit(this.title = this.titleInput);
    this.onClick.emit(this.description = this.descriptionInput);
    this.todoData.title = this.title
    this.todoData.description = this.description
    this.collection.push({title: this.title, description: this.description});
    this.todoData.storeTodoData(this.todoData);
    this.displayCard = true;
    this.titleInput = "";
    this.descriptionInput = "";
    console.log(this.collection)
  }

  

}

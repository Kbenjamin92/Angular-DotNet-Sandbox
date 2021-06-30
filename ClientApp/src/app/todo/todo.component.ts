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
  displayCard: boolean;
  collection = [];
  newCollections: TodoService[] = [
    new TodoService('title test', 'description test', 1),
  ];

  constructor(public todoData: TodoService) { }

  ngOnInit() {
  }

  displayData() {
    // this.onClick.emit(this.titleInput = );
    // this.onClick.emit(this.description = this.descriptionInput);
    // this.todoData.title = this.title
    // this.todoData.description = this.description
    // this.collection.push({title: this.title, description: this.description});
    // this.todoData.storeTodoData(this.todoData);
    // this.displayCard = true;
    // this.titleInput = "";
    // this.descriptionInput = "";
    console.log(this.newCollections)
  }

  removeTodo() {
    let result = this.collection.filter(item => item.length > 0);
    this.collection = result;

  }

}

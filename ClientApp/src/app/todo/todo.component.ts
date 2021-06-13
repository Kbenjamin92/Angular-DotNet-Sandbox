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

/*
 - create an object to store the title and description

 - declare the object in the todo service. 

*/

  constructor(public todoData: TodoService) { }

  ngOnInit() {
  }

  displayData() {
    this.onClick.emit(this.todoData.title = this.titleInput); 
    this.onClick.emit(this.todoData.description = this.descriptionInput);
    this.title = this.todoData.title;
    this.description = this.todoData.description;

    this.titleInput = "";
    this.descriptionInput = "";
  }

}

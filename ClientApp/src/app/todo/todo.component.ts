import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public titleData;
  @Input() title = '';
  @Input() description = '';
  @Output() onClick = new EventEmitter;

  constructor(public todoData: TodoService) { }

  ngOnInit() {
  }

  displayData() {
    this.onClick.emit();
    this.title = this.titleData;
    console.log(this.titleData)
    // this.todoData.description = this.description;
  }

}

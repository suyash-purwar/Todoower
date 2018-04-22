import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  data: string;
  todos = [];

  onAdd() {
    this.todos.push(this.data);
  }

  onRemoveTodo(id: number) {
    console.log(id)
    if (id === 0){
      this.todos.splice(id, ++id)
    } else {
      this.todos.splice(id, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

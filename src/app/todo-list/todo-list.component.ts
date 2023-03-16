import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'Todo List';
  newTodo = '';
  todos: {text: string, done: boolean}[] = [];


  addTodo() {
    this.todos.push({text: this.newTodo, done: false});
    this.newTodo = '';
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

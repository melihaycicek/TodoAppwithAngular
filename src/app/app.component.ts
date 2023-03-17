import { Component } from '@angular/core';
import { Item } from './item'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = '';
  addButtonVisible: boolean = false;
  items: Item[] = [];

  filteredItems: Item[] = [];

  addItemVisible: boolean = false;

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.addButtonVisible) {
      this.addItem();
    }
  }
  
  addItem(): void {
    const newItem = new Item(this.searchTerm);
    this.items.push(newItem);
    this.searchTerm = '';
    this.toggleAddButton();
    this.search();
  }

  removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.search();
  }

  toggleAddButton(): void {
    this.addButtonVisible = this.searchTerm.trim() !== '';
  }

  search(): void {
    if (this.searchTerm.length > 0) {
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  onInput(): void {
    this.toggleAddButton();
    this.search();
  }

  toggleCompleted(item: Item): void {
    item.completed = !item.completed;
  }
}

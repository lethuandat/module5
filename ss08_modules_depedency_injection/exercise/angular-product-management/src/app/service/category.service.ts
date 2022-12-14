import {Injectable} from '@angular/core';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() {
  }

  getAll(): Category[] {
    return this.categories;
  }

  saveCategory(category): void {
    this.categories.push(category);
  }

  findById(id: number): Category {
    return this.categories.find(category => category.id === id);
  }

  updateCategory(id: number, category: Category): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }
}

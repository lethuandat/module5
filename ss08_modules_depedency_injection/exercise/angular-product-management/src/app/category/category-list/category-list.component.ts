import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  deleteId: number;
  deleteName: string;

  constructor(private categoryService: CategoryService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categories = this.categoryService.getAll();
  }

  openDelete(targetModal, category: Category): void {
    this.deleteId = category.id;
    this.deleteName = category.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete(): void {
    this.categoryService.deleteCategory(this.deleteId)
    this.ngOnInit();
    this.modalService.dismissAll();
  }

}

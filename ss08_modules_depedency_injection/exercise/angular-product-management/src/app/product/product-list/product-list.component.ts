import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteId: number;
  deleteName: string;

  constructor(private productService: ProductService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.products = this.productService.getAll();
  }

  openDelete(targetModal, product: Product): void {
    this.deleteId = product.id;
    this.deleteName = product.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete(): void {
    this.productService.deleteProduct(this.deleteId)
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}

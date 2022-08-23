import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../customer.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = [];

  deleteId: number;
  deleteName: string;

  page = 1;
  pageSize = 5;
  keyword: string;

  constructor(private customerService: CustomerService,
              private modalService: NgbModal,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  openDelete(targetModal, customer: Customer): void {
    this.deleteId = customer.id;
    this.deleteName = customer.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete(): void {
    this.customerService.delete(this.deleteId).subscribe(() => {
      this.ngOnInit();
      this.toast.error('Xóa thành công!', "Thông báo");
      this.modalService.dismissAll();
    }, e => console.log(e));
  }

  search() {
    this.customerService.find(this.keyword).subscribe(customers => {
      this.customers = customers;
      this.keyword = "";
    })
  }
}

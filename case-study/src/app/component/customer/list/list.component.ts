import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
  pageSize = 10;

  constructor(private customerService: CustomerService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
    // this.customerService.getAll().subscribe((res: any) => {
    //   this.customers = res;
    // })
  }

  openDelete(targetModal, customer: Customer) {
    this.deleteId = customer.id;
    this.deleteName = customer.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete() {
    this.customerService.delete(this.deleteId);
    this.ngOnInit();
    this.modalService.dismissAll();
  }


}

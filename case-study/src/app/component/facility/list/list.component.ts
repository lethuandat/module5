import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";
import {Customer} from "../../../model/customer";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  facilities: Facility[] = [];

  page = 1;
  pageSize = 6;

  deleteId: number;
  deleteName: string;

  constructor(private facilityService: FacilityService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
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
    this.facilityService.delete(this.deleteId);
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}

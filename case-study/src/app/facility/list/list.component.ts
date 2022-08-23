import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../facility.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from "ngx-toastr";

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
  keyword: string;

  constructor(private facilityService: FacilityService,
              private modalService: NgbModal,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  openDelete(targetModal, facility: Facility) {
    this.deleteId = facility.id;
    this.deleteName = facility.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete() {
    this.facilityService.delete(this.deleteId).subscribe(() => {
      this.ngOnInit();
      this.toast.error('Xóa thành công!', "Thông báo");
      this.modalService.dismissAll();
    }, e => console.log(e));
  }

  search() {
    this.facilityService.find(this.keyword).subscribe(facilities => {
      this.facilities = facilities;
      this.keyword = "";
    })
  }
}

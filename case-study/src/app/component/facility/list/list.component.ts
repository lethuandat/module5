import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }

}

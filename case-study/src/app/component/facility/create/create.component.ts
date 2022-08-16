import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../../service/facility.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl(),
    standardRoom: new FormControl(),
    otherDescription: new FormControl(),
    poolArea: new FormControl(),
    numberFloor: new FormControl(),
    facilityFree: new FormControl(),
  });

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility);
    this.facilityForm.reset();
    alert('Tạo mới thành công');
    this.router.navigate(['/facility/list']);
  }

  type = "";

  getType(type) {
    this.type = type;
  }
}

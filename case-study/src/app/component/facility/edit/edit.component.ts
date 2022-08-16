import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private facilityService: FacilityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.findById(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        rentType: new FormControl(facility.rentType),
        facilityType: new FormControl(facility.facilityType),
        standardRoom: new FormControl(facility.standardRoom),
        otherDescription: new FormControl(facility.otherDescription),
        poolArea: new FormControl(facility.poolArea),
        numberFloor: new FormControl(facility.numberFloor),
        facilityFree: new FormControl(facility.facilityFree)
      });
    });
  }

  ngOnInit(): void {
  }

  facilityForm: FormGroup;
  id: number;

  findById(id: number) {
    return this.facilityService.findById(id);
  }

  update(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.update(id, facility);
    alert('Cập nhật thành công');
    this.router.navigate(['/facility/list']);
  }

}

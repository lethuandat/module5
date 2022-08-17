import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
        name: new FormControl(facility.name, [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        cost: new FormControl(facility.cost, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom),
        otherDescription: new FormControl(facility.otherDescription),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        numberFloor: new FormControl(facility.numberFloor, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
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

  type = "";

  getType(type) {
    this.type = type;
  }

  validationMessage = {
    name: [
      {type: 'required', message: '*Tên dịch vụ không được bỏ trống'},
      {type: 'pattern', message: '*Vui lòng nhập tên đúng (không được chứa số)'}
    ],
    area: [
      {type: 'required', message: '*Vui lòng nhập diện tích dịch vụ'},
      {type: 'pattern', message: '*Diện tích phải > 0'}
    ],
    cost: [
      {type: 'required', message: '*Vui lòng nhập giá thuê dịch vụ'},
      {type: 'pattern', message: '*Giá thuê phải > 0'}
    ],
    maxPeople: [
      {type: 'required', message: '*Vui lòng nhập số lượng người tối đa cho dịch vụ'},
      {type: 'pattern', message: '*Số lượng người tối đa phải > 0'}
    ],
    rentType: [
      {type: 'required', message: '*Vui lòng chọn kiểu thuê'}
    ],
    facilityType: [
      {type: 'required', message: '*Vui lòng chọn loại dịch vụ'}
    ],
    poolArea: [
      {type: 'pattern', message: '*Diện tích hồ bơi phải > 0'}
    ],
    numberFloor: [
      {type: 'pattern', message: '*Số tầng phải > 0'}
    ],
  }
}

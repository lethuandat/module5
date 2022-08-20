import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000)),
    name: new FormControl('', [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
    area: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    cost: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl(),
    otherDescription: new FormControl(),
    poolArea: new FormControl('', [Validators.pattern("^[1-9]+\\d*")]),
    numberFloor: new FormControl('', [Validators.pattern("^[1-9]+\\d*")]),
    facilityFree: new FormControl(),
    image: new FormControl('../../../../assets/images/')
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

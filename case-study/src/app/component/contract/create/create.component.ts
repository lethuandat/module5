import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../../../service/contract.service";
import {Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000)),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
  });

  customers: Customer[] = this.customerService.getAll();

  facilities: Facility[] = this.facilityService.getAll();

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.contractForm.reset();
    alert('Tạo mới thành công');
    this.router.navigate(['/contract/list']);
  }

  validationMessage = {
    customer: [
      {type: 'required', message: '*Vui lòng chọn khách hàng'},
    ],
    facility: [
      {type: 'required', message: '*Vui lòng chọn dịch vụ'},
    ],
    startDate: [
      {type: 'required', message: '*Vui lòng nhập ngày bắt đầu làm hợp đồng'},
    ],
    endDate: [
      {type: 'required', message: '*Vui lòng nhập ngày kết thúc hợp đồng'},
    ],
    deposit: [
      {type: 'required', message: '*Vui lòng nhập tiền đặt cọc'},
      {type: 'pattern', message: '*Vui lòng số > 0'},
    ],
  }

}

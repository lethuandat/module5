import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birthDay: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    type: new FormControl(),
  });

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer);
    this.customerForm.reset();
    alert('Tạo mới thành công');
  }
}

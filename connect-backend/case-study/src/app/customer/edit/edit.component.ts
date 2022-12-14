import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../customer-type.service";
import {checkBirthDay} from "../../validate/check-birth-day";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  customerTypeSelected: CustomerType;
  id: number;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerTypeService.getAll().subscribe(customerTypes => {
        this.customerService.findById(this.id).subscribe(customer => {
          console.log(customer)
          this.customerTypes = customerTypes;
          this.customerTypeSelected = this.customerTypes[0];
          this.customerForm = new FormGroup({
            id: new FormControl(customer.id),
            name: new FormControl(customer.name, [Validators.required, Validators.pattern("^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$")]),
            birthDay: new FormControl(customer.birthDay, [Validators.required, checkBirthDay]),
            gender: new FormControl(customer.gender, [Validators.required]),
            idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern("\\d{9}")]),
            phone: new FormControl(customer.phone, [Validators.required, Validators.pattern("^(0|\\(\\+84\\))\\d{9}$")]),
            email: new FormControl(customer.email, [Validators.required, Validators.email]),
            address: new FormControl(customer.address, [Validators.required]),
            type: new FormControl(this.customerTypeSelected, [Validators.required]),
          });
        });
      });
    });
  }

  ngOnInit(): void {
  }

  update(id: number) {
    const customer = this.customerForm.value;
    customer.customerType = this.customerTypeSelected;

    this.customerService.update(id, customer).subscribe(() => {
      this.toast.info("Cập nhật thành công", "Thông báo");
      this.router.navigate(['/customer/list']);
    });
  }

  validationMessage = {
    name: [
      {type: 'required', message: '*Vui lòng nhập tên'},
      {type: 'pattern', message: '*Vui lòng nhập tên đúng'}
    ],
    birthDay: [
      {type: 'required', message: '*Vui lòng nhập ngày sinh'},
    ],
    gender: [
      {type: 'required', message: '*Vui lòng chọn giới tính'},
    ],
    idCard: [
      {type: 'required', message: '*Vui lòng nhập số CMND'},
      {type: 'pattern', message: '*Vui lòng nhập số CMND gồm 9 số từ 0 đến 9'}
    ],
    phone: [
      {type: 'required', message: '*Vui lòng nhập số điện thoại'},
      {type: 'pattern', message: '*Vui lòng nhập số điện thoại đúng định dạng 0xxxxxxxxx or (+84)xxxxxxxx'}
    ],
    address: [
      {type: 'required', message: '*Vui lòng nhập địa chỉ'}
    ],
    email: [
      {type: 'required', message: '*Vui lòng nhập email'},
      {type: 'email', message: '*Vui lòng nhập email đúng định dạng email@email.email'}
    ],
    type: [
      {type: 'required', message: 'Vui lòng nhập loại khách hàng'}
    ],
  }

}

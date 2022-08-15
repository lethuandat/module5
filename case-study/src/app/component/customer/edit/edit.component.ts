import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerForm: FormGroup;
  id: number;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.findById(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        birthDay: new FormControl(customer.birthDay),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        type: new FormControl(customer.type),
      });
    });
  }

  ngOnInit(): void {
  }


  findById(id: number) {
    return this.customerService.findById(id);
  }

  update(id: number) {
    const customer = this.customerForm.value;
    this.customerService.update(id, customer);
    alert('Cập nhật thành công');
    this.router.navigate(['/customer/list']);
  }
}

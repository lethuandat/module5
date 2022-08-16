import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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
        name: new FormControl(customer.name)
      });
    });
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.customerService.findById(id);
  }

  delete(id: number) {
    this.customerService.delete(id);
    this.router.navigate(['/customer/list']);
  }
}

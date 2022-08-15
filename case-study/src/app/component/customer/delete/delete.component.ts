import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.customerService.findById(id);
  }

  deleteProduct(id: number) {
    this.customerService.delete(id);
    this.router.navigate(['/customer/list']);
  }
}

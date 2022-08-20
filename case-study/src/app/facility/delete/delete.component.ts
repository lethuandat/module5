import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../customer/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityService} from "../facility.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  facilityForm: FormGroup;
  id: number;

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
        name: new FormControl(facility.name)
      });
    });
  }

  ngOnInit(): void {
  }


  findById(id: number) {
    return this.facilityService.findById(id);
  }

  deleteProduct(id: number) {
    this.facilityService.delete(id);
    this.router.navigate(['/facility/list']);
  }
}

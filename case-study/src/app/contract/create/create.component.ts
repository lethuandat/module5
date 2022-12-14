import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../contract.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../customer/customer.service";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../facility/facility.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required, this.checkDateStart]),
    endDate: new FormControl('', [Validators.required, this.checkDateStop]),
    deposit: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
  }, this.checkDate);

  customers: Customer[] = [];

  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getFacility();
  }

  getCustomer(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getFacility(): void {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  submit(): void {
    const contract = this.contractForm.value;

    this.customerService.findById(contract.customer).subscribe(customer => {

      this.facilityService.findById(contract.facility).subscribe(facility => {

        contract.customer = {
          id: customer.id,
          name: customer.name
        }

        contract.facility = {
          id: facility.id,
          name: facility.name
        }

        this.contractService.save(contract).subscribe(() => {
          this.toast.success('Th??m m???i th??nh c??ng!', "Th??ng b??o");
          this.router.navigate(['/contract/list']);
        }, e => console.log(e));

      })
    });

  }

  checkDateStart(contractDate: AbstractControl) {
    const now = new Date();

    const dateStart = new Date(contractDate.value);

    if (dateDiff(dateStart, now) <= 0) {
      console.log(dateDiff(dateStart, now))
      return {dateStartError: true};
    }
  }

  checkDateStop(contractDate: AbstractControl) {
    const now = new Date();

    const dateStop = new Date(contractDate.value);

    if (dateDiff(dateStop, now) <= 0) {
      return {dateStopError: true};
    }
  }

  checkDate(contractDate: AbstractControl) {
    const dateStart = new Date(contractDate.value.startDate);

    const dateStop = new Date(contractDate.value.endDate);


    if (dateDiff(dateStart, dateStop) < 0) {
      return {dateContractError: true};
    }

    return null;
  }


  validationMessage = {
    customer: [
      {type: 'required', message: '*Vui l??ng ch???n kh??ch h??ng'},
    ],
    facility: [
      {type: 'required', message: '*Vui l??ng ch???n d???ch v???'},
    ],
    startDate: [
      {type: 'required', message: '*Vui l??ng nh???p ng??y b???t ?????u l??m h???p ?????ng'},
    ],
    endDate: [
      {type: 'required', message: '*Vui l??ng nh???p ng??y k???t th??c h???p ?????ng'},
    ],
    deposit: [
      {type: 'required', message: '*Vui l??ng nh???p ti???n ?????t c???c'},
      {type: 'pattern', message: '*Vui l??ng s??? > 0'},
    ],
  }
}

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

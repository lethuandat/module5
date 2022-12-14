import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StandardRoom} from "../../model/standard-room";
import {FacilityType} from "../../model/facility-type";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../rent-type.service";
import {FacilityTypeService} from "../facility-type.service";
import {StandardRoomService} from "../standard-room.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
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

  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  standardRooms: StandardRoom[] = [];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private standardRoomService: StandardRoomService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getRentType();
    this.getFacilityType();
    this.getStandardRoom();
  }

  getRentType() {
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
  }

  getFacilityType() {
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
  }

  getStandardRoom() {
    this.standardRoomService.getAll().subscribe(standardRooms => {
      this.standardRooms = standardRooms;
    });
  }

  submit() {
    const facility = this.facilityForm.value;

    facility.rentType = {
      name: facility.rentType
    };

    facility.facilityType = {
      name: facility.facilityType
    };

    facility.standardRoom = {
      name: facility.standardRoom
    };

    this.facilityService.save(facility).subscribe(() => {
      alert('T???o m???i th??nh c??ng');
      this.facilityForm.reset();
      this.router.navigate(['/facility/list']);
    }, e => console.log(e));
  }

  type = "";

  getType(type) {
    this.type = type;
  }

  validationMessage = {
    name: [
      {type: 'required', message: '*T??n d???ch v??? kh??ng ???????c b??? tr???ng'},
      {type: 'pattern', message: '*Vui l??ng nh???p t??n ????ng (kh??ng ???????c ch???a s???)'}
    ],
    area: [
      {type: 'required', message: '*Vui l??ng nh???p di???n t??ch d???ch v???'},
      {type: 'pattern', message: '*Di???n t??ch ph???i > 0'}
    ],
    cost: [
      {type: 'required', message: '*Vui l??ng nh???p gi?? thu?? d???ch v???'},
      {type: 'pattern', message: '*Gi?? thu?? ph???i > 0'}
    ],
    maxPeople: [
      {type: 'required', message: '*Vui l??ng nh???p s??? l?????ng ng?????i t???i ??a cho d???ch v???'},
      {type: 'pattern', message: '*S??? l?????ng ng?????i t???i ??a ph???i > 0'}
    ],
    rentType: [
      {type: 'required', message: '*Vui l??ng ch???n ki???u thu??'}
    ],
    facilityType: [
      {type: 'required', message: '*Vui l??ng ch???n lo???i d???ch v???'}
    ],
    poolArea: [
      {type: 'pattern', message: '*Di???n t??ch h??? b??i ph???i > 0'}
    ],
    numberFloor: [
      {type: 'pattern', message: '*S??? t???ng ph???i > 0'}
    ],
  }

}

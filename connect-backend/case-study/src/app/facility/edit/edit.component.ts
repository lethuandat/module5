import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RentType} from "../../model/rent-type";
import {FacilityType} from "../../model/facility-type";
import {StandardRoom} from "../../model/standard-room";
import {FacilityTypeService} from "../facility-type.service";
import {RentTypeService} from "../rent-type.service";
import {StandardRoomService} from "../standard-room.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  standardRooms: StandardRoom[] = [];
  facilityForm: FormGroup;
  id: number;

  constructor(
    private facilityService: FacilityService,
    private facilityTypeService: FacilityTypeService,
    private rentTypeService: RentTypeService,
    private standardRoomService: StandardRoomService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
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

  findById(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        cost: new FormControl(facility.cost, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom),
        otherDescription: new FormControl(facility.otherDescription),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        numberFloor: new FormControl(facility.numberFloor, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        facilityFree: new FormControl(facility.facilityFree),
        image: new FormControl(facility.image)
      });
    });
  }

  update(id: number) {
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

    this.facilityService.update(id, facility).subscribe(() => {
      alert('C???p nh???t th??nh c??ng');
      this.router.navigate(['/facility/list']);
    });
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

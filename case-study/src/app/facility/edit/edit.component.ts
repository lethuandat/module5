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
import {ToastrService} from "ngx-toastr";

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
        private router: Router,
        private toast: ToastrService
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
                rentType: new FormControl(facility.rentType.id, [Validators.required]),
                facilityType: new FormControl(facility.facilityType.id, [Validators.required]),
                standardRoom: new FormControl(facility.standardRoom.id),
                otherDescription: new FormControl(facility.otherDescription),
                poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
                numberFloor: new FormControl(facility.numberFloor, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
                facilityFree: new FormControl(facility.facilityFree),
                image: new FormControl(facility.image, [Validators.required])
            });
        });
    }

    update(id: number) {
        const facility = this.facilityForm.value;

        this.rentTypeService.findById(facility.rentType).subscribe(rentType => {

            this.facilityTypeService.findById(facility.facilityType).subscribe(facilityType => {

                this.standardRoomService.findById(facility.standardRoom).subscribe(standardRoom => {

                    facility.rentType = {
                        id: rentType.id,
                        name: rentType.name
                    };

                    facility.facilityType = {
                        id: facilityType.id,
                        name: facilityType.name
                    };

                    facility.standardRoom = {
                        id: standardRoom.id,
                        name: standardRoom.name
                    };

                    this.facilityService.update(id, facility).subscribe(() => {
                        this.toast.info('C???p nh???t th??nh c??ng!', "Th??ng b??o");
                        this.router.navigate(['/facility/list']);
                    }, e => console.log(e));
                })
            })
        })

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
        image: [
            {type: 'pattern', message: '*Vui l??ng nh???p link ???nh'}
        ],
    }
}

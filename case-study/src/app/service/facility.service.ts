import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() {
  }

  facilities: Facility[] = [
    {
      id: 1,
      name: "Phòng suite hướng biển",
      area: 300,
      cost: 500,
      maxPeople: 4,
      rentType: "Ngày",
      facilityType: "Villa",
      standardRoom: "VIP",
      otherDescription: "Có hồ bơi",
      poolArea: 60,
      numberFloor: 4,
      facilityFree: "N/A"
    },
    {
      id: 2,
      name: "Phòng deluxe hướng biển",
      area: 300,
      cost: 500,
      maxPeople: 4,
      rentType: "Ngày",
      facilityType: "Villa",
      standardRoom: "VIP",
      otherDescription: "Có hồ bơi",
      poolArea: 60,
      numberFloor: 4,
      facilityFree: "N/A"
    },
    {
      id: 3,
      name: "Phòng suite hướng vườn",
      area: 300,
      cost: 500,
      maxPeople: 4,
      rentType: "Ngày",
      facilityType: "Villa",
      standardRoom: "VIP",
      otherDescription: "Có hồ bơi",
      poolArea: 60,
      numberFloor: 4,
      facilityFree: "N/A"
    },
    {
      id: 4,
      name: "Phòng suite hướng biển",
      area: 300,
      cost: 500,
      maxPeople: 4,
      rentType: "Ngày",
      facilityType: "Villa",
      standardRoom: "VIP",
      otherDescription: "Có hồ bơi",
      poolArea: 60,
      numberFloor: 4,
      facilityFree: "N/A"
    }
  ];

  getAll() {
    return this.facilities;
  }

  save(facility: Facility) {
    this.facilities.push(facility);
  }

  findById(id: number) {
    return this.facilities.find(facility => facility.id === id);
  }

  update(id: number, facility: Facility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id === id) {
        this.facilities[i] = facility;
      }
    }
  }

  delete(id: number) {
    this.facilities = this.facilities.filter(facility => {
      return facility.id !== id;
    });
  }
}

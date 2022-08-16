import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: "Lê Văn Nam",
        birthDay: "20-12-1990",
        gender: "Nam",
        idCard: "982379821",
        phone: "0911111111",
        email: "nam@gmail.com",
        address: "Đà Nẵng",
        type: "Gold"
      },
      facility: {
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
      startDate: "12-08-2022",
      endDate: "15-08-2022",
      deposit: 600
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: "Lê Văn Nam",
        birthDay: "20-12-1990",
        gender: "Nam",
        idCard: "982379821",
        phone: "0911111111",
        email: "nam@gmail.com",
        address: "Đà Nẵng",
        type: "Gold"
      },
      facility: {
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
      startDate: "12-08-2022",
      endDate: "15-08-2022",
      deposit: 600
    },
    {
      id: 3,
      customer: {
        id: 1,
        name: "Lê Văn Nam",
        birthDay: "20-12-1990",
        gender: "Nam",
        idCard: "982379821",
        phone: "0911111111",
        email: "nam@gmail.com",
        address: "Đà Nẵng",
        type: "Gold"
      },
      facility: {
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
      startDate: "12-08-2022",
      endDate: "15-08-2022",
      deposit: 600
    },
    {
      id: 4,
      customer: {
        id: 1,
        name: "Lê Văn Nam",
        birthDay: "20-12-1990",
        gender: "Nam",
        idCard: "982379821",
        phone: "0911111111",
        email: "nam@gmail.com",
        address: "Đà Nẵng",
        type: "Gold"
      },
      facility: {
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
      startDate: "12-08-2022",
      endDate: "15-08-2022",
      deposit: 600
    }
  ];


  constructor() {
  }

  getAll() {
    return this.contracts;
  }

  save(contract: Contract) {
    this.contracts.push(contract);
  }
}

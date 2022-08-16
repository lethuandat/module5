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
      },
      facility: {
        id: 1,
        name: "Phòng suite hướng biển",
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
      },
      facility: {
        id: 1,
        name: "Phòng suite hướng biển",
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
      },
      facility: {
        id: 1,
        name: "Phòng suite hướng biển",
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
      },
      facility: {
        id: 1,
        name: "Phòng suite hướng biển",
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

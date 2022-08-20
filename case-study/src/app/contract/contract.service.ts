import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
    {
      id: Math.floor(Math.random() * 1000),
      customer: {
        id: 1,
        name: 'Lê Văn Nam',
      },
      facility: {
        id: 1,
        name: 'Phòng suite hướng biển',
      },
      startDate: '08/12/2022',
      endDate: '08/16/2022',
      deposit: 600
    },
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

import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract";
import {ContractService} from "../../../service/contract.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contracts: Contract[] = [];

  page = 1;
  pageSize = 10;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contracts = this.contractService.getAll();
  }
}

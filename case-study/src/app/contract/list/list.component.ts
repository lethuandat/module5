import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../contract.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contracts: Contract[] = [];

  page = 1;
  pageSize = 5;
  keyword: string;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  search() {
    this.contractService.find(this.keyword).subscribe(contracts => {
      this.contracts = contracts;
      this.keyword = "";
    })
  }
}

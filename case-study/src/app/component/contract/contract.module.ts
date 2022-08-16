import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {ListComponent} from "./list/list.component";
import {ContractRoutingModule} from "./contract-routing.module";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractRoutingModule
  ]
})
export class CustomerModule {
}

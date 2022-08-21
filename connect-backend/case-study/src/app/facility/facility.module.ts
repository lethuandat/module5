import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {FacilityRoutingModule} from "./facility-routing.module";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FacilityRoutingModule,
    NgbPaginationModule
  ]
})
export class FacilityModule {
}

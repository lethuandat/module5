import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {BodyRoutingModule} from "./body-routing.module";
import {BodyComponent} from "./body.component";

@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    ReactiveFormsModule
  ]
})
export class BodyModule {
}

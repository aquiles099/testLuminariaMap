import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailsComponent } from './view-details.component';
import { ViewDetailsRoutingModule } from './view-details-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewDetailsRoutingModule,
    SharedModule
  ]
})
export class ViewDetailsModule { }

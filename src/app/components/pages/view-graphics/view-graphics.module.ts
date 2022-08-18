import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewGraphicsComponent } from './view-graphics.component';
import { ViewGraphicsRoutingModule } from './view-graphics-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ViewGraphicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewGraphicsRoutingModule,
  ]
})
export class ViewGraphicsModule { }

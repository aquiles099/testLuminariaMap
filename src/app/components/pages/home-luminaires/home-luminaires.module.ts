import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLuminairesComponent } from './home-luminaires.component';
import { HomeLuminairesRoutingModule } from './home-luminaires-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeLuminairesComponent
  ],
  imports: [
    CommonModule,
    HomeLuminairesRoutingModule,
    SharedModule
  ]
})
export class HomeLuminairesModule { }

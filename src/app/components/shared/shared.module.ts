import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MapLuminairesComponent } from './map-luminaires/map-luminaires.component';
import { ContentDetailsModule } from '../pages/view-details/content-details/content-details.module';
import { ContentGraphicsModule } from '../pages/view-graphics/content-graphics/content-graphics.module';

@NgModule({
  declarations: [
    MapLuminairesComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    ContentDetailsModule,
    ContentGraphicsModule,
    LeafletModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    MapLuminairesComponent,
    ToolBarComponent,
    LeafletModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule
  ]
})
export class SharedModule { }
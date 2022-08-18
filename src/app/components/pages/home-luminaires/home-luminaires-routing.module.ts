import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLuminairesComponent } from './home-luminaires.component';

const routes: Routes = [
    {
        path: 'map-luminaires',
        component: HomeLuminairesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLuminairesRoutingModule { }
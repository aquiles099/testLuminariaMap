import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewDetailsComponent } from './view-details.component';

const routes: Routes = [
    {
        path: 'view/details',
        component: ViewDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDetailsRoutingModule { }
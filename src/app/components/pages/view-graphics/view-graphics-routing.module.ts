import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewGraphicsComponent } from './view-graphics.component';

const routes: Routes = [
    {
        path: 'view/graphics',
        component: ViewGraphicsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewGraphicsRoutingModule { }
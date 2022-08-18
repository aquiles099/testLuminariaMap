import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view/details', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./components/pages/view-details/view-details.module').then(m => m.ViewDetailsModule),
    data: { preload: true }
  },
  {
    path: '',
    loadChildren: () => import('./components/pages/view-graphics/view-graphics.module').then(m => m.ViewGraphicsModule),
    data: { preload: true }
  },
  { path: '**', redirectTo: 'view/details', pathMatch: 'full' }
];

@NgModule({
imports: [
  RouterModule.forRoot(routes, {useHash: false})
],
exports: [RouterModule]
})
export class AppRoutingModule { }

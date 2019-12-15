import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetourPage } from './createtour.page';

const routes: Routes = [
  {
    path: '',
    component: CreatetourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatetourPageRoutingModule {}

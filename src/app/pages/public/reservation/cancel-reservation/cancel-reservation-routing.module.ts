import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelReservationPage } from './cancel-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: CancelReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelReservationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciaPage } from './emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenciaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsandcondicionsPage } from './termsandcondicions.page';

const routes: Routes = [
  {
    path: '',
    component: TermsandcondicionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsandcondicionsPageRoutingModule {}

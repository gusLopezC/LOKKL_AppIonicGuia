import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentGuidePage } from './payment-guide.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentGuidePageRoutingModule {}

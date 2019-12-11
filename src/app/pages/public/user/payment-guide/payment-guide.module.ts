import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PaymentGuidePageRoutingModule } from './payment-guide-routing.module';

import { PaymentGuidePage } from './payment-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    PaymentGuidePageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [PaymentGuidePage]
})
export class PaymentGuidePageModule { }

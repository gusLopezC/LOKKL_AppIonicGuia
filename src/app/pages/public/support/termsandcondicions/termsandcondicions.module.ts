import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsandcondicionsPageRoutingModule } from './termsandcondicions-routing.module';

import { TermsandcondicionsPage } from './termsandcondicions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsandcondicionsPageRoutingModule
  ],
  declarations: [TermsandcondicionsPage]
})
export class TermsandcondicionsPageModule {}

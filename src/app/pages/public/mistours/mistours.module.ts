import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MistoursPageRoutingModule } from './mistours-routing.module';

import { MistoursPage } from './mistours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MistoursPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [MistoursPage]
})
export class MistoursPageModule {}

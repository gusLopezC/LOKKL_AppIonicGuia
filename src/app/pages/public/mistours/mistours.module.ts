import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MistoursPageRoutingModule } from './mistours-routing.module';

import { MistoursPage } from './mistours.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    MistoursPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [MistoursPage]
})
export class MistoursPageModule {}

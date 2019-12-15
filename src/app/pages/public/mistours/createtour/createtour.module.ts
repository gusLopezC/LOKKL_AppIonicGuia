import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetourPageRoutingModule } from './createtour-routing.module';

import { CreatetourPage } from './createtour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CreatetourPageRoutingModule
  ],
  declarations: [CreatetourPage]
})
export class CreatetourPageModule { }

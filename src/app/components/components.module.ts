import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PipesModule } from '../pipes/pipes.module';


// Componente
import { AboutusComponent } from './profile/aboutus/aboutus.component';
import { ChangePasswordComponent } from './profile/editprofie/change-password/change-password.component';
import { ReservasComponent } from './reservas/reservas/reservas.component';



@NgModule({
  entryComponents: [
    AboutusComponent,
    ChangePasswordComponent,
    ReservasComponent
  ],
  declarations: [
    AboutusComponent,
    ChangePasswordComponent,
    ReservasComponent
  ],
  exports: [
    AboutusComponent,
    ChangePasswordComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ]
})
export class ComponentsModule { }

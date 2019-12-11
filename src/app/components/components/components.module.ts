import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// Componente
import { AboutusComponent } from '../profile/aboutus/aboutus.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  entryComponents: [
    AboutusComponent,
  ],
  declarations: [
    AboutusComponent,
  ],
  exports: [
    AboutusComponent,
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

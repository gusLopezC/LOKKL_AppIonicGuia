import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  TourService,
  UsuariosService,
  ToursciudadService,
  DataLocalService,
  RecoveryPasswordService,
  EmailService,
  ReservasService,
  GeolocationService,
  GuiaService,
  PaymentService,
  NetworkService,
  ChatService
} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    TourService,
    UsuariosService,
    ToursciudadService,
    DataLocalService,
    RecoveryPasswordService,
    EmailService,
    ReservasService,
    GeolocationService,
    GuiaService,
    PaymentService,
    NetworkService,
    ChatService
  ]
})
export class ServiceModule { }

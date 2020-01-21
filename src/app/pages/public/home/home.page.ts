import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { NetworkService, ConnectionStatus } from '../../../services/network/network.service';
import { UsuariosService, ReservasService } from '../../../services/service.index';
import { Payment } from '../../../models/payment.model';
import { Tours } from '../../../models/tour.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  user: any;
  tours: Tours[] = [];
  reservas: Payment[] = [];
  conection: ConnectionStatus;

  HayTours = false;
  NoHayTours = false;

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  NoConexion = false;
  messajeVentana = 1;
  token: string;

  constructor(
    private _usuarioService: UsuariosService,
    public _reservasService: ReservasService,
    private _networkService: NetworkService,
    public toastController: ToastController,
    private storage: Storage, ) { }

  async ionViewWillEnter() {
    setTimeout(() => {
      this.obtenerReservaciones();
    }, 1500);
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'Activas') {
      this.obtenerReservaciones();
    } else {
      this.mostrarHistorial();
    }
  }

  async obtenerReservaciones(refresher?) {
    this.user = await this._usuarioService.getUsuario();
    this.token = await this.storage.get('token') || null;


    this.NoConexion = false;

    this.revisarConexion().then((valido) => {
      if (valido && (this.user)) {

        this._reservasService.obtenerReservas(this.user.id)
          .subscribe(resp => {
            this.reservas = [];
            if (resp.Reservaciones.length >= 1) {
              this.HayTours = true;
              this.NoHayTours = false;
              this.reservas = resp.Reservaciones;

            } else {
              this.messajeVentana = 1;
              this.HayTours = false;
              this.NoHayTours = true;
            }
          },
            error => {
              this.NoConexion = true;
            });
      } else {
        this.NoConexion = true;
        this.HayTours = false;
      }
    });
    if (refresher) {
      refresher.target.complete();
    }
  }// end obtenerReservaciones

  async mostrarHistorial() {

    this.user = await this._usuarioService.getUsuario();
    this.NoConexion = false;

    this.revisarConexion().then((valido) => {
      if (valido) {
        this._reservasService.obtenerHistorialReservas(this.user.id)
          .subscribe(resp => {
            this.reservas = [];
            if (resp.Reservaciones.length >= 1) {
              this.reservas = resp.Reservaciones;
              this.HayTours = true;
              this.NoHayTours = false;
            } else {
              this.messajeVentana = 2;
              this.HayTours = false;
              this.NoHayTours = true;
            }
          },
            error => {
              this.NoConexion = true;
            });
      } else {
        this.NoConexion = true;
        this.HayTours = false;
      }
    });
  }// end mostrarHistorial


  async revisarConexion() {
    this.reservas = [];
    let result;
    return result = await this._networkService.revisarConexion();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController, IonContent, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';

import { ChatService, UsuariosService, ReservasService, NetworkService } from '../../../../services/service.index';
import * as firebase from 'firebase';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {


  // @ViewChild('content', { static: false }) content: IonContent;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  reserva: any;

  roomkey: string;

  userId = '';
  message: string;
  chats = [];
  token: string;
  user: Usuario;
  nameCliente: any;

  constructor(
    private _usuarioService: UsuariosService,
    public _reservasService: ReservasService,
    public _ChatService: ChatService,
    private _networkService: NetworkService,
    public toastController: ToastController,
    public navCtrl: NavController,
    private location: Location,
    public route: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reserva = this.router.getCurrentNavigation().extras.state.reserva;
        this.nameCliente = this.router.getCurrentNavigation().extras.state.nameCliente;

      }
      console.log(this.reserva);
    });


  }

  async ionViewWillEnter() {
    this.user = await this._usuarioService.getUsuario();
    this.obtenerMensajes();
  }// end ngOnit


  async obtenerMensajes() {

    if (this.reserva.order_nr) {
      this.reserva.id_reservacion = this.reserva.id;
    }

    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();

    this.token = await this._usuarioService.getToken();
    this._ChatService.obtenerChatReservacion(this.reserva.id_reservacion, this.token)
      .subscribe(resp => {
        console.log(resp.Mensajes);
        if (resp.Mensajes.length > 0) {
          this.chats = resp.Mensajes;

        }
      });

  }


  ionViewDidEnter(): void {
    setTimeout(() => {
      let y = document.getElementById('endVista').offsetTop;
      this.content.scrollToPoint(0, y);
    }, 1000);
  }


  exitChat() {
    // this.sendExitMessage();
    this.location.back();
  }

  async sendChatMessage() {

    this.token = await this._usuarioService.getToken();

    /*const remitente = this.reserva.id_guia;
    const receptor = this.reserva.id_comprador;

    console.log(remitente);
    return false;
    this.reserva.id_comprador = remitente;
    this.reserva.id_guia = receptor;
*/

    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();



    this._ChatService.sendMessage(this.reserva, this.message, this.token)
      .subscribe(resp => {
        this.message = '';
        console.log(resp.Mensajes);
        if (resp.Mensajes.length > 0) {
          this.chats = resp.Mensajes;

        }
        setTimeout(() => {
          let y = document.getElementById('endVista').offsetTop;
          this.content.scrollToPoint(0, y);
        }, 1000);
      });
  }

}

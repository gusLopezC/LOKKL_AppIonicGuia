import { Component, OnInit } from '@angular/core';
import { UsuariosService, TourService } from '../../../services/service.index';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Usuario } from '../../../models/usuario.model';
import { Tours } from '../../../models/tour.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mistours',
  templateUrl: './mistours.page.html',
  styleUrls: ['./mistours.page.scss'],
})
export class MistoursPage {

  usuario: Usuario;
  tours: Tours;
  HayTours = false;
  NoHayTours = false;
  token: string;

  constructor(
    public navCtrl: NavController,
    public _usuarioService: UsuariosService,
    public _toursService: TourService,
    private storage: Storage,
    private iab: InAppBrowser) { }

  async ionViewWillEnter() {

    this.obtenerMisTours();
  }


  async obtenerMisTours() {
    this.usuario = await this.storage.get('usuario');

    this._toursService.obtenerMisTour(this.usuario.id)
      .subscribe((resp: any) => {
        console.log(resp);
        if (resp.Tours.length >= 1) {
          this.tours = resp.Tours;
          this.HayTours = true;
          this.NoHayTours = false;
        } else {
          this.HayTours = false;
          this.NoHayTours = true;
        }
      });
  }

  createTour() {

    const browser = this.iab.create('https://lokkl.com/users/createtours');

  

    browser.close();

    // this.navCtrl.navigateRoot('/createtour');
  }

}

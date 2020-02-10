import { Component, OnInit } from '@angular/core';
import { UsuariosService, TourService } from '../../../services/service.index';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Usuario } from '../../../models/usuario.model';
import { Tours } from '../../../models/tour.model';
import { NavController, ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

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
    private router: Router,
    public navCtrl: NavController,
    public _usuarioService: UsuariosService,
    public _toursService: TourService,
    private storage: Storage,
    private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    public alertController: AlertController) { }

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

  async lanzarMenu(tour) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Editar Tour',
        icon: 'create',
        handler: () => {
          const browser = this.iab.create('https://lokkl.com/users/edittour/' + tour.slug);
          browser.close();
        }
      }, {
        text: 'Eliminar Tour',
        icon: 'close',
        handler: () => {
          this.borrarTour(tour.id);
        }
      }]
    });
    await actionSheet.present();
  }


  async borrarTour(id: string) {
    const alert = await this.alertController.create({
      header: 'Estas seguro que quieres eliminar!',
      message: 'No se podra revertir esta acción',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this._toursService.borrarTour(id)
              .subscribe(async (resp: any) => {
                const toast = await this.toastController.create({
                  message: 'Se a eliminado correctamente.',
                  duration: 2000
                });
                toast.present();
                this.obtenerMisTours();
              });
          }
        }
      ]
    });

    await alert.present();
  }
}

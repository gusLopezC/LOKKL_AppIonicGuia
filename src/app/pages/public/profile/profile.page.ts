import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AboutusComponent } from '../../../components/profile/aboutus/aboutus.component';
import { UsuariosService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = null;

  constructor(
    public modalController: ModalController,
    private _usuarioService: UsuariosService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.user = await this._usuarioService.getUsuario();
  }

  goEditProfile() {
    this.navCtrl.navigateRoot('/home/profile/editprofile');
  }

  async abrirAboutUs() {
    const modal = await this.modalController.create({
      component: AboutusComponent
    });
    return await modal.present();
  }

  async cerrarSesion() {
    await this._usuarioService.logout();
    this.user = null;
  }

}

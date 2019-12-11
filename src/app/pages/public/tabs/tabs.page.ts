import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/service.index';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: any;

  constructor(private _usuarioService: UsuariosService, ) { }

  async ionViewWillEnter() {
    this.user = await this._usuarioService.getUsuario();

  }

}

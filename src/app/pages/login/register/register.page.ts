import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public onRegisterForm: FormGroup;
  role: string;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private _usuariosService: UsuariosService,
    private toastController: ToastController,
    private router: Router,
    // private iab: InAppBrowse
  ) { }


  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])]
    });
  }

  async signUp() {

    const usuario = new Usuario(
      this.onRegisterForm.value.fullName,
      this.onRegisterForm.value.email,
      this.onRegisterForm.value.password,
      this.onRegisterForm.value.image,
      this.onRegisterForm.value.telefono,
      this.onRegisterForm.value.infopersonal,
      this.role = 'USER_ROLE',
      this.onRegisterForm.value.google,
    );


    const valido = await this._usuariosService.register(usuario);
    if (valido) {
      this.navCtrl.navigateRoot('/home/home', { animated: true });
    } else {
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { UsuariosService } from '../../../services/service.index';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public onLoginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private fb: Facebook,
    private googlePlus: GooglePlus,
    private fireAuth: AngularFireAuth,
    private _usuariosService: UsuariosService
  ) {
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async onLogin() {

    const usuario = new Usuario(
      null,
      this.onLoginForm.value.email,
      this.onLoginForm.value.password,
    );
    const valido = await this._usuariosService.login(usuario);
    if (valido) {
      this.navCtrl.navigateRoot('/home', { animated: true });
    } else {
    }
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  //Login redes sociales


  async doGoogleLogin() {

    let params;
    if (this.platform.is('android')) {
      params = {
        'scopes': '',
        'webClientId': '776453831528-n65a1eecjrj1hr8e9igljdtum1iva8gs.apps.googleusercontent.com',
        'offline': true,
      };
    } else {
      params = {};
    }
    this.googlePlus.login(params)
      .then((response) => {
        this.onLoginSuccess((response));
      }).catch((error) => {
        this.onLoginError(error);
      });
  }// end login Google

  onLoginSuccess(response) {

    const UsuarioReponse = {
      uid: response.userId,
      displayName: response.displayName,
      photoURL: response.imageUrl,
      email: response.email,
      phoneNumber: null,
      providerId: null,
      name: response.givenName
    };

    const valido = this._usuariosService.loginRedSocial(UsuarioReponse);
    if (valido) {
      this.navCtrl.navigateRoot('/home/home', { animated: true });
    } else {
      return false;
    }

  }

  async LoginFacebook() {

    console.log('Intento sesion Facebbok');
    const permissions = ['email'];

    this.fb.login(permissions)
      .then((response: FacebookLoginResponse) => {
        console.log(response);
        this.onLoginSuccessFacebbok(response);
      }, error => {
        console.log(error);
        if (!this.platform.is('cordova')) {
        }
      });

  }
  onLoginSuccessFacebbok(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {

        const valido = this._usuariosService.loginRedSocial(response.user.providerData[0]);
        if (valido) {
          this.navCtrl.navigateRoot('/home/home', { animated: true });
        } else {
          return false;
        }
      });

  }


  async onLoginError(err) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      message: 'A ocurrido un error vuelve a intentar.' + err,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    });

    toast.present();

  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

}

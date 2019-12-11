import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { GuiaService, UsuariosService } from '../../../../services/service.index';
import { Guia } from '../../../../models/guia.model';



@Component({
  selector: 'app-payment-guide',
  templateUrl: './payment-guide.page.html',
  styleUrls: ['./payment-guide.page.scss'],
})
export class PaymentGuidePage implements OnInit {

  formulario: FormGroup;
  user: any;
  usuario: any;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public _GuiaService: GuiaService,
    public _usuarioService: UsuariosService) {

    this.formulario = formBuilder.group({
      pais: new FormControl('', { updateOn: 'blur' }),
      tipomoneda: new FormControl('', { updateOn: 'blur' }),
      clabeInterbancaria: new FormControl('', { updateOn: 'blur' }),
      numeroCuenta: new FormControl('', { updateOn: 'blur' }),
      RFC: new FormControl('', { updateOn: 'blur' }),
      CURP: new FormControl('', { updateOn: 'blur' }),
    }, { updateOn: 'change' });

    this.obtenerMisDatosdePago();
  }

  async ngOnInit() {

  }

  async obtenerMisDatosdePago() {


    this.user = await this._usuarioService.getUsuario();

    this._GuiaService.obtenerMisDatosdePago(this.user.id)
      .subscribe(resp => {
        if (resp.guia) {
          this.llenarFormulario(resp.guia);
        }
      });
  }

  llenarFormulario(guia: any) {
    this.formulario.patchValue({
      pais: guia.pais,
      tipomoneda: guia.tipomoneda,
      clabeInterbancaria: guia.clabeInterbancaria,
      numeroCuenta: guia.numeroCuenta,
      RFC: guia.RFC,
      CURP: guia.CURP,
    });
  }


  mandarDatosPago() {

    const guia = new Guia(
      this.user.id,
      this.formulario.value.pais,
      this.formulario.value.tipomoneda,
      this.formulario.value.clabeInterbancaria,
      this.formulario.value.numeroCuenta,
      this.formulario.value.RFC,
      this.formulario.value.CURP,

    );
    this._GuiaService.cargarDatosPagoGuia(guia)
      .subscribe(correcto => {
        this.presentToast();
        setTimeout(() => {
          this.router.navigate(['/home/profile']);
        }, 1500);
      });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your info have been saved.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }


}

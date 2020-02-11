import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ReservasService } from '../../../services/service.index';
import { Payment } from '../../../models/payment.model';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  @Input() reservas: Payment[] = [];

  constructor(
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router,
    public _reservasService: ReservasService) {
  }

  ngOnInit() {
  }

  async lanzarMenu(reserva) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Send Message',
        icon: 'chatboxes',
        handler: () => {
          if (this.reservas[0].status === 'Pendiente') {
            this.mostrarAlertaChat();
            return false;
          }

          let navigationExtras: NavigationExtras = {
            state: {
              reserva: reserva,
            }
          };
          console.log(navigationExtras);
          this.router.navigate(['/chat'], navigationExtras);
        }
      }, {
        text: 'Cancel Reservation',
        icon: 'close',
        handler: () => {
          let navigationExtras: NavigationExtras = {
            state: {
              reserva: reserva,
            }
          };
          this.router.navigate(['/cancel-reservation'], navigationExtras);
        }
      }]
    });
    await actionSheet.present();
  }


  async mostrarAlertaChat() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Debes aceptar la reserva antes',
      buttons: ['OK']
    });

    await alert.present();

  }

  aceptarTour(id: string) {
    this._reservasService.actualizarEstadoReserva(id, 'Aceptar')
      .subscribe((resp: any) => {
        this.reservas = resp.Reservaciones;
        this.presentToast();
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tour aceptado.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}

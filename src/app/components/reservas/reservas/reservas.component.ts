import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
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
    private router: Router,
    public _reservasService: ReservasService) {
  }

  ngOnInit() { }

  async lanzarMenu(reserva) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Send Message',
        icon: 'chatboxes',
        handler: () => {
          let navigationExtras: NavigationExtras = {
            state: {
              reserva: reserva,
            }
          };
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
      color: 'sucess'
    });
    toast.present();
  }
}

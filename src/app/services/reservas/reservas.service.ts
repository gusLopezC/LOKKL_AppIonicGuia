import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  token: string;

  constructor(public http: HttpClient, private storage: Storage) {
    this.obtenertoken();
  }
  async obtenertoken() {
    return this.token = await this.storage.get('token') || null;
  }

  obtenerReservas(id: string, token: string): Observable<any> {

    console.log(this.token);

    const url = environment.apiUrl + '/api/reservaciones/obtenerReservaciones/' + id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);

    return this.http.get(url, { headers });

  }

  obtenerHistorialReservas(id: string): Observable<any> {

    const url = environment.apiUrl + '/api/reservaciones/obtenerHistorialReservaciones/' + id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return this.http.get(url, { headers });

  }

  actualizarEstadoReserva(id: string, estado: string) {
    const url = environment.apiUrl + '/api/reservaciones/aceptarTour';

    const DatosActualizacion = {
      id: id,
      estado: estado
    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);


    return this.http.post(url, DatosActualizacion, { headers });

  }


  /**
   * Cancelaciones
   */


  revisarPuedeCancelar(pedido: string) {
    const url = environment.apiUrl + '/api/reservaciones/obtenerDiferenciasDias/' + pedido;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return this.http.get(url, { headers });

  }

  cancelarReservacionGuia(pedido: string, motivo: string) {
    const url = environment.apiUrl + '/api/reservaciones/cancelarReservacionGuia';

    const DatosCancelacion = {
      pedido,
      motivo
    };


    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return this.http.post(url, DatosCancelacion, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Storage } from '@ionic/storage';
import { Guia } from '../../models/guia.model';


@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  token: string;

  constructor(public http: HttpClient, private storage: Storage) {
    this.obtenertoken();
  }
  async obtenertoken() {
    return this.token = await this.storage.get('token') || null;
  }


  cargarDatosPagoGuia(guia: Guia) {
    const url = environment.apiUrl + '/api/guias/datosPago';

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return this.http.post(url, guia, { headers });

  }// endCargarDatosPago

  obtenerMisDatosdePago(id: string): Observable<any> {
    const url = environment.apiUrl + '/api/guias/datosPago/' + id;


    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return this.http.get(url, { headers });
  }


}

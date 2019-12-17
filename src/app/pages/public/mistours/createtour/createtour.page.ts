import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { GeolocationService } from '../../../../services/service.index';
import { Tours } from '../../../../models/tour.model';

declare var google: any;

@Component({
  selector: 'app-createtour',
  templateUrl: './createtour.page.html',
  styleUrls: ['./createtour.page.scss'],
})
export class CreatetourPage implements OnInit {

  public search = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();

  public onTourForm: FormGroup;
  mostarLista = false;
  ciudad: any;
  pais: any;
  placeID: any;
  coordenadasGoogle: any;
  usuario: any;

  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private _geolocationService: GeolocationService
  ) {

    this.onTourForm = this.formBuilder.group({
      'puntoInicio': ['', Validators.required],
      'name': ['', Validators.required],
      'schedulle': ['', Validators.required],
      'categories': ['', Validators.required],
      'duration': ['', Validators.required],
      'currencyfield': ['', Validators.required],
      'moneda': ['', Validators.required],
      'idiomas': ['', Validators.required],
      /*itinerary: this.formBuilder.array([this.formBuilder.group({ itinerary: [''] })]),
      whatsIncluded: this.formBuilder.array([this.formBuilder.group({ whatsIncluded: [''] })])*/

    });
  }

  ngOnInit() {
  }

  buscar() {
    if (!this.search.trim().length) { return; }
    const options = {
      input: this.search,
      types: ['(cities)'],
    };
    this.googleAutocomplete.getPlacePredictions(options, predictions => {
      this.mostarLista = true;
      this.searchResults = predictions[0];
    });
  }
  selectSearchResult(item: any) {

    this.search = item.description;

    this.ciudad = item.description;
    this.pais = item.description;
    this.placeID = item.place_id;
    this.coordenadasGoogle = this._geolocationService.obtenerCoordenadasCiudad(item.description);
    console.log(this.coordenadasGoogle);
    this.mostarLista = false;

  }

  /**
  * Metodo que manda los datos para almacenar el tour hay que guardar tomar datos de
  * los metodos de arriba para poder obtener direccion al igual que
  * obtener datos del localStorage para guardar el id  vamos a obtener otros datos a travez
  * de la tabla de guias como los idiomas y demas
  */

  async mandarDatosTour() {

    this.usuario = await this.storage.get('usuario');

    console.log(this.onTourForm.value);

    const tour = new Tours(
      this.usuario.id,
      this.ciudad,
      this.pais,
      this.placeID,
      this.coordenadasGoogle,
      'formValue.value.puntoInicio',
      'formValue.value.name',
      'formValue.value.schedulle',
      [],
      [],
      'formValue.value.categories',
      'formValue.value.duration',
      'formValue.value.idiomas',
      'formValue.value.currencyfield',
      'formValue.value.moneda',
    );

  }

}

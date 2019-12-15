import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  optionsGeo: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(private nativeGeocoder: NativeGeocoder, ) { }

  obtenerCoordenadasCiudad(ciudad: string) {
    this.nativeGeocoder.forwardGeocode(ciudad, this.optionsGeo)
      .then((result: NativeGeocoderResult[]) => {
        console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude)
        return result;
      })
      .catch((error: any) => console.log(error));

  }
}

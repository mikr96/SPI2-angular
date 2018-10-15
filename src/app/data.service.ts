import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getSensorList(): any {
    return this.http.get('http://10.44.11.80:1880/spi2/sensor_list')
      .pipe(map((response: Response) => response));
  }
}

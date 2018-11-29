import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { map, filter, switchMap, catchError, observeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  OIP_ENDPOINT: string = "https://api.oip.tm.com.my/app/t/tmrnd.com.my/";
  DB_ENDPOINT: string = "http://10.44.42.87:1882/";

  constructor(private http: HttpClient) { }

  // App login check via LDAP Authentication
  loginOip(credentials: any) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ee07dab5-ec1d-3346-8d6b-9a194d9bbf4e'
    });
    var url = this.OIP_ENDPOINT + 'ldap/1.0/ldapauth?username=' + credentials.username + '&password=' + credentials.password;
    return this.http.post(url, JSON.stringify(credentials), { headers: headers })
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getDataDate(): any {
    return this.http.get(this.DB_ENDPOINT + 'spi2/sensor_outdoor_dates')
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getTimeDate(dateString: string): any {
    return this.http.get(this.DB_ENDPOINT + 'spi2/sensor_outdoor_time?sensor_date=' + dateString)
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  // Heatmap data
  getSensorList(dataDate: any, datatime: any): any {
    // return this.http.get(this.DB_ENDPOINT + 'spi2/sensor_list')
    // console.log(dataDate, datatime);
    // var url;
    // if (dataapi == 1) {
    //   url = '../assets/temp_data/data1.json';
    // } else if (dataapi == 2) {
    //   url = '../assets/temp_data/data2.json';
    // }

    // console.log(url);

    return this.http.get(this.DB_ENDPOINT + 'spi2/sensor_list_outdoor_daily?sensor_date=' + dataDate + '&&sensor_time=' + datatime)
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  // indoor data
  getDataIndoor(): any {
    return this.http.get(this.DB_ENDPOINT + "spi2/sensor_list_indoor_all").pipe(
      map((response: Response) => response),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

}

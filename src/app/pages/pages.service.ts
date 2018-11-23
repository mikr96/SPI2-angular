import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PagesService {
  DB_ENDPOINT: string = "http://10.44.11.80:1880/";
  csvUrl = "src/assets/data.json";
  alertUrl = "src/assets/alert.json";
  pathUrl = "src/assets/path.json";
  constructor(private http: HttpClient) {}
  data$: Object;
  //indoor data

  getTemp(): any {
    return new Promise((resolve, reject) => {
      this.http.get(this.csvUrl).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getDataIndoor(): any {
    return this.http.get(this.DB_ENDPOINT + "spi2/sensor_list_indoor_all").pipe(
      map((response: Response) => response),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  getAlert(): any {
    return this.http.get(this.alertUrl);
  }

  getPath(): any {
    return this.http.get(this.pathUrl);
  }

  // getSensorList(): any {
  //   return new Promise((resolve, reject) => {
  //     this.http.get("src/assets/outdoor.json").subscribe(
  //       data => {
  //         resolve(data);
  //       },
  //       error => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PagesService {
  csvUrl = "src/assets/data.json";
  alertUrl = "src/assets/alert.json";
  pathUrl = "src/assets/path.json";
  constructor(private http: HttpClient) {}
  data$: Object;
  //indoor data

  getTemp(url: string): any {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  getAlert(): any {
    return this.http.get(this.alertUrl);
  }

  getPath(): any {
    return this.http.get(this.pathUrl);
  }

  // createDb() {
  //   const paths = [
  //     {
  //       id: 2,
  //       lat: "2.931179",
  //       lng: "101.659292",
  //       temp: "35.7",
  //       lastUpdate: "15/10/2018 04:08:53 PM",
  //       pic: "Mira"
  //     },
  //     {
  //       id: 3,
  //       lat: "2.931179",
  //       lng: "101.659292",
  //       temp: "35.7",
  //       lastUpdate: "15/10/2018 04:08:53 PM",
  //       pic: "Fara"
  //     },
  //     {
  //       id: 4,
  //       lat: "2.931179",
  //       lng: "101.659292",
  //       temp: "35.7",
  //       lastUpdate: "15/10/2018 04:08:53 PM",
  //       pic: "Syahirah"
  //     },
  //     {
  //       id: 5,
  //       lat: "2.931179",
  //       lng: "101.659292",
  //       temp: "35.7",
  //       lastUpdate: "15/10/2018 04:08:53 PM",
  //       pic: "Amy"
  //     },
  //     {
  //       id: 6,
  //       lat: "2.931179",
  //       lng: "101.659292",
  //       temp: "35.7",
  //       lastUpdate: "15/10/2018 04:08:53 PM",
  //       pic: "Aliya"
  //     }
  //   ];

  //   return { paths };
  // }

  // genId(paths: Path[]): number {
  //   return paths.length > 0 ? Math.max(...paths.map(path => path.id)) + 1 : 11;
  // }
}

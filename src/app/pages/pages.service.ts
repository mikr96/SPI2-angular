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

  getAlert(): any {
    return this.http.get(this.alertUrl);
  }

  getPath(): any {
    return this.http.get(this.pathUrl);
  }

  getSensorList(): any {
    return new Promise((resolve, reject) => {
      this.http.get("src/assets/outdoor.json").subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}

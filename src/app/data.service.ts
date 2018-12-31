import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, Response } from "@angular/http";
import { map, filter, switchMap, catchError, observeOn } from "rxjs/operators";
import { Observable } from "rxjs";
import { Path } from "./pages/path-management/path.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  OIP_ENDPOINT: string = "https://api.oip.tm.com.my/app/t/tmrnd.com.my/";
  DB_ENDPOINT: string = "http://10.44.42.87:1882/";

  constructor(private http: HttpClient) {}

  // App login check via LDAP Authentication
  loginOip(credentials: any) {
    let headers = new HttpHeaders({
      Authorization: "Bearer ee07dab5-ec1d-3346-8d6b-9a194d9bbf4e"
    });
    var url =
      this.OIP_ENDPOINT +
      "ldap/1.0/ldapauth?username=" +
      credentials.username +
      "&password=" +
      credentials.password;
    return this.http
      .post(url, JSON.stringify(credentials), { headers: headers })
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getDataDate(): any {
    return this.http.get(this.DB_ENDPOINT + "spi2/sensor_outdoor_dates").pipe(
      map((response: Response) => response),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  getTimeDate(dateString: string, pathId: any): any {
    return this.http
      .get(
        this.DB_ENDPOINT +
          "spi2/sensor_list_outdoor_daily?path_id=" +
          pathId +
          "&sensor_date=" +
          dateString
      )
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  // Heatmap data
  getSensorList(pathId: any): any {
    return this.http
      .get(
        this.DB_ENDPOINT + "spi2/sensor_list_outdoor_daily?path_id=" + pathId
      )
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getFullList(dateString: string): any {
    return this.http
      .get(
        this.DB_ENDPOINT +
          "spi2/sensor_list_outdoor_daily?sensor_date=" +
          dateString
      )
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

  getPath(): any {
    return this.http.get(this.DB_ENDPOINT + "spi2/path_list").pipe(
      map((response: Response) => response),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  getPathCoord(path: String): any {
    return this.http
      .get(this.DB_ENDPOINT + "spi2/sensor_outdoor_time?path=" + path)
      .pipe(
        map((response: Response) => response),
        catchError(error => {
          return Observable.throw(error);
        })
      );
  }

  getPaths(): any {
    return this.http.get<Path[]>(this.DB_ENDPOINT + "spi2/path_list");
  }

  getPathById(id: number) {
    return this.http.get<Path>(
      this.DB_ENDPOINT + "spi2/path_list?path_id=" + id
    );
  }

  createPath(path: Path) {
    return this.http.post(this.DB_ENDPOINT + "spi2/path_add", path);
  }

  updatePath(path: Path) {
    return this.http.post(this.DB_ENDPOINT + "spi2/path_edit", path);
  }

  deletePath(path : Path) {
    return this.http.post(this.DB_ENDPOINT + "spi2/path_delete", path);
  }
}

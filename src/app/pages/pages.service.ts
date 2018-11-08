import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers, Response } from "@angular/http";
import { map, filter, switchMap, catchError, observeOn } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PagesService {
  csvUrl = "src/assets/data.json";
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
    // this.data$ = this.http
    //   .get(this.csvUrl)
    //   .pipe(map((response: any) => response.json()));
    // console.log(this.data$);
  }
}
// .pipe(map(res => res.json()))
// .subscribe(data => (data = data))

// {
//   return new Promise(resolve => {
//     this.http
//       .get("src/assets/demo-Results.csv", { responseType: "text" })
//       .subscribe((data: any) => {
//         resolve(data);
//         console.log("data dah amik");
//       });
//   });
// }

// {
//   this.http
//     .get("src/assets/demo-Results.csv", { responseType: "text" })
//     .subscribe(
//       data => {
//         console.log(data);
//         console.log("data dah amik");
//       },
//       err => {
//         console.log("tak maik");
//         console.log(err);
//       }
//     );
// }

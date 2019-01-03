import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Path } from "./path.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-path-management",
  templateUrl: "./path-management.component.html",
  styleUrls: ["./path-management.component.scss"]
})
export class PathManagementComponent implements OnInit {
  paths: Path[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getPaths().subscribe(data => {
      this.paths = data.data;
      console.log(this.paths);
    });
  }

  deletePath(paths: Path): void {
    //var id = { path_id: paths.path_id };
    this.dataService.deletePath(paths).subscribe(data => {
      this.paths = this.paths.filter(u => u !== paths);
    });
  }

  editPath(path: Path): void {
    localStorage.removeItem("editPathId");
    localStorage.setItem("editPathId", path.path_id.toString());
    localStorage.removeItem("editPathName");
    localStorage.setItem("editPathName", path.path_name);
    localStorage.removeItem("editPathDesc");
    localStorage.setItem("editPathDesc", path.path_desc);
    this.router.navigate(["edit-path"]);
  }

  addPath(): void {
    this.router.navigate(["add-path"]);
  }
}

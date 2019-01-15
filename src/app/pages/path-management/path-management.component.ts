import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service"; //import data service to use get post method
import { Path } from "./path.model"; //import class path
import { Router } from "@angular/router"; //import router to enables page routing

@Component({
  selector: "app-path-management",
  templateUrl: "./path-management.component.html",
  styleUrls: ["./path-management.component.scss"]
})
export class PathManagementComponent implements OnInit {
  paths: Path[];

  constructor(private dataService: DataService, private router: Router) {}

  /* Run After Page Initialize */
  ngOnInit() {
    this.dataService.getPaths().subscribe(data => {
      this.paths = data.data; // Initialize path details
    });
  }

  /* Function triggers, after user click button 'delete' */
  deletePath(paths: Path): void {
    //var id = { path_id: paths.path_id };
    this.dataService.deletePath(paths).subscribe(data => {
      this.paths = this.paths.filter(u => u !== paths); // Delete selected path without refreshing the page
    });
  }

  /* Function triggers, after user click button 'edit' */
  editPath(path: Path): void {
    localStorage.removeItem("editPathId"); //Create storage editpathid
    localStorage.setItem("editPathId", path.path_id.toString()); //Set storage editpathid
    localStorage.removeItem("editPathName"); //Create storage editpathname
    localStorage.setItem("editPathName", path.path_name); //Set storage editpathname
    localStorage.removeItem("editPathDesc"); //Create storage editpathdesc
    localStorage.setItem("editPathDesc", path.path_desc); //Set storage editpathdesc
    this.router.navigate(["edit-path"]); //Redirect page to Edit Path Form
  }

  /* Function triggers, after user click button 'add' */
  addPath(): void {
    this.router.navigate(["add-path"]); //Redirect page to Add Path Form
  }

  /* Function triggers, after user click button 'Sensor Management' */
  goToSensorManagement(path: Path) {
    localStorage.removeItem("editPathName"); //Create storage editpathname
    localStorage.setItem("editPathName", path.path_name); //Set storage editpathid
    localStorage.removeItem("editPathId"); //Create storage editpathid
    localStorage.setItem("editPathId", path.path_id); //Set storage editpathid
    this.router.navigate(["sensor-management"]); //Redirect page to Sensor Management
  }
}

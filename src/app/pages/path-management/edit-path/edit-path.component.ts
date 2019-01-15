import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; //import router
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //import form builder
import { DataService } from "src/app/data.service"; //import data service
import { Path } from "../path.model"; //import class path

@Component({
  selector: "app-edit-path",
  templateUrl: "./edit-path.component.html",
  styleUrls: ["./edit-path.component.scss"]
})
export class EditPathComponent implements OnInit {
  path: Path;
  editForm: FormGroup;
  pathName: String;
  pathDesc: String;
  pathId: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  /* Runs on page initialize */
  ngOnInit() {
    /* Get Item from Storage */
    let pathId = localStorage.getItem("editPathId");
    this.pathId = localStorage.getItem("editPathId");
    this.pathName = localStorage.getItem("editPathName");
    this.pathDesc = localStorage.getItem("editPathDesc");

    if (!pathId) {
      alert("Invalid action.");
      this.router.navigate(["path-management"]);
      return;
    }

    let pathDesc;
    let pathName;

    /* Just in case if user did not update the parameter, then the program will save the previous parameter  */
    var inputName = (<HTMLInputElement>document.getElementById("path_name"))
      .value;
    if (inputName == "") {
      pathName = this.pathName;
    } else {
      pathName = inputName;
    }

    var inputDesc = (<HTMLInputElement>document.getElementById("path_desc"))
      .value;
    if (inputDesc == "") {
      pathDesc = this.pathDesc;
    } else {
      pathDesc = inputDesc;
    }

    /* FormBuilder is a tool where it help us delivering a json file format */
    /* path_id, path_name, path_desc are formcontrolname */
    /* It help us group the parameters and you can see the result by adding a new line, console.log(this.editForm.value) */
    this.editForm = this.formBuilder.group({
      path_id: [Number(parseInt(pathId))],
      path_name: [pathName, Validators.required],
      path_desc: [pathDesc, Validators.required]
    });
  }

  /* Function triggers, after user click button 'update' */
  onSubmit() {
    this.dataService.updatePath(this.editForm.value).subscribe(data => {
      this.router.navigate(["path-management"]); //redirect page to Path Management Page
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { Path } from "../path.model";

@Component({
  selector: "app-edit-path",
  templateUrl: "./edit-path.component.html",
  styleUrls: ["./edit-path.component.scss"]
})
export class EditPathComponent implements OnInit {
  path: Path;
  editForm: FormGroup;
  pathName : String;
  pathDesc : String;
  pathId : String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    let pathId = localStorage.getItem("editPathId");
    if (!pathId) {
      alert("Invalid action.");
      this.router.navigate(["path-management"]);
      return;
    }

    this.pathId = localStorage.getItem("editPathId");
    this.pathName = localStorage.getItem("editPathName");
    this.pathDesc = localStorage.getItem("editPathDesc");
    let pathDesc;
    let pathName;

    var inputName = (<HTMLInputElement>document.getElementById('path_name')).value;
    if(inputName == "") {
      pathName = this.pathName;}
      else {
    pathName = inputName;}

    var inputDesc = (<HTMLInputElement>document.getElementById('path_desc')).value;
    if(inputDesc == "") {
      pathDesc = this.pathDesc;}
      else {
    pathDesc = inputDesc;}

    this.editForm = this.formBuilder.group({
      path_id: [Number(parseInt(pathId))],
      path_name: [pathName, Validators.required],
      path_desc: [pathDesc, Validators.required],
    });
  }

  onSubmit() {
    this.dataService.updatePath(this.editForm.value).subscribe(data => {
      this.router.navigate(["path-management"]);
    });
  }
}

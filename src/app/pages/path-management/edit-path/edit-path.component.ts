import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
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
    console.log(pathId);
    this.editForm = this.formBuilder.group({
      path_id: [Number(parseInt(pathId))],
      path_name: ["", Validators.required],
      path_desc: ["", Validators.required]
    });
  }

  // onSubmit() {
  //   console.log(this.editForm.value);
  //   this.dataService
  //     .updatePath(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(["path-management"]);
  //       },
  //       error => {
  //         alert(error);
  //       }
  //     );
  // }

  onSubmit() {
    this.dataService.updatePath(this.editForm.value).subscribe(data => {
      console.log(this.editForm.value);
      this.router.navigate(["path-management"]);
    });
  }
}

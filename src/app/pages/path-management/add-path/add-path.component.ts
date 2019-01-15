import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-path",
  templateUrl: "./add-path.component.html",
  styleUrls: ["./add-path.component.scss"]
})
export class AddPathComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  addForm: FormGroup;

  /* Runs on page initialize */
  ngOnInit() {
    /* This form builder will generate json file format with input parameters */
    this.addForm = this.formBuilder.group({
      path_name: ["", Validators.required],
      path_desc: ["", Validators.required]
    });
  }

  /* Function triggers after user click button 'save' */
  onSubmit() {
    this.dataService.createPath(this.addForm.value).subscribe(data => {
      this.router.navigate(["path-management"]); //Redirect page to Path Management page
    });
  }
}

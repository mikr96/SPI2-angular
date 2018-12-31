import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { first } from "rxjs/operators";
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

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      path_name: ["", Validators.required],
      path_desc: ["", Validators.required]
    });
  }

  onSubmit() {
    this.dataService.createPath(this.addForm.value).subscribe(data => {
      console.log(this.addForm.value);
      this.router.navigate(["path-management"]);
    });
  }
}

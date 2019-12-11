import { Component, OnInit } from "@angular/core";
import { PoUploadFileRestrictions } from "@portinari/portinari-ui";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  constructor() {}
  restrictions: PoUploadFileRestrictions;
  ngOnInit() {
    this.restrictions = Object.assign({}, this.restrictions, {
      allowedExtensions: [".png", ".jpg", ".jpeg"]
    });
  }
}

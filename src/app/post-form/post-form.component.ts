import { Component, OnInit, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from "events";
import { Post } from "../post";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  constructor() {}

  newPost: Post = { title: "", thought: "" };

  @Output()
  submitted = new EventEmitter<Post>();
  submitPost() {
    this.submitted.emit(this.newPost);
  }

  ngOnInit() {}
}

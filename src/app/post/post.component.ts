import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";
// import { EventEmitter } from "events";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  deleted = new EventEmitter<void>();

  deletePost() {
    this.deleted.emit();
  }

  constructor() {}

  ngOnInit() {}
}

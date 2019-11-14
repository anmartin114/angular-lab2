import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: "Grand Circus", thought: "Grand Circus is cool" },
    { title: "Ritual", thought: "Ritual is a well developed app" },
    { title: "Scott", thought: "Scott rides scooters" }
  ];

  onDelete(index) {
    this.posts.splice(index, 1);
  }

  onSubmit(newPost: Post) {
    this.posts.push(newPost);
  }

  constructor() {}

  ngOnInit() {}
}

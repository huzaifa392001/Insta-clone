import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  comment: boolean = false;
  comments = [1, 2]
  heart: boolean = false;
  bookmark: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  heartClick() {
    this.heart = !this.heart;
  }
  bookmarkClick() {
    this.bookmark = !this.bookmark;
  }
}

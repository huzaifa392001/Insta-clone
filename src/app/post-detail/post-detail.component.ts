import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  comment: boolean = false;
  comments = [1,2,3,4,5,6,7,8,9,10]
  heart: boolean = false;
  bookmark: boolean = false;
  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  heartClick() {
    this.heart = !this.heart;
  }
  bookmarkClick() {
    this.bookmark = !this.bookmark;
  }

  back() {
    this.location.back();
  }
}

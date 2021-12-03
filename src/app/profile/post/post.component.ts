import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  post=[
    {
      'image':'post.jpg'
    },
    {
      'image':'post-2.jpg'
    },
    {
      'image':'post-3.jpg'
    },
    {
      'image':'post-4.jpg'
    },
    {
      'image':'post.jpg'
    },
  ]
}

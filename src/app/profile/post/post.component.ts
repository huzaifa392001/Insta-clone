import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  photo: any = "https://picsum.photos/800/800?random=";
  likes:any = Math.floor((Math.random() *100)+1);
  comments:any = Math.floor((Math.random() *100)+1);
  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.photo);

  }

  post=[1,2,3,4,5,6,7,8,9,10]
}

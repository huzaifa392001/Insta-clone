import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, } from 'swiper';

SwiperCore.use([ Pagination,]);
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post=[1,2,3,4,5]
  comment:boolean= false;
  comments=[1,2]
  heartComment: boolean = false;
  heart: boolean = false;
  bookmark: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {clickable: true},
  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  heartClick(){
      this.heart = !this.heart;
  }
  heartCommentClick(id:any){
      this.heartComment = !this.heartComment;
  }
  bookmarkClick(){
      this.bookmark = !this.bookmark;
  }
  onSlideChange() {
    console.log('slide change');
  }
}

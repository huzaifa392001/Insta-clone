import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, } from 'swiper';
import { HttpService } from '../services/http.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

SwiperCore.use([Pagination,]);
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  commentInput!: FormGroup;
  post = [1, 2, 3, 4, 5]
  comment: boolean = false;
  comments = [
    {
      'name':'',
      'comment' : ''
    }
  ];
  heartComment: boolean = false;
  heart: boolean = false;
  bookmark: boolean = false;
  user: any;
  photo: any = "https://picsum.photos/800/800";

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formBuild()
    this.getData();
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: { clickable: true },
  };

  getData() {
    this.httpService.get('?results=10').subscribe((res: any) => {
      this.user = res.results;
      console.log(this.user);
    })
  }

  formBuild(){
    this.commentInput=this.fb.group({
      commentField:["", Validators.required],
    })
  }

  commentFunction(){
    if(this.commentInput.value){

    }
  }

  onSwiper(swiper: any) {
  }
  heartClick() {
    this.heart = !this.heart;
  }
  heartCommentClick(id: any) {
    this.heartComment = !this.heartComment;
  }
  bookmarkClick() {
    this.bookmark = !this.bookmark;
  }
  onSlideChange() {
  }
}

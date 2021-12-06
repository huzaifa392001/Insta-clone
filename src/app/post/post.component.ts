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
  comments = [1,2,3,4];
  heartComment: boolean = false;
  heart: boolean = false;
  bookmark: boolean = false;
  user: any;
  photo: any = "https://picsum.photos/800/800";
  sum:any = 10;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formBuild()
    this.getData(this.sum);
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: { clickable: true },
  };

  getData(num:any) {
    this.httpService.get('?results='+num).subscribe((res: any) => {
      this.user = res.results;
      console.log(this.user);
    })
  }

  formBuild(){
    this.commentInput=this.fb.group({
      commentField:["", Validators.required],
    })
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.sum += 10
    this.getData(this.sum)
    console.log(this.user)
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

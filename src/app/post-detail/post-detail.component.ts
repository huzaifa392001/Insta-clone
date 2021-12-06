import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  comment: boolean = false;
  comments = [1,2,3,4];
  heartComment: boolean = false;
  heart: boolean = false;
  bookmark: boolean = false;
  user: any;
  users:any;
  photo: any = "https://picsum.photos/800/800";
  constructor(
    private location : Location,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getMultipleData();

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

  getMultipleData() {
    this.httpService.get('?results=10').subscribe((res: any) => {
      this.users = res.results;
      console.log(this.users);
    })
  }

  getData() {
    this.httpService.get('').subscribe((res: any) => {
      this.user = res.results[0];
    })
  }
}

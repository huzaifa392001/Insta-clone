import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notification=[1,2,3,4,5,6,7,8,9,10]
  menu = false;
  noti = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNoti(){
    this.noti = !this.noti;
  }

  toggleMenu(){
    this.menu = !this.menu;
  }
}

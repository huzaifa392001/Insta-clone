import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any;
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpService.get('').subscribe((res: any) => {
      this.user = res.results[0];
    })
  }

}

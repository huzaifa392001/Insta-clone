import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(
    private httpService: HttpService
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

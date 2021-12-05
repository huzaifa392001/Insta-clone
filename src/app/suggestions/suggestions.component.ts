import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  user: any;
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpService.get('?results=5').subscribe((res: any) => {
      this.user = res.results;
    })
  }

}

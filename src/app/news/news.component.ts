import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';

@Component({
  selector: 'app-news',
  providers: [CovidApiService],
  templateUrl: './news.component.html',

})
export class NewsComponent implements OnInit {
  public articles: any;

  constructor(public apiService: CovidApiService) { }

  ngOnInit(): void {
   // this.getCovid();
  }

  getCovid(): any {
    this.apiService.getNews().subscribe((data) => {
      console.log(data); this.articles = data;
    });

    return this.articles;
  }
}

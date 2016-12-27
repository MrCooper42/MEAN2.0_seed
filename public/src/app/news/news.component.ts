import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  public news: Array<NewsComponent> = [];

  constructor(newsService: NewsService) {

    newsService.getPulse()
      .subscribe((res) => {
        console.log(res, "i am here");
        this.news = res.body;
        // news => this.news = news,
      })
   }

  // ngOnInit() {
  // }

}

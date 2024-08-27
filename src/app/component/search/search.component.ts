import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  articles: any[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchTerm) {
      this.newsApiService.searchNews(this.searchTerm).subscribe((data: any) => {
        this.articles = data.articles;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  politicsArticles: any[] = [];
  popularPosts: any[] = [];
  currentIndex: number = 0;
  slides: HTMLElement[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {

    this.newsApiService.getCategoryNews('politics').subscribe((data: any) => {
      this.politicsArticles = data.articles.slice(0, 9);
    });


    this.newsApiService.getTopHeadlines().subscribe((data: any) => {
      this.popularPosts = data.articles.slice(3, 7);
    });

  }
  handleImageError(event: any): void {
    event.target.src = '/assets/default.jpg'; // Varsayılan görselin yolunu buraya yazın
  }
}
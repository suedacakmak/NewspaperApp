import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editorsPickArticles: any[] = [];
  trendingArticles: any[] = [];
  politicsArticles: any[] = [];
  businessArticles: any[] = [];
  recentNews: any[] = [];
  popularPosts: any[] = [];
  currentIndex: number = 0;
  slides: HTMLElement[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.newsApiService.getTopHeadlines().subscribe((data: any) => {
      this.editorsPickArticles = data.articles.slice(0, 3);
      this.trendingArticles = data.articles.slice(3, 6);
    });

    this.newsApiService.getCategoryNews('politics').subscribe((data: any) => {
      this.politicsArticles = data.articles.slice(0, 3);
    });
    

    this.newsApiService.getCategoryNews('business').subscribe((data: any) => {
      this.businessArticles = data.articles.slice(0, 3);
    });

    this.newsApiService.getTopHeadlines().subscribe((data: any) => {
      this.recentNews = data.articles.slice(0, 3);
      this.popularPosts = data.articles.slice(3, 6);
    });

    // Initialize the slider
    const slider = document.querySelector('.slider') as HTMLElement;
    this.slides = Array.from(document.querySelectorAll('.slide') as NodeListOf<HTMLElement>);

    document.querySelector('.next')!.addEventListener('click', () => {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateSlider(slider);
    });

    document.querySelector('.prev')!.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.slides.length - 1;
      }
      this.updateSlider(slider);
    });
  }

  updateSlider(slider: HTMLElement) {
    slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
  handleImageError(event: any): void {
    event.target.src = '/assets/default.jpg'; // Varsayılan görselin yolunu buraya yazın
  }
}



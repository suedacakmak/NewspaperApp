import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey = '90cda0cb47214411a475dedf1870e10e';
  private baseUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.baseUrl}?sources=bbc-news&apiKey=${this.apiKey}`);
  }

  getCategoryNews(category: string, country: string = 'tr'): Observable<any> {
    return this.http.get(`${this.baseUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`);
  }

  searchNews(query: string, country: string = 'tr'): Observable<any> {
    return this.http.get(`${this.baseUrl}?country=${country}&q=${query}&apiKey=${this.apiKey}`);
    
  }
}

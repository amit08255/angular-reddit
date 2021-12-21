import { Component } from '@angular/core';
import { Article } from './article/article.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
      this.articles = [
          new Article('Angular', 'https://angular.io', 10),
          new Article('Fullstack', 'https://fullstack.io', 3),
          new Article('React', 'https://react.org', 1),
      ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
      this.articles.push(new Article(title.value, link.value));
      title.value = '';
      link.value = '';
      return false;
  }

  sortedArticles(): Article[] {
      return this.articles.sort((a, b) => b.votes - a.votes);
  }
}

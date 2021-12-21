import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    @Input() article: Article;

  constructor() {
      this.article = new Article(
          'Angular', 'https://angular.io'
      )
  }

  voteUp() {
      this.article.voteUp();
      return false;
  }

  voteDown() {
      this.article.voteDown();
      return false;
  }

  ngOnInit(): void {
  }

}

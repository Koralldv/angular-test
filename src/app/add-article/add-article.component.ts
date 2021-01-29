import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../shared/articles.service'
import {Article} from '../shared/articles.service'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  isOpen = false
  title: string = ''
  content: string = ''

  //открыть попап
  addArticle() {
    this.isOpen = true
  }

  //закрыть попап
  cancelArticle() {
    this.isOpen = false
  }

  //сохранить новую статью
  saveArticle() {
    const articles: Article = {
      id: this.articlesService.articles[this.articlesService.articles.length-1].id + 1,
      title: this.title,
      content: this.content
    }
    
    if(this.title && this.content){
      this.articlesService.saveArticle(articles)
      this.title = ''
      this.content = ''
      this.cancelArticle()
    }
  }
}

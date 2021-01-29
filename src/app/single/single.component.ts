import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../shared/articles.service'
import {Article} from '../shared/articles.service'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
  }
  
  id: number = this.articlesService.articles[this.articlesService.index].id 
  title: string = this.articlesService.articles[this.articlesService.index].title
  content: string = this.articlesService.articles[this.articlesService.index].content

  editArticle() {
    const articles: Article = {
      id: this.id,
      title: this.title,
      content: this.content
    }

    if(this.title && this.content){
      this.articlesService.editArticle(articles)
    }
  }

  deleteArticle() {
     this.articlesService.deleteArticle(this.id -1)
  }

}

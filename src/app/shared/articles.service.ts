import { Injectable } from "@angular/core";

export interface Article {
  id: number
  title: string
  content: string
}

@Injectable({providedIn: 'root'})
export class ArticlesService {
    public articles: Article[] = [
        {id : 1, title : 'Title 1', content: 'Lorem ipsum dolor sit amet articlesadipisicing elit. Laborum, aut!'},
        {id : 2, title : 'Title 2', content: 'Lorem ipsum dolor sit amet consectetur articleselit. Laborum, aut!'},
        {id : 3, title : 'Title 3', content: 'Lorem ipsum dolor sit amet articlesadipisicing elit. Laborum, aut!'},
        {id : 4, title : 'Title 4', content: 'Lorem ipsum dolor sit amet articlesadipisicing elit. Laborum, aut!'},
        {id : 5, title : 'Title 5', content: 'Lorem ipsum dolor sit amet articlesadipisicing elit. Laborum, aut!'},
        {id : 6, title : 'Title 6', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut!'},
        {id : 7, title : 'Title 7', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut!'},
        {id : 8, title : 'Title 8', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut!'},
        {id : 9, title : 'Title 9', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut!'},
    ]

    public index:number = 1;

    //сохранение статьи
    saveArticle(article: Article) {
    this.articles.push(article)     
  }

    //правка статьи
    editArticle(article: Article) {
      this.articles[this.index].id = article.id
      this.articles[this.index].title = article.title  
      this.articles[this.index].content = article.content 
    }

    //получение id
    singleCreate(index:number) {
      this.index = index 
    }

    //удаление статьи
    deleteArticle(index:number) {
      if (confirm("Удалить?")) {
        this.articles = this.articles.filter(t => t.id -1 !== index)
      } 
  }
}
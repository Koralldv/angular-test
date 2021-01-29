import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../shared/articles.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
  }
  openSingle(index:number) {
    this.articlesService.singleCreate(index)
  }

}

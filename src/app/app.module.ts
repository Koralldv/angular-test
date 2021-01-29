import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'single', component: SingleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddArticleComponent,
    HomeComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

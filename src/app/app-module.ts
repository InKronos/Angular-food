import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { RmNgStarRatingComponent } from 'rm-ng-star-rating';
import { Search } from './search/search';
import { FormsModule } from '@angular/forms';
import { Tags } from './tags/tags';
import { FoodPage } from './food-page/food-page';


@NgModule({
  declarations: [
    App,
    Header,
    Home,
    Search,
    Tags,
    FoodPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RmNgStarRatingComponent,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

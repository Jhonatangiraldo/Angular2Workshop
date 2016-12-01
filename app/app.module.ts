import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Rating }  from './rating/rating.component';
import { CardMovieComponent }  from './card-movie/card-movie.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
	imports:      [ 
	BrowserModule,
	AppRoutingModule 
	],
	declarations: [ 
	AppComponent, 
	Rating,
	CardMovieComponent 
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
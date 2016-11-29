import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserProfileComponent }  from './user-profile.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ 
	AppComponent, 
	UserProfileComponent 
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
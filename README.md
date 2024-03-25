# warcraft-simplified-game
full game like Warcraft with Angular


ng new warcraft-simplified-game

npm install @angular/animations @angular/platform-browser/animations three --save

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreeModule } from 'three';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

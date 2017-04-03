import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TrumbowygModule} from "ng2-lazy-trumbowyg";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TrumbowygModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



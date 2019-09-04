import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

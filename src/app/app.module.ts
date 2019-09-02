import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

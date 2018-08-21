import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { Error404Component } from './pages/error404/error404.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Error404Component,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

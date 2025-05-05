import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {RouterModule} from '@angular/router';
import {MaterialModule} from './shared/material.module';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],

})
export class AppModule {}

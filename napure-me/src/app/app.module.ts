import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { NgxTranslateModule } from './modules/translate/translate.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, NgxTranslateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

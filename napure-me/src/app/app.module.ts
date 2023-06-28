import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { NgxTranslateModule } from './modules/translate/translate.module';
import { AboutComponent } from './components/pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WholesaleComponent } from './components/pages/wholesale/wholeslae.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WholesaleComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        NgxTranslateModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

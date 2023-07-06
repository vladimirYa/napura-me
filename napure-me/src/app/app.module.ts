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
import { BecomeAMasterComponent } from './components/pages/become-a-master/become-a-master.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactFormComponent } from './components/common/contact-form/contact-form.component';
import { ContactDialogComponent } from './components/common/dialog/contact-dialog.component';
import { LangComponent } from './components/common/lang/lang.component';
import { LangDialogComponent } from './components/common/lang-dialog/lang-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AdminComponent } from './components/pages/admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WholesaleComponent,
        BecomeAMasterComponent,
        ContactFormComponent,
        ContactDialogComponent,
        LangComponent,
        LangDialogComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        NgxTranslateModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}

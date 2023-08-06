import { NgModule, TransferState } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';

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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CertDialogComponent } from './components/common/cert-dialog/cert-dialog.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductComponent } from './components/pages/catalog/product/product.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './services/translate-loaders/translate-loader.browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { Meta } from '@angular/platform-browser';
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
        CertDialogComponent,
        CatalogComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        RouterModule,
        HttpClientModule,
        TransferHttpCacheModule,
        AppRoutingModule,
        NgxTranslateModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateBrowserLoaderFactory,
                deps: [HttpClient, TransferState],
            },
        }),
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
    ],
    providers: [ApiService, provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}

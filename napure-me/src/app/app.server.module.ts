import { NgModule, TransferState } from '@angular/core';
import {
    ServerModule,
    ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './services/translate-loaders/translate-loader.server';
import { UNIVERSAL_LOCAL_STORAGE } from '@ng-web-apis/universal';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ServerTransferStateModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateServerLoaderFactory,
                deps: [TransferState],
            },
        }),
    ],
    providers: [UNIVERSAL_LOCAL_STORAGE],
    bootstrap: [AppComponent],
})
export class AppServerModule {}

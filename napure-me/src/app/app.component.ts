import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    static isBrowser = new BehaviorSubject<boolean>(false);

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.addLangs(['en', 'me', 'ru']);
        translate.use('en');
    }

    changeTome() {
        this.translate.use('me');
    }
}

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    static isBrowser = new BehaviorSubject<boolean>(false);

    constructor(
        private translate: TranslateService,
        private meta: Meta,
        private titleService: Title
    ) {
        translate.setDefaultLang('en');
        translate.addLangs(['en', 'me', 'ru']);
        translate.use('en');
    }

    ngOnInit(): void {
        this.titleService.setTitle('NAPURA - Hair products in Montenegro');
        this.meta.addTag({
            name: 'description',
            content:
                'Napura already in Montenegro! Napura is a proffesional hair care products company designed and manufactured entirely in Italy with only high-quality materials and traditional craftmanship.',
        });
    }

    changeTome() {
        this.translate.use('me');
    }
}

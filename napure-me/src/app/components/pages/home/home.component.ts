import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    langs: string[] = ['cg', 'en', 'ru'];
    currentLang: string = 'en';

    headerItems = [
        'header.about',
        'header.catalog',
        'header.becomeAMaster',
        'header.wholesale',
    ];
    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
        this.translate.addLangs(this.langs);
        this.translate.use('en');
    }

    selectLang(lang: string): void {
        this.translate.use(lang);
        this.currentLang = lang;
    }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { langs } from './langs';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-lang',
    templateUrl: './lang.component.html',
    styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
    @Output() onSelectLang = new EventEmitter();

    langs: string[] = langs;
    currentLang: string = 'en';

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.translate.onLangChange.subscribe((lang) => {
            this.currentLang = lang.lang;
        });
    }

    selectLang(lang: string) {
        this.currentLang = lang;
        this.translate.use(lang);

        this.onSelectLang.emit(lang);
    }
}

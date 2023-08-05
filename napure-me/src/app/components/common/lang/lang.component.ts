import {
    Component,
    EventEmitter,
    Inject,
    OnInit,
    Output,
    PLATFORM_ID,
} from '@angular/core';
import { langs } from './langs';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-lang',
    templateUrl: './lang.component.html',
    styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
    @Output() onSelectLang = new EventEmitter();

    langs: string[] = langs;
    currentLang: string = 'en';

    constructor(
        private translate: TranslateService,
        @Inject(LOCAL_STORAGE) public localStorage: Storage,
        @Inject(PLATFORM_ID) private readonly _platformId: Object
    ) {}

    ngOnInit(): void {
        this.translate.onLangChange.subscribe((lang) => {
            this.currentLang = lang.lang;
        });
    }

    selectLang(lang: string) {
        if (isPlatformBrowser(this._platformId) === true) {
            this.currentLang = lang;
            this.translate.use(lang);
            this.localStorage.setItem('l', lang);
            this.onSelectLang.emit(lang);
        }
    }
}

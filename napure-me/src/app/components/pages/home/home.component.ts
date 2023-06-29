import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

interface HeaderItem {
    id: string;
    labelKey: string;
    isActive: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    langs: string[] = ['cg', 'en', 'ru'];
    currentLang: string = 'en';

    headerItems: HeaderItem[] = [
        {
            id: 'home',
            labelKey: 'header.home',
            isActive: false,
        },
        {
            id: 'master',
            labelKey: 'header.becomeAMaster',
            isActive: false,
        },
        {
            id: 'wholesale',
            labelKey: 'header.wholesale',
            isActive: false,
        },
        {
            id: 'about',
            labelKey: 'header.about',
            isActive: false,
        },
    ];
    constructor(
        private translate: TranslateService,
        private router: Router,
        private ar: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
        this.translate.addLangs(this.langs);
        this.translate.use('en');
        this.ar.queryParams.subscribe((params) => {
            if (params['page']) {
                this.syncActiveHItem(params['page']);
                this.syncTabs(params['page']);
            } else {
                this.syncActiveHItem('home');
                this.syncTabs('home');
            }
        });
    }

    selectLang(lang: string): void {
        this.translate.use(lang);
        this.currentLang = lang;
    }

    selectTab(id: string): void {
        this.router.navigate(['/home'], { queryParams: { page: id } });
        this.syncActiveHItem(id);
        this.syncTabs(id);
    }

    syncActiveHItem(id: string) {
        this.headerItems.forEach((item: HeaderItem) => {
            item.isActive = item.id === id;
        });
    }

    syncTabs(id: string) {
        const tabs = document.querySelectorAll('[data-tab]');

        tabs.forEach((tab) => {
            if (tab.attributes['data-tab' as any].nodeValue === id) {
                tab.classList.add('fadeIn');
            } else {
                tab.classList.remove('fadeIn');
            }
        });
    }
    goToMaster() {
        this.router.navigate(['/home'], { queryParams: { page: 'master' } });
    }
}

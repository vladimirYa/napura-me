import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    OnInit,
    PLATFORM_ID,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { langs } from '../../common/lang/langs';
import { MatDialog } from '@angular/material/dialog';
import { LangDialogComponent } from '../../common/lang-dialog/lang-dialog.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { Application } from '@splinetool/runtime';

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
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel') carsousel: ElementRef;
    @ViewChild('header') header: ElementRef;
    @ViewChild('kastyl') kastyl: ElementRef;
    @ViewChild('conva') conva: ElementRef;
    langs: string[] = langs;
    isMobileMenuOpened: boolean = false;

    currentLang: string = 'en';
    isHeaderDark: boolean = false;
    sections: any = [];
    sectionLimits: any[] = [];
    activeHeaderItem: HeaderItem = {
        id: 'home',
        labelKey: 'header.home',
        isActive: false,
    };
    headerItems: HeaderItem[] = [
        {
            id: 'home',
            labelKey: 'header.home',
            isActive: true,
        },
        {
            id: 'catalog',
            labelKey: 'header.catalog',
            isActive: false,
        },
        {
            id: 'about',
            labelKey: 'header.about',
            isActive: false,
        },

        // {
        //     id: 'master',
        //     labelKey: 'header.becomeAMaster',
        //     isActive: false,
        // },
        {
            id: 'wholesale',
            labelKey: 'header.wholesale',
            isActive: false,
        },
    ];
    constructor(
        private translate: TranslateService,
        private router: Router,
        private dialog: MatDialog,
        private renderer2: Renderer2,
        @Inject(DOCUMENT) private _doc: Document,
        @Inject(LOCAL_STORAGE) public localStorage: Storage,
        @Inject(PLATFORM_ID) private readonly _platformId: Object
    ) {}

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
        this.translate.addLangs(this.langs);
        this.translate.use('en');
        setTimeout(() => {
            if (isPlatformBrowser(this._platformId)) {
                if (!this.localStorage.getItem('l')) {
                    this.dialog.open(LangDialogComponent, {});
                } else {
                    this.translate.use(
                        this.localStorage.getItem('l') as string
                    );
                }
            }
        }, 1000);
    }

    setSectionLimits() {
        setTimeout(() => {
            let bottomSum = 0;
            this.sectionLimits = [
                ...(this._doc.querySelectorAll('[data-section]') as any),
            ].map((section: HTMLElement, index: number) => {
                console.log(section.clientHeight);
                bottomSum += section.clientHeight;
                return {
                    top: section.offsetTop,
                    bottom: bottomSum,
                    id: section.id,
                };
            });
        }, 500);
    }

    ngAfterViewInit(): void {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas as any);
        app.load(
            'https://prod.spline.design/ly87zIVYdGpm5mrO/scene.splinecode'
        ).then(() => {
            app.canvas.style.width = '100%';
            app.canvas.style.height = '100%';
        });

        const carouselEl = this.carsousel.nativeElement;
        this.sections = this._doc.querySelectorAll('[data-section]');

        this.setSectionLimits();
        let unlisten = this.renderer2.listen(carouselEl, 'scroll', (event) => {
            this.isHeaderDark = event.target.scrollTop > 77;
            if (this.isHeaderDark) {
                this.renderer2.addClass(this.header.nativeElement, 'dark');
            } else {
                this.renderer2.removeClass(this.header.nativeElement, 'dark');
            }
            let currentSection = this.sectionLimits.find((section, i) => {
                return (
                    event.target.scrollTop + 77 * (i + 1) >
                        section.top - window.innerHeight * 0.2 &&
                    event.target.scrollTop + 77 * (i + 1) <
                        section.bottom - window.innerHeight * 0.2
                );
            });
            if (currentSection) {
                this.syncActiveHItem(currentSection.id);
            }
        });
    }

    scrollTo(headerItem: HeaderItem) {
        if (this.isMobileMenuOpened) {
            this.isMobileMenuOpened = false;
        }
        this.syncActiveHItem(headerItem.id);
        this.activeHeaderItem = headerItem;
        let section = document.querySelector(
            `[data-section=${headerItem.id}]`
        ) as any;
        this.carsousel.nativeElement?.scrollTo({
            top: section.offsetTop - 77,
            behavior: 'smooth',
        });
    }

    syncActiveHItem(id: string) {
        this.headerItems.forEach((item: HeaderItem) => {
            item.isActive = item.id === id;
        });
    }
    showless(event: any) {
        let catalog = this.headerItems.find((item) => item.id === 'catalog');
        this.scrollTo(catalog as HeaderItem);
        this.setSectionLimits();
    }
    toggleMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
}

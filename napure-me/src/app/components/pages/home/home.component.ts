import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { langs } from '../../common/lang/langs';
import { MatDialog } from '@angular/material/dialog';
import { LangDialogComponent } from '../../common/lang-dialog/lang-dialog.component';

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

    langs: string[] = langs;

    currentLang: string = 'en';
    isHeaderDark: boolean = false;
    sections: any = [];

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
            id: 'about',
            labelKey: 'header.about',
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
    ];
    constructor(
        private translate: TranslateService,
        private router: Router,
        private dialog: MatDialog,
        private renderer2: Renderer2
    ) {}

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
        this.translate.addLangs(this.langs);
        this.translate.use('en');

        if (!localStorage.getItem('l')) {
            this.dialog.open(LangDialogComponent, {});
        } else {
            this.translate.use(localStorage.getItem('l') as string);
        }
    }

    ngAfterViewInit(): void {
        const carouselEl = this.carsousel.nativeElement;
        this.sections = document.querySelectorAll('[data-section]');

        let sectionsLimits = [...this.sections].map(
            (section: HTMLElement, index: number) => {
                return {
                    top: section.offsetTop,
                    bottom: window.innerHeight * (index + 1),
                    id: section.id,
                };
            }
        );

        let unlisten = this.renderer2.listen(carouselEl, 'scroll', (event) => {
            this.isHeaderDark = event.target.scrollTop > 77;
            if (this.isHeaderDark) {
                this.renderer2.addClass(this.header.nativeElement, 'dark');
                this.renderer2.addClass(this.kastyl.nativeElement, 'dark');
            } else {
                this.renderer2.removeClass(this.header.nativeElement, 'dark');
                this.renderer2.removeClass(this.kastyl.nativeElement, 'dark');
            }
            let currentSection = sectionsLimits.find((section, i) => {
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

    goToMaster() {
        this.router.navigate(['/home'], { queryParams: { page: 'master' } });
    }
}

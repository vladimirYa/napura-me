import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IData } from './product/product.component';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
    @Output() showless: EventEmitter<{}> = new EventEmitter();
    isShowMore: boolean = false;
    products: IData[] = [
        {
            name: 'NAPURA T0 ANAGEN POST AMPULES',
            size: '12 x 8ml',
            urlName: 'T0',
        },
        {
            name: 'NAPURA S0 ANAGEN SHAMPOO',
            size: '400ml',
            urlName: 'S0',
        },
        {
            name: 'NAPURA T1 PURIFY PRE',
            size: '12 x 8ml',
            urlName: 'T1',
        },
        {
            name: 'NAPURA S4 PRIME SHAMPOO',
            size: '400ml',
            urlName: 'S4',
        },
        {
            name: 'NAPURA T4 PRIME POST AMPULES',
            size: '12 x 8ml',
            urlName: 'T4',
        },
        {
            name: 'NAPURA D4 PRIME DAY SYSTEM',
            size: '75ml',
            urlName: 'D4',
        },
    ];
    public products2: IData[] = [
        {
            name: 'NAPURA O8 NUTRY OIL MASK',
            size: '400ml',
            urlName: 'O8',
        },
        {
            name: 'NAPURA S8 NUTRY SHAMPOO',
            size: '400ml',
            urlName: 'S8',
        },
        {
            name: 'C8 CONDITIONER CREAM',
            size: '200ml',
            urlName: 'C8',
        },
        {
            name: 'NAPURA S9 RIKEIR SHAMPOO',
            size: '400ml',
            urlName: 'S9',
        },
        {
            name: 'NAPURA C9 RIKEIR CONDITIONER MASK',
            size: '200ml',
            urlName: 'C9',
        },
        {
            name: 'NAPURA K9 RIKEIR KERA-FILLER',
            size: '100ml',
            urlName: 'K9',
        },
        {
            name: 'NAPURA M9 RIKEIR PRE AMPULES',
            size: '5 x 30ml',
            urlName: 'M9',
        },
    ];
    ngOnInit(): void {}

    toggleShowMore() {
        if (this.isShowMore) {
            this.showless.emit({});
        }
        this.isShowMore = !this.isShowMore;
    }
}

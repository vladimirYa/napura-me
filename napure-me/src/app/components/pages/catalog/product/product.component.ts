import { Component, Input, OnInit } from '@angular/core';
export interface IData {
    name: string;
    size: string;
    urlName: string;
}
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() data: IData;
    ngOnInit(): void {}
}

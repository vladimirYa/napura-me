import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    product: string;
    productId: number;
    constructor(
        public ar: ActivatedRoute,
        private meta: Meta,
        private titleService: Title
    ) {}

    ngOnInit(): void {
        this.ar.params.subscribe((params) => {
            console.log(params);
            this.productId = params['name'];
        });
        this.titleService.setTitle(`NAPURA - ${this.productId}`);
        this.meta.addTag({
            name: 'description',
            content:
                'Napura already in Montenegro! Napura is a proffesional hair care products company designed and manufactured entirely in Italy with only high-quality materials and traditional craftmanship.',
        });
    }
}

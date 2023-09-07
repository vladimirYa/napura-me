import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Group, Product, catalog } from '../catalog/catalog';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;
    productId: number;
    catalog: Group[] = catalog;
    constructor(
        public ar: ActivatedRoute,
        private meta: Meta,
        private titleService: Title
    ) {}

    ngOnInit(): void {
        this.ar.params.subscribe((params) => {
            console.log(params);
            this.productId = params['productName'];
            this.product = this.catalog
                .find((group: Group) => group.groupId === params['group'])
                ?.products.find(
                    (product: Product) =>
                        product.urlName === params['productName']
                );
            // console.log(
            //     this.catalog.find(
            //         (group: Group) => group.groupId === params['group']
            //     )
            // );
            console.log(this.product);
        });
        this.titleService.setTitle(`NAPURA - ${this.productId}`);
        this.meta.addTag({
            name: 'description',
            content:
                'Napura already in Montenegro! Napura is a proffesional hair care products company designed and manufactured entirely in Italy with only high-quality materials and traditional craftmanship.',
        });
    }
}

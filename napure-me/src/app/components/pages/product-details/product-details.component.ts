import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    constructor(public ar: ActivatedRoute) {}

    ngOnInit(): void {
        this.ar.params.subscribe((params) => {
            console.log(params);
        });
    }
}

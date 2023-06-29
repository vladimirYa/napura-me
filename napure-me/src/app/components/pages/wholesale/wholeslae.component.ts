import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wholesale',
    templateUrl: './wholeslae.component.html',
    styleUrls: ['./wholeslae.component.scss'],
})
export class WholesaleComponent implements OnInit {
    ngOnInit() {}

    becomeAPartner(v: any) {
        console.log(v);
    }
}

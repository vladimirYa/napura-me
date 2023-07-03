import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LOADING_STATE } from 'src/app/services/loading';

@Component({
    selector: 'app-wholesale',
    templateUrl: './wholeslae.component.html',
    styleUrls: ['./wholeslae.component.scss'],
})
export class WholesaleComponent implements OnInit, OnDestroy {
    LOADING_STATE = LOADING_STATE;
    loading: LOADING_STATE = LOADING_STATE.DEAD;
    constructor(private apiService: ApiService, private ar: ActivatedRoute) {}
    ngOnInit() {
        this.ar.queryParams.subscribe((params) => {
            if (params['page'] !== 'wholesale') {
                this.loading = LOADING_STATE.DEAD;
            }
        });
    }

    becomeAPartner(v: any) {
        this.apiService.createWholesaleApplication(v).subscribe(
            (res) => {
                console.log(v);
                this.loading = LOADING_STATE.SUCCESS;
            },
            (err) => {
                this.loading = LOADING_STATE.ERROR;
            }
        );
    }

    ngOnDestroy(): void {}
}

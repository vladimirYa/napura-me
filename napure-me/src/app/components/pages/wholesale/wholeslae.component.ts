import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LOADING_STATE } from 'src/app/services/loading';

@Component({
    selector: 'app-wholesale',
    templateUrl: './wholeslae.component.html',
    styleUrls: ['./wholeslae.component.scss'],
})
export class WholesaleComponent implements OnInit {
    LOADING_STATE = LOADING_STATE;
    loading: LOADING_STATE = LOADING_STATE.DEAD;
    constructor(private apiService: ApiService) {}
    ngOnInit() {}

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
}

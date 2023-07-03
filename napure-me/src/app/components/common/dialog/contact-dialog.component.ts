import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService, IMaster } from 'src/app/services/api.service';
import { LOADING_STATE } from 'src/app/services/loading';

@Component({
    selector: 'app-contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent implements OnInit {
    LOADING_STATE = LOADING_STATE;
    loading: LOADING_STATE = LOADING_STATE.DEAD;
    constructor(
        public dialogRef: MatDialogRef<ContactDialogComponent>,
        private apiSerivce: ApiService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    close() {
        this.dialogRef.close();
    }

    becomeAMaster(v: IMaster) {
        this.loading = LOADING_STATE.LOADING;
        this.apiSerivce.createMasterApplication(v).subscribe(
            (res) => {
                this.loading = LOADING_STATE.SUCCESS;
            },
            (err) => {
                this.loading = LOADING_STATE.ERROR;
            }
        );
    }

    goToHome() {
        this.dialogRef.close();
        this.router.navigate(['/home'], { queryParams: { page: 'home' } });
    }
}

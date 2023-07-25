import { Component, OnInit } from '@angular/core';
import { CertDialogComponent } from '../../common/cert-dialog/cert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor(private dialog: MatDialog) {}
    ngOnInit() {}
    openCert(i: number) {
        this.dialog.open(CertDialogComponent, {
            data: { i },
            panelClass: 'custom-modalbox',
        });
    }
}

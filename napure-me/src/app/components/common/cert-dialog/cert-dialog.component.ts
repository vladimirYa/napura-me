import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-cert-dialog',
    templateUrl: './cert-dialog.component.html',
    styleUrls: ['./cert-dialog.component.scss'],
})
export class CertDialogComponent implements OnInit {
    currentI: number;
    constructor(
        public dialogRef: MatDialogRef<CertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { i: number }
    ) {
        this.currentI = data.i;
    }
    ngOnInit(): void {}

    close() {
        this.dialogRef.close();
    }
}

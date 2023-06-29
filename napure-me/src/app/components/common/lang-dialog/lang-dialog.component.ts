import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-lang-dialog',
    templateUrl: './lang-dialog.component.html',
    styleUrls: ['./lang-dialog.component.scss'],
})
export class LangDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<LangDialogComponent>) {}
    ngOnInit(): void {}
    close() {
        this.dialogRef.close();
    }
}

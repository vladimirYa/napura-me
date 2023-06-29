import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-contact-dialog',
    templateUrl: './contact-dialog.component.html',
    styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {}
    ngOnInit(): void {}
    close() {
        this.dialogRef.close();
    }
    becomeAMaster(v: any) {
        console.log(v);
    }
}

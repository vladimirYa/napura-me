import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../common/dialog/contact-dialog.component';

@Component({
    selector: 'app-master',
    templateUrl: './become-a-master.component.html',
    styleUrls: ['./become-a-master.component.scss'],
})
export class BecomeAMasterComponent implements OnInit {
    constructor(private dialog: MatDialog) {}
    ngOnInit() {}
    openContactDialog() {
        this.dialog.open(ContactDialogComponent, {});
    }
}

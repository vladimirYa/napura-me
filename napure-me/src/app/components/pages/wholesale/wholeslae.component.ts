import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-wholesale',
    templateUrl: './wholeslae.component.html',
    styleUrls: ['./wholeslae.component.scss'],
})
export class WholesaleComponent implements OnInit {
    formf: FormGroup;
    messengers: string[] = ['telegram', 'viber', 'whatsapp'];
    activeMessanger: string = '';
    constructor(public fb: FormBuilder) {
        this.formf = this.fb.group({
            name: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'blur',
            }),
            phone: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'blur',
            }),
            email: new FormControl(null, {
                validators: Validators.required,
                updateOn: 'blur',
            }),
        });
    }
    ngOnInit() {}

    becomePartner(v: any) {
        const formValue = {
            ...v,
            messanger: this.activeMessanger,
        };
        console.log(formValue);
    }

    selectMessenger(v: string) {
        this.activeMessanger = v;
    }
}

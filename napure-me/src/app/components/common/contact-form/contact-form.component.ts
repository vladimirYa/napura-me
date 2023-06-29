import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
    formf: FormGroup;
    messengers: string[] = ['telegram', 'viber', 'whatsapp'];
    activeMessanger: string = '';
    @Input() submitTextKey: string = '';
    @Output() onFormSubmit = new EventEmitter();

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
        this.onFormSubmit.emit(formValue);
    }

    selectMessenger(v: string) {
        this.activeMessanger = v;
    }
}

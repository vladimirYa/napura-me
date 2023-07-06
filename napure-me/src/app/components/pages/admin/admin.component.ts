import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ApiService, Auth, IMaster } from 'src/app/services/api.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: [
        './admin.component.scss',
        '../../common/contact-form/contact-form.component.scss',
    ],
})
export class AdminComponent implements OnInit {
    loginForm: FormGroup;
    isLoggedIn: boolean = false;
    mastersApplication: Observable<IMaster[]> = of();
    wholesaleApplication: Observable<IMaster[]> = of();

    constructor(public fb: FormBuilder, private api: ApiService) {
        this.loginForm = this.fb.group({
            login: ['', Validators.required],
            pass: ['', Validators.required],
        });
    }
    ngOnInit() {}
    auth(v: Auth) {
        this.api.auth(v).subscribe((res) => {
            console.log(res);
            if (res.status === 200) {
                this.isLoggedIn = true;
                this.mastersApplication = this.api.getAllMasterApplications();
                this.wholesaleApplication =
                    this.api.getAllWholesaleApplications();
            } else {
                this.isLoggedIn = false;
            }
        });
    }
    refreshMasters() {
        this.mastersApplication = this.api.getAllMasterApplications();
    }
    refreshWholesale() {
        this.wholesaleApplication = this.api.getAllWholesaleApplications();
    }
}

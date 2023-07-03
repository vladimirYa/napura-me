import {
    HttpClient,
    HttpHeaders,
    HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IMaster {
    name: string;
    email: string;
    phone: string;
    messenger: string;
}

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    createMasterApplication(master: IMaster): Observable<IMaster> {
        const headers = new HttpHeaders().set(
            'Access-Control-Allow-Origin',
            '*'
        );
        return this.http.post<IMaster>(
            'http://localhost:8000/master/create',
            master,
            {
                headers,
            }
        );
    }
    getAllMasterApplications(): Observable<IMaster[]> {
        const headers = new HttpHeaders().set(
            'Access-Control-Allow-Origin',
            '*'
        );
        return this.http.get<IMaster[]>(
            'http://localhost:8000/master/get-all',
            {
                headers,
            }
        );
    }
    createWholesaleApplication(master: IMaster): Observable<IMaster> {
        const headers = new HttpHeaders().set(
            'Access-Control-Allow-Origin',
            '*'
        );
        return this.http.post<IMaster>(
            'http://localhost:8000/wholesale/create',
            master,
            {
                headers,
            }
        );
    }
    getAllWholesaleApplications(): Observable<IMaster[]> {
        const headers = new HttpHeaders().set(
            'Access-Control-Allow-Origin',
            '*'
        );
        return this.http.get<IMaster[]>(
            'http://localhost:8000/wholesale/get-all',
            {
                headers,
            }
        );
    }
}

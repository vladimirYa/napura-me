import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.component.html',
    styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {
    apiLoaded: any;
    polakoCoords: google.maps.LatLngLiteral = {
        lat: 42.43070983886719,
        lng: 18.69860076904297,
    };
    markerOptions: google.maps.MarkerOptions = { draggable: false };
    constructor(public httpClient: HttpClient) {}

    ngOnInit(): void {
        this.apiLoaded = this.httpClient
            .jsonp(
                'https://maps.googleapis.com/maps/api/js?key=AIzaSyBX0R9Bq12iMsc5_bMz5ppwe3Gkq7PGZMM',
                'callback'
            )
            .pipe(map(() => true));
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AzkarService {

constructor(private http: HttpClient) {}

  getNames(): Observable<any> {
    return this.http.get('https://api.aladhan.com/v1/asmaAlHusna');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private HttpClient:HttpClient) { }

  getLocation(latitude:any,longitude:any):Observable<any>
  {
    return this.HttpClient.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
  }
  getPrayerTime(dateString:any,latitude:any,longitude:any):Observable<any>
  {
    return this.HttpClient.get(`https://api.aladhan.com/v1/timings/${dateString}?latitude=${latitude}&longitude=${longitude}&method=2`)
  }
  getQueblaDirection(latitude:any,longitude:any):Observable<any>
  {
   return this.HttpClient.get(`https://api.aladhan.com/v1/qibla/${latitude}/${longitude}`)
  }
}

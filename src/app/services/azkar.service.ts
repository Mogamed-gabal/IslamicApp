import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzkarService {

  constructor(private http:HttpClient) { }

  getAllAzkar():Observable<any>
  {
      return this.http.get(`https://api.hadith.gading.dev/books/bukhari?range=1-300`)
  }
}

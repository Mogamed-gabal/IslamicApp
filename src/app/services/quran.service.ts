import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private HttpClient:HttpClient) { }
  getAllQuranSurah():Observable<any>
  {
    return this.HttpClient.get(`https://api.alquran.cloud/v1/surah`)
  }
  getSurahDetail(surahNumber:number):Observable<any>
  {
    return this.HttpClient.get(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad`)
  }
}

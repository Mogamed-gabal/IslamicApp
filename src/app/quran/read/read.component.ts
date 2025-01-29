import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {

  surahs: any[] = []; // List of Surahs
  selectedSurah: any = null; // Selected Surah details
  isLoading: boolean = true; // Loading state
  constructor(){}

  async fetchSurahs() {
    try {
      const response = await axios.get('https://api.alquran.cloud/v1/surah');
      this.surahs = response.data.data;
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching Surahs:', error);
      this.isLoading = false;
    }
  }
  async fetchSurahDetails(surahNumber: number) {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad`);
      this.selectedSurah = response.data.data;
    } catch (error) {
      console.error('Error fetching Surah details:', error);
    }
  }
  onSurahSelect(event: any) {
    const surahNumber = event.target.value;
    this.fetchSurahDetails(surahNumber);
  }
  ngOnInit(): void {
    this.fetchSurahs();
  }
}

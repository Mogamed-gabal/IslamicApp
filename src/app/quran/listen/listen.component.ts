import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-listen',
  imports: [],
  templateUrl: './listen.component.html',
  styleUrl: './listen.component.css'
})
export class ListenComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer: any; // Reference to the audio element
  surahs: any[] = []; // List of Surahs
  selectedSurah: any = null; // Selected Surah details
  qaris: any[] = []; // List of Qaris for the selected Surah
  selectedQari: any = null; // Selected Qari details
  audioUrl: string = ''; // Audio URL for playback
  isLoading: boolean = true; // Loading state
  currentSurahIndex: number = 0; // Current Surah index for pagination
  isPlaying: boolean = false; // Playback state
  progress: number = 0; // Playback progress

  constructor(){}

  async fetchSurahs() {
    try {
      const response = await axios.get('https://api.alquran.cloud/v1/surah');
      this.surahs = response.data.data;
      this.isLoading = false;
      this.selectedSurah(this.surahs[0]); // Select the first Surah by default
    } catch (error) {
      console.error('Error fetching Surahs:', error);
      this.isLoading = false;
    }
  }
  async fetchQaris(surahNumber: number) {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/audio`);
      this.qaris = response.data.data;
      this.selectSurah = this.surahs.find(surah => surah.number === surahNumber);
    } catch (error) {
      console.error('Error fetching Qaris:', error);
    }
  }

  onSurahSelect(event: any) {
    const surahNumber = event.target.value;
    this.selectedSurah(this.surahs.find(surah => surah.number === surahNumber));
  }
  selectSurah(surah: any) {
    this.selectedSurah = surah;
    this.currentSurahIndex = this.surahs.findIndex(s => s.number === surah.number);
    this.fetchQaris(surah.number);
  }
  onQariSelect(event: any) {
    const qariIdentifier = event.target.value;
    this.selectedQari = this.qaris.find(qari => qari.identifier === qariIdentifier);
    this.audioUrl = this.selectedQari.audio;
  }
  nextSurah() {
    if (this.currentSurahIndex < this.surahs.length - 1) {
      this.selectSurah(this.surahs[this.currentSurahIndex + 1]);
    }
  }

  // Navigate to the previous Surah
  previousSurah() {
    if (this.currentSurahIndex > 0) {
      this.selectSurah(this.surahs[this.currentSurahIndex - 1]);
    }
  }
  togglePlay() {
    if (this.audioPlayer.nativeElement.paused) {
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.audioPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }
  updateProgress() {
    const duration = this.audioPlayer.nativeElement.duration;
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    this.progress = (currentTime / duration) * 100;
  }
  ngOnInit(): void {
      this.fetchSurahs()
  }
}

import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { QuranService } from "../../services/quran.service";

@Component({
  selector: "app-read",
  imports: [],
  templateUrl: "./read.component.html",
  styleUrl: "./read.component.css",
})
export class ReadComponent implements OnInit {
  surahs: any[] = []; // List of Surahs
  selectedSurah: any = null; // Selected Surah details
  isLoading: boolean = true; // Loading state
  constructor(private QuranService: QuranService) {}

  fetchSurahs() {
    this.QuranService.getAllQuranSurah().subscribe({
      next: (res) => {
        this.surahs = res.data;
      },
    });
  }

  featchSurahDetails(surahnumber: number) {
    this.QuranService.getSurahDetail(surahnumber).subscribe({
      next: (res) => {
        this.selectedSurah = res.data;
        this.isLoading = false;
      },
    });
  }
  onSurahSelect(event: any) {
    const surahNumber = event.target.value;
    this.featchSurahDetails(surahNumber);
  }
  ngOnInit(): void {
    this.fetchSurahs();
  }
}

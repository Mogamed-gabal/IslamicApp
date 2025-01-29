import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {Dropdown } from 'primeng/dropdown';
import { AutoComplete } from 'primeng/autocomplete';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  imports: [CommonModule,ListboxModule,RadioButtonModule,FormsModule,RouterLink],
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {
  chapters: any[] = []; // List of Quran chapters
  selectedChapter: any; // Selected chapter
  mode: 'read' | 'listen' = 'read'; // Default mode
  verses: any;
  constructor(private http: HttpClient) {}

  onChapterSelect(chapter: any) {
    this.selectedChapter = chapter;
    this.fetchVerses(chapter.id);
  }
  
  fetchChapters() {
    this.http.get('https://api.quran.com/api/v4/chapters')
      .subscribe((data: any) => {
        this.chapters = data.chapters;
      });
  }
  fetchVerses(chapterId: number) {
    this.http.get(`https://api.quran.com/api/v4/verses/by_chapter/${chapterId}?language=en&words=true`)
      .subscribe((data: any) => {
        this.verses = data.verses;
      });
  }
  ngOnInit(): void {
    this.fetchChapters()
  }
}
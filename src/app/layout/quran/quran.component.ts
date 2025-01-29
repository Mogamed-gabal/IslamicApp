import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  imports: [CommonModule,ListboxModule,RadioButtonModule,FormsModule,RouterLink],
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {
  isArabic:boolean=true
  constructor() {}
 changeLang()
 {
  this.isArabic=!this.isArabic
 }
  ngOnInit(): void {
    
  }
}
import { Component, OnInit } from '@angular/core';
import { AzkarService } from '../../services/azkar.service';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-zekr',
  imports: [FieldsetModule,ScrollPanelModule,CarouselModule,ButtonModule],
  templateUrl: './zekr.component.html',
  styleUrl: './zekr.component.css'
})
export class ZekrComponent implements OnInit {
  Azkar:any[]=[]
  AvilablesBooks:any[]=[]
  EmamName:string=''

  constructor(private AzkarService:AzkarService){}
  getEmamAhadith(name:string)
  {
    this.EmamName=name
    
    this.AzkarService.getAhadith(name).subscribe({
      next:(res)=>{this.Azkar=res.data.hadiths}
    })
  }

  ngOnInit(): void {
 
   this.AzkarService.getAllAvilableBooks().subscribe({
    next:(res)=>{this.AvilablesBooks=res.data,console.log(this.AvilablesBooks)}
   })
  }
}

import { Component, OnInit } from '@angular/core';
import { AzkarService } from '../../services/azkar.service';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'app-zekr',
  imports: [FieldsetModule,ScrollPanelModule],
  templateUrl: './zekr.component.html',
  styleUrl: './zekr.component.css'
})
export class ZekrComponent implements OnInit {
  Azkar:any[]=[]

  constructor(private AzkarService:AzkarService){}


  ngOnInit(): void {
   console.log(this.AzkarService.getAllAzkar().subscribe({
    next:(res)=>{this.Azkar=res.data.hadiths,console.log(this.Azkar)}
   })
   )
  }
}
